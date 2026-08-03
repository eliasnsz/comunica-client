import axios, { type AxiosInstance } from "axios";
import type { ComunicacoesFilters } from "./types.js";

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

		const response = await this.httpClient.get(url, {
			params: filters,
		});

		return response.data;
	}
}
