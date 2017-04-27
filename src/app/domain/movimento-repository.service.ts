import { Injectable } from '@angular/core';

import { Movimento } from "./movimento";
import { MovimentoEscolhido } from "./movimento-escolhido";
import { FazParteKihon } from "./faz-parte-kihon.enum";
import { AdmiteGyaku } from "./admite-gyaku.enum";
import { TipoDeTecnica } from "./tipo-de-tecnica.enum";

@Injectable()
export class MovimentoRepositoryService {

  private movimentos: Array<Movimento> = [
    /**
     * KIHON
     */
    new Movimento(1, 'seiken chudan tsuki', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(2, 'seiken jodan tsuki', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(3, 'uraken gamen uchi', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(4, 'uraken sayu uchi', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(5, 'uraken hizo uchi', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(6, 'uraken mawashi uchi', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(7, 'seiken ago uchi', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(8, 'seiken shita tsuki', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(9, 'hiji yoko uchi', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(10, 'jodan uke', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(11, 'chudan soto uke', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(12, 'chudan uchi uke', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(13, 'gedan barai', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(14, 'chudan uchi uke gedan barai', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(15, 'shuto gammen uchi', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(16, 'shuto sakotsu uchi', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(17, 'shuto sakotsu uchi komi', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(18, 'shuto uchi uchi', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(19, 'shuto hizo uchi', FazParteKihon.SIM, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(20, 'mae keage', FazParteKihon.SIM, TipoDeTecnica.ASHI_WAZA, AdmiteGyaku.SIM),
    new Movimento(21, 'uchi mawashi geri', FazParteKihon.SIM, TipoDeTecnica.ASHI_WAZA, AdmiteGyaku.SIM),
    new Movimento(22, 'soto mawashi geri', FazParteKihon.SIM, TipoDeTecnica.ASHI_WAZA, AdmiteGyaku.SIM),
    new Movimento(23, 'hiza geri', FazParteKihon.SIM, TipoDeTecnica.ASHI_WAZA, AdmiteGyaku.SIM),
    new Movimento(24, 'mae kin geri', FazParteKihon.SIM, TipoDeTecnica.ASHI_WAZA, AdmiteGyaku.SIM),
    new Movimento(25, 'mae geri', FazParteKihon.SIM, TipoDeTecnica.ASHI_WAZA, AdmiteGyaku.SIM),
    new Movimento(26, 'mawashi geri', FazParteKihon.SIM, TipoDeTecnica.ASHI_WAZA, AdmiteGyaku.SIM),
    new Movimento(27, 'yoko keage', FazParteKihon.SIM, TipoDeTecnica.ASHI_WAZA, AdmiteGyaku.SIM),
    new Movimento(28, 'kansetsu geri', FazParteKihon.SIM, TipoDeTecnica.ASHI_WAZA, AdmiteGyaku.SIM),
    new Movimento(29, 'yoko geri', FazParteKihon.SIM, TipoDeTecnica.ASHI_WAZA, AdmiteGyaku.SIM),
    new Movimento(30, 'ushiro geri', FazParteKihon.SIM, TipoDeTecnica.ASHI_WAZA, AdmiteGyaku.SIM),
    /**
     * ADICIONAIS (a mais do que o KIHON)
     */
    new Movimento(31, 'jo chu tsuki', FazParteKihon.NAO, TipoDeTecnica.TE_WAZA, AdmiteGyaku.SIM),
    new Movimento(32, 'morote chudan tsuki', FazParteKihon.NAO, TipoDeTecnica.TE_WAZA, AdmiteGyaku.NAO),
    new Movimento(33, 'morote jodan tsuki', FazParteKihon.NAO, TipoDeTecnica.TE_WAZA, AdmiteGyaku.NAO)
  ];

  public constructor() {
  }

  private movimentoToMovimentoEscolhido(movimento: Movimento, seraGyaku: boolean): MovimentoEscolhido {
    let escolhido: MovimentoEscolhido = new MovimentoEscolhido(
      movimento.id,
      movimento.descricao,
      movimento.estaNoKihon,
      movimento.tipoDeTecnica,
      movimento.admiteGyaku,
      seraGyaku
    );
    return escolhido;
  }

  private jogarParOuImpar(): boolean {
    return (Math.ceil(Math.random() * 10) % 2) == 0;
  }

  public escolherUmaSequenciaAleatoriaDeMovimentos(qtdMovimentosEmUmaSequencia: number, tipoDeTecnica: TipoDeTecnica): Array<MovimentoEscolhido> {
    let escolhidos: Array<MovimentoEscolhido> = [];
    let cont: number = 1;
    while (cont <= qtdMovimentosEmUmaSequencia) {
      let indice: number = 0;
      let correto: boolean = false;
      while (!correto) {
        indice = (Math.ceil(Math.random() * 100) - 1);
        correto = (indice >= 0) && (indice < this.movimentos.length);
      }
      if ((tipoDeTecnica == TipoDeTecnica.NAO_INFORMADA) || (tipoDeTecnica == this.movimentos[indice].tipoDeTecnica)) {
        escolhidos.push(this.movimentoToMovimentoEscolhido(this.movimentos[indice], this.movimentos[indice].admiteGyaku && this.jogarParOuImpar()));
        cont++;
      }
    }
    return escolhidos;
  }

}
