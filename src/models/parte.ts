import type { DestinatarioApiDTO } from "../types.js";

export type ParteProps = {
	nome: string;
	polo: "P" | "A";
};

export class Parte {
	protected props: ParteProps;

	constructor(props: ParteProps) {
		this.props = props;
	}

	get nome() {
		return this.props.nome;
	}

	get polo() {
		return this.props.polo;
	}

	static fromApiDTO(props: DestinatarioApiDTO) {
		return new Parte({
			nome: props.nome,
			polo: props.polo,
		});
	}
}
