import { Response } from 'express'

export function ok(res: Response, data: unknown): Response {
	return res.status(200).json({ data: data })
}

export function emptyOk(res: Response): Response {
	return res.status(200).send()
}

export function created(res: Response): Response {
	return res.status(201).send()
}
