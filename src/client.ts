import axios, { type AxiosInstance } from "axios";
import { Comunicacao } from "./models/comunicacao.js";
import type { ComunicacoesAPIResponse, ComunicacoesFilters } from "./types.js";

export class ComunicaClient {
	private baseURL: string;
	private httpClient: AxiosInstance;

	constructor() {
		this.baseURL = "https://comunicaapi.pje.jus.br";
		this.httpClient = axios.create({
			baseURL: this.baseURL,
			timeout: 1000 * 10, // 10s
		});
	}

	async buscarComunicacoes(filters: Partial<ComunicacoesFilters>) {
		const url = "/api/v1/comunicacao";

		const response = await this.httpClient.get<ComunicacoesAPIResponse>(url, {
			params: filters,
		});

		if (response.data.status !== "success") {
			throw new Error("Ocorreu um erro ao buscar as comunicações");
		}

		return {
			count: response.data.count,
			items: response.data.items.map(Comunicacao.fromApiDTO),
		};
	}
}
