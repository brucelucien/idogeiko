import { Afirmacao } from "../infrastructure/afirmacao.enum";

export class Movimento {

    public constructor(
        private id: number = -1,
        private descricao: string = '',
        private estaNoKihon: Afirmacao = Afirmacao.NAO_INFORMADO
    ) {
    }

}
