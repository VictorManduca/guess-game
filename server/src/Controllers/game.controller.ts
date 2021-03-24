import { Request, Response } from 'express'

import { emptyOk } from '../Shared/response.shared'

export default class GameController {
	public index(req: Request, res: Response): Response {
		return emptyOk(res)
	}
}
