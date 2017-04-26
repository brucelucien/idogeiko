import { Injectable } from '@angular/core';

import { Movimento } from "./movimento";
import { Afirmacao } from "../infrastructure/afirmacao.enum";

@Injectable()
export class MovimentoRepositoryService {

  private movimentos: Array<Movimento> = [
    new Movimento(1, 'seiken chudan tsuki', Afirmacao.SIM),
    new Movimento(2, 'seiken jodan tsuki', Afirmacao.SIM),
    new Movimento(3, 'uraken gamen uchi', Afirmacao.SIM),
    new Movimento(4, 'uraken sayu uchi', Afirmacao.SIM),
    new Movimento(5, 'uraken hizo uchi', Afirmacao.SIM),
    new Movimento(6, 'uraken mawashi uchi', Afirmacao.SIM),
    new Movimento(7, 'seiken ago uchi', Afirmacao.SIM),
    new Movimento(8, 'seiken shita tsuki', Afirmacao.SIM),
    new Movimento(9, 'hiji yoko uchi', Afirmacao.SIM),
    new Movimento(10, 'jodan uke', Afirmacao.SIM),
    new Movimento(11, 'chudan soto uke', Afirmacao.SIM),
    new Movimento(12, 'chudan uchi uke', Afirmacao.SIM),
    new Movimento(13, 'gedan barai', Afirmacao.SIM),
    new Movimento(14, 'chudan uchi uke gedan barai', Afirmacao.SIM),
    new Movimento(15, 'shuto gammen uchi', Afirmacao.SIM),
    new Movimento(16, 'shuto sakotsu uchi', Afirmacao.SIM),
    new Movimento(17, 'shuto sakotsu uchi komi', Afirmacao.SIM),
    new Movimento(18, 'shuto uchi uchi', Afirmacao.SIM),
    new Movimento(19, 'shuto hizo uchi', Afirmacao.SIM),
    new Movimento(20, 'mae keage', Afirmacao.SIM),
    new Movimento(21, 'uchi mawashi geri', Afirmacao.SIM),
    new Movimento(22, 'soto mawashi geri', Afirmacao.SIM),
    new Movimento(23, 'hiza geri', Afirmacao.SIM),
    new Movimento(24, 'mae kin geri', Afirmacao.SIM),
    new Movimento(25, 'mae geri', Afirmacao.SIM),
    new Movimento(26, 'mawashi geri', Afirmacao.SIM),
    new Movimento(27, 'yoko keage', Afirmacao.SIM),
    new Movimento(28, 'kansetsu geri', Afirmacao.SIM),
    new Movimento(29, 'yoko geri', Afirmacao.SIM),
    new Movimento(30, 'ushiro geri', Afirmacao.SIM)
  ];

  public constructor() {
  }

  public escolherUmaSequenciaAleatoriaDeMovimentos(qtdMovimentosEmUmaSequencia: number): Array<Movimento> {
    let escolhidos: Array<Movimento> = [];
    for (let cont = 1; cont <= qtdMovimentosEmUmaSequencia; cont++) {
      let indice: number = 0;
      let correto: boolean = false;
      while (!correto) {
        indice = (Math.ceil(Math.random() * 100) - 1);
        correto = (indice >= 0) && (indice < this.movimentos.length);
      }
      escolhidos.push(this.movimentos[indice]);
    }
    return escolhidos;
  }

}
