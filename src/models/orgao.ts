import type { ComunicacaoApiDTO } from "../types.js";

export type OrgaoProps = {
	id: number;
	nome: string;
};

export class Orgao {
	protected props: OrgaoProps;

	private constructor(props: OrgaoProps) {
		this.props = props;
	}

	get id() {
		return this.props.id;
	}

	get nome() {
		return this.props.nome;
	}

	static fromApiDTO(props: ComunicacaoApiDTO) {
		return new Orgao({
			id: props.idOrgao,
			nome: props.nomeOrgao,
		});
	}
}
