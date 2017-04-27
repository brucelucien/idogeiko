import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movimento } from "../../domain/movimento";
import { MovimentoRepositoryService } from "../../domain/movimento-repository.service";
import { TipoDeTecnica } from "../../domain/tipo-de-tecnica.enum";

@Component({
  selector: 'idk-gerador-de-sequencias',
  templateUrl: './gerador-de-sequencias.component.html',
  styleUrls: ['./gerador-de-sequencias.component.css']
})
export class GeradorDeSequenciasComponent implements OnInit {

  private quantidadeMarcadaComoDefault: number = 4;

  public idogeiko: Array<Movimento> = undefined;
  public quantidadesAEscolher: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public tecnicasAEscolher: Array<TipoDeTecnica> = [TipoDeTecnica.TE_WAZA, TipoDeTecnica.ASHI_WAZA, TipoDeTecnica.NAO_INFORMADA];
  public quantidadeDesejadaPeloUsuario: number = this.quantidadeMarcadaComoDefault;
  public tecnicaEscolhidaPeloUsuario: TipoDeTecnica = TipoDeTecnica.TE_WAZA;

  public constructor(
    private repositorioDeMovimentos: MovimentoRepositoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  private validarValorQueryParam(valor: string): boolean {
    return (valor != undefined) && (valor.length > 0);
  }

  private consumirQuantidadeEscolhidaPeloUsuario() {
    this.activatedRoute.queryParams
      .subscribe((queryParam: any) => {
        if (this.validarValorQueryParam(queryParam['a'])) {
          this.quantidadeDesejadaPeloUsuario = queryParam['a'];
        }
        if (this.validarValorQueryParam(queryParam['t'])) {
          this.tecnicaEscolhidaPeloUsuario = queryParam['t'];
        }
        this.gerarIdogeiko();
      });
  }

  public ngOnInit(): void {
    this.consumirQuantidadeEscolhidaPeloUsuario();
  }

  public gerarIdogeiko(): void {
    this.idogeiko = this.repositorioDeMovimentos.escolherUmaSequenciaAleatoriaDeMovimentos(
      this.quantidadeDesejadaPeloUsuario,
      this.tecnicaEscolhidaPeloUsuario
    );
  }

  public registrarValorEscolhido(valor: number) {
    this.quantidadeDesejadaPeloUsuario = valor;
  }

  public recarregarPaginaComOsParametrosEscolhidosPeloUsuario() {
    this.router.navigate(['home', 'generator'], {
      queryParams: {

        // RANDOM
        r: Math.random(),

        // AMOUNT
        a: this.quantidadeDesejadaPeloUsuario,

        // TECHNIQUE
        t: this.tecnicaEscolhidaPeloUsuario

      }
    });
  }

  public registrarTecnicaEscolhida(tecnica: TipoDeTecnica): void {
    this.tecnicaEscolhidaPeloUsuario = tecnica;
  }

  public tipoDeTecnicaToString(tipoDeTecnica: TipoDeTecnica): string {
    let tecnicaAsString: string = '';
    switch (tipoDeTecnica) {
      case TipoDeTecnica.ASHI_WAZA:
        tecnicaAsString = 'Ashi Waza';
        break;
      case TipoDeTecnica.TE_WAZA:
        tecnicaAsString = 'Te Waza';
        break;
      case TipoDeTecnica.NAO_INFORMADA:
        tecnicaAsString = 'Both';
        break;
    }
    return tecnicaAsString;
  }

}
