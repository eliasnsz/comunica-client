export type ComunicacoesFilters = {
	numeroOab: string;
	ufOab: string;
	nomeAdvogado: string;
	nomeParte: string;
	numeroProcesso: string;
	dataDisponibilizacaoInicio: string;
	dataDisponibilizacaoFim: string;
	siglaTribunal: string;
	numeroComunicacao: string;
	pagina: number;
	itensPorPagina: number;
	orgaoId: number;
	meio: "D" | "E";
	texto: string;
};

export type ComunicacoesAPIResponse =
	| {
			status: "success";
			message: string;
			count: 10000; // API sempre retorna 10000, independente dos parâmetros de paginação
			items: Comunicacao[];
	  }
	| {
			status: "error";
			message: string;
	  };

export type Comunicacao = {
	id: number;
	/**  Formato YYYY-MM-DD. */
	data_disponibilizacao: string;
	siglaTribunal: string;
	tipoComunicacao: string;
	nomeOrgao: string;
	idOrgao: number;
	texto: string;
	numero_processo: string;
	meio: "D" | "E";
	link: string;
	tipoDocumento: string;
	nomeClasse: string;
	codigoClasse: string;
	numeroComunicacao: number;
	ativo: boolean;
	hash: string;
	status: string;
	motivo_cancelamento: string | null;
	data_cancelamento: string | null;
	/** Formato DD/MM/YYYY */
	datadisponibilizacao: string;
	meiocompleto: string;
	numeroprocessocommascara: string;
	destinatarios: Destinatario[];
	destinatarioadvogados: [];
};

export type Destinatario = {
	nome: string;
	comunicacao_id: number;
	polo: "P" | "A";
};

export type DestinatarioAdvogado = {
	id: number;
	comunicacao_id: number;
	advogado_id: number;
	advogado: Advogado;
	/** Formato YYYY-MM-DDTHH:mm:ss */
	created_at: string;
	updated_at: string;
};

export type Advogado = {
	id: number;
	nome: string;
	numero_oab: string;
	uf_oab: UF;
};

export type UF =
	| "AC"
	| "AL"
	| "AP"
	| "AM"
	| "BA"
	| "CE"
	| "DF"
	| "ES"
	| "GO"
	| "MA"
	| "MT"
	| "MS"
	| "MG"
	| "PA"
	| "PB"
	| "PR"
	| "PE"
	| "PI"
	| "RJ"
	| "RN"
	| "RS"
	| "RO"
	| "RR"
	| "SC"
	| "SP"
	| "SE"
	| "TO";
