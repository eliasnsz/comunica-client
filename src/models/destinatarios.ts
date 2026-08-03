import type { Advogado } from "./advogado.js";
import type { Parte } from "./parte.js";

export type DestinatariosProps = {
	partes: Parte[];
	advogados: Advogado[];
};

export class Destinatarios {
	protected props: DestinatariosProps;

	constructor(props: DestinatariosProps) {
		this.props = props;
	}

	get partes() {
		return this.props.partes;
	}

	get advogados() {
		return this.props.advogados;
	}
}
