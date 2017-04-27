import { AdmiteGyaku } from "./admite-gyaku.enum";
import { FazParteKihon } from "./faz-parte-kihon.enum";
import { TipoDeTecnica } from "./tipo-de-tecnica.enum";

export class Movimento {

    public constructor(
        public id: number = -1,
        public descricao: string = '',
        public estaNoKihon: FazParteKihon = FazParteKihon.NAO_INFORMADO,
        public tipoDeTecnica: TipoDeTecnica = TipoDeTecnica.NAO_INFORMADA,
        public admiteGyaku: AdmiteGyaku = AdmiteGyaku.NAO_INFORMADO
    ) {
    }

}
