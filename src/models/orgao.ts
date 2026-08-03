export type OrgaoProps = {
	id: number;
	nome: string;
};

export class Orgao {
	protected props: OrgaoProps;

	constructor(props: OrgaoProps) {
		this.props = props;
	}

	get id() {
		return this.props.id;
	}

	get nome() {
		return this.props.nome;
	}
}
