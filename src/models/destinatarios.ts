import type { ComunicacaoApiDTO } from "../types.js";
import { Advogado } from "./advogado.js";
import { Parte } from "./parte.js";

export type DestinatariosProps = {
	partes: Parte[];
	advogados: Advogado[];
};

export class Destinatarios {
	protected props: DestinatariosProps;

	private constructor(props: DestinatariosProps) {
		this.props = props;
	}

	get partes() {
		return this.props.partes;
	}

	get advogados() {
		return this.props.advogados;
	}

	static fromApiDTO(props: ComunicacaoApiDTO) {
		return new Destinatarios({
			advogados: (props.destinatarioadvogados ?? []).map(Advogado.fromApiDTO),
			partes: (props.destinatarios ?? []).map(Parte.fromApiDTO),
		});
	}
}
