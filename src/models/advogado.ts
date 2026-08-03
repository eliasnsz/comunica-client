import type { Oab } from "./oab.js";

export type AdvogadoProps = {
	id: number;
	nome: string;
	oab: Oab;
};

export class Advogado {
	protected props: AdvogadoProps;

	constructor(props: AdvogadoProps) {
		this.props = props;
	}

	get id() {
		return this.props.id;
	}

	get nome() {
		return this.props.nome;
	}

	get oab() {
		return this.props.oab;
	}
}
