import { Component, OnInit } from '@angular/core';

import { Movimento } from "../../domain/movimento";
import { MovimentoRepositoryService } from "../../domain/movimento-repository.service";

@Component({
  selector: 'idk-gerador-de-sequencias',
  templateUrl: './gerador-de-sequencias.component.html',
  styleUrls: ['./gerador-de-sequencias.component.css']
})
export class GeradorDeSequenciasComponent implements OnInit {

  private quantidadeMarcadaComoDefault: number = 4;

  public idogeiko: Array<Movimento> = undefined;
  public quantidadesAEscolher: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public quantidadeDesejadaPeloUsuario: number = this.quantidadeMarcadaComoDefault;

  public constructor(
    private repositorioDeMovimentos: MovimentoRepositoryService
  ) {
  }

  public ngOnInit(): void {
    this.gerarIdogeiko();
  }

  public gerarIdogeiko(): void {
    this.idogeiko = this.repositorioDeMovimentos.escolherUmaSequenciaAleatoriaDeMovimentos(this.quantidadeDesejadaPeloUsuario);
  }

  public registrarValorEscolhido(valor: number) {
    this.quantidadeDesejadaPeloUsuario = valor;
  }

}
