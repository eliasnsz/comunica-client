import type { UF } from "../types.js";

export type OabProps = {
	numero: string;
	uf: UF;
};

export class Oab {
	protected props: OabProps;

	constructor(props: OabProps) {
		this.props = props;
	}

	get numero() {
		return this.props.numero;
	}

	get uf() {
		return this.props.uf;
	}
}
