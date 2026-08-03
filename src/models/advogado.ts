import type { DestinatarioAdvogadoApiDTO } from "../types.js";
import { Oab } from "./oab.js";

export type AdvogadoProps = {
	id: number;
	nome: string;
	oab: Oab;
};

export class Advogado {
	protected props: AdvogadoProps;

	private constructor(props: AdvogadoProps) {
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

	static fromApiDTO(props: DestinatarioAdvogadoApiDTO) {
		return new Advogado({
			id: props.advogado_id,
			nome: props.advogado.nome,
			oab: new Oab({
				numero: props.advogado.numero_oab,
				uf: props.advogado.uf_oab,
			}),
		});
	}
}
