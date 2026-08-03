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
}
