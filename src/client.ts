import axios, { type AxiosInstance, type AxiosResponse } from "axios";
import { ComunicaError } from "./errors.js";
import { Comunicacao } from "./models/comunicacao.js";
import type { ComunicacoesAPIResponse, ComunicacoesFilters } from "./types.js";

export type ComunicaClientOptions = {
	baseURL?: string;
	timeout?: number;
	httpClient?: AxiosInstance;
};

const DEFAULT_BASE_URL = "https://comunicaapi.pje.jus.br";
const DEFAULT_TIMEOUT = 1000 * 10; // 10s

export class ComunicaClient {
	private readonly baseURL: string;
	private readonly httpClient: AxiosInstance;

	constructor(options: ComunicaClientOptions = {}) {
		this.baseURL = options.baseURL ?? DEFAULT_BASE_URL;
		this.httpClient =
			options.httpClient ??
			axios.create({
				baseURL: this.baseURL,
				timeout: options.timeout ?? DEFAULT_TIMEOUT,
			});
	}

	async buscarComunicacoes(filters: Partial<ComunicacoesFilters>) {
		const url = "/api/v1/comunicacao";

		let response: AxiosResponse<ComunicacoesAPIResponse>;
		try {
			response = await this.httpClient.get<ComunicacoesAPIResponse>(url, {
				params: filters,
			});
		} catch (error) {
			const status = axios.isAxiosError(error)
				? error.response?.status
				: undefined;
			throw new ComunicaError("Falha na requisição à API do Comunica", {
				...(status !== undefined && { status }),
				cause: error,
			});
		}

		if (response.data.status !== "success") {
			throw new ComunicaError("Ocorreu um erro ao buscar as comunicações", {
				status: response.status,
			});
		}

		return {
			count: response.data.count,
			items: response.data.items.map(Comunicacao.fromApiDTO),
		};
	}
}
