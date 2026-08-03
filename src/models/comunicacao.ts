import type { ComunicacaoApiDTO } from "../types.js";
import { Advogado } from "./advogado.js";
import { Classe } from "./classe.js";
import { Destinatarios } from "./destinatarios.js";
import { Oab } from "./oab.js";
import { Orgao } from "./orgao.js";
import { Parte } from "./parte.js";

export type ComunicacaoProps = {
	id: number;
	hash: string;
	numeroUnico: string;
	siglaTribunal: string;
	status: string;
	dataDisponibilizacao: string;
	tipoDocumento: string;
	tipoComunicacao: string;
	texto: string;
	link: string;
	meio: "D" | "E";
	destinatarios: Destinatarios;
	orgao: Orgao;
	classe: Classe;
	ativo: boolean;
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

	get orgao() {
		return this.props.orgao;
	}

	get destinatarios() {
		return this.props.destinatarios;
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
			orgao: new Orgao({
				id: props.idOrgao,
				nome: props.nomeOrgao,
			}),
			classe: new Classe({
				codigo: props.codigoClasse,
				nome: props.nomeClasse,
			}),
			destinatarios: new Destinatarios({
				partes: props.destinatarios?.map(
					(p) => new Parte({ nome: p.nome, polo: p.polo }),
				),
				advogados: props.destinatarioadvogados?.map(
					(p) =>
						new Advogado({
							id: p.advogado_id,
							oab: new Oab({
								numero: p.advogado.numero_oab,
								uf: p.advogado.uf_oab,
							}),
							nome: p.advogado.nome,
						}),
				),
			}),
			ativo: props.ativo,
		});
	}
}
