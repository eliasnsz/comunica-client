export type ClasseProps = {
	codigo: string;
	nome: string;
};

export class Classe {
	protected props: ClasseProps;

	constructor(props: ClasseProps) {
		this.props = props;
	}

	get codigo() {
		return this.props.codigo;
	}

	get nome() {
		return this.props.nome;
	}
}
