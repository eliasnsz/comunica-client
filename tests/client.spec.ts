import nock from "nock";
import { ComunicaClient } from "../src/client.js";
import { Comunicacao } from "../src/models/comunicacao.js";

const BASE_URL = "https://comunicaapi.pje.jus.br";

describe("ComunicaClient", () => {
	let client: ComunicaClient;

	beforeEach(() => {
		client = new ComunicaClient();
	});

	describe("buscarComunicacoes", () => {
		it("deveria buscar as comunicações com os parâmetros informados", async () => {
			nock(BASE_URL)
				.get("/api/v1/comunicacao")
				.query({
					numeroProcesso: "0001234-56.2018.2.00.0000",
				})
				.reply(200, {
					status: "success",
					message: "Sucesso",
					count: 1,
					items: [
						{
							id: 684242500,
							siglaTribunal: "TJAL",
							tipoComunicacao: "Intimação",
							data_disponibilizacao: "2026-08-03",
						},
					],
				});

			const data = await client.buscarComunicacoes({
				numeroProcesso: "0001234-56.2018.2.00.0000",
			});

			expect(data.count).toEqual(1);
			expect(data.items).toHaveLength(1);
			expect(data.items[0]).toBeInstanceOf(Comunicacao);
			expect(data.items[0].id).toEqual(684242500);
			expect(data.items[0].siglaTribunal).toEqual("TJAL");
			expect(data.items[0].dataDisponibilizacao).toEqual(
				new Date("2026-08-03"),
			);
		});
	});
});
