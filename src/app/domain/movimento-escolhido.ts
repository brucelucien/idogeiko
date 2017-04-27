import { Movimento } from "./movimento";
import { AdmiteGyaku } from "./admite-gyaku.enum";
import { FazParteKihon } from "./faz-parte-kihon.enum";
import { TipoDeTecnica } from "./tipo-de-tecnica.enum";

export class MovimentoEscolhido extends Movimento {

    private static GYAKU = 'gyaku';

    public constructor(
        public id: number = -1,
        public descricao: string = '',
        public estaNoKihon: FazParteKihon = FazParteKihon.NAO_INFORMADO,
        public tipoDeTecnica: TipoDeTecnica = TipoDeTecnica.NAO_INFORMADA,
        public admiteGyaku: AdmiteGyaku = AdmiteGyaku.NAO_INFORMADO,
        public exibirComoGyaku: boolean = false
    ) {
        super(id, descricao, estaNoKihon, tipoDeTecnica, admiteGyaku);
        this.adicionarGyakuADescricao();
    }

    private adicionarGyakuADescricao(): void {
        if (this.exibirComoGyaku) {
            this.descricao = MovimentoEscolhido.GYAKU.concat(' ', this.descricao);
        }
    }

}
