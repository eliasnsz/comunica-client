import type { ComunicacaoApiDTO } from "../types.js";

export type ClasseProps = {
	codigo: string;
	nome: string;
};

export class Classe {
	protected props: ClasseProps;

	private constructor(props: ClasseProps) {
		this.props = props;
	}

	get codigo() {
		return this.props.codigo;
	}

	get nome() {
		return this.props.nome;
	}

	static fromApiDTO(props: ComunicacaoApiDTO) {
		return new Classe({
			codigo: props.codigoClasse,
			nome: props.nomeClasse,
		});
	}
}
