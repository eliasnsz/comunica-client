import type { ComunicacaoApiDTO } from "../types.js";
import { Classe } from "./classe.js";

export type ComunicacaoProps = {
	readonly id: number;
	readonly hash: string;
	readonly numeroUnico: string;
	readonly siglaTribunal: string;
	readonly status: string;
	readonly dataDisponibilizacao: string;
	readonly tipoDocumento: string;
	readonly tipoComunicacao: string;
	readonly texto: string;
	readonly link: string;
	readonly meio: "D" | "E";
	readonly idOrgao: number;
	readonly nomeOrgao: string;
	readonly classe: Classe;
	readonly ativo: boolean;
};

export class Comunicacao {
	protected props: ComunicacaoProps;

	private constructor(props: ComunicacaoProps) {
		this.props = props;
	}

	get id() {
		return this.props.id;
	}

	get hash() {
		return this.props.hash;
	}

	get numeroUnico() {
		return this.props.numeroUnico;
	}

	get siglaTribunal() {
		return this.props.siglaTribunal;
	}

	get status() {
		return this.props.status;
	}

	get classe() {
		return this.props.classe;
	}

	get dataDisponibilizacao() {
		return new Date(this.props.dataDisponibilizacao);
	}

	static fromApiDTO(props: ComunicacaoApiDTO) {
		return new Comunicacao({
			id: props.id,
			hash: props.hash,
			numeroUnico: props.numero_processo,
			siglaTribunal: props.siglaTribunal,
			status: props.status,
			dataDisponibilizacao: props.data_disponibilizacao,
			tipoDocumento: props.tipoDocumento,
			tipoComunicacao: props.tipoComunicacao,
			texto: props.texto,
			link: props.link,
			meio: props.meio,
			idOrgao: props.idOrgao,
			nomeOrgao: props.nomeOrgao,
			classe: new Classe({
				codigo: props.codigoClasse,
				nome: props.nomeClasse,
			}),
			ativo: props.ativo,
		});
	}
}
