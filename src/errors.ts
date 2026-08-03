export class ComunicaError extends Error {
	readonly status: number | undefined;

	constructor(
		message: string,
		options: { status?: number; cause?: unknown } = {},
	) {
		super(message, { cause: options.cause });
		this.name = "ComunicaError";
		this.status = options.status;
	}
}
