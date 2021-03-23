import { Request, Response } from 'express'

import { emptyOk } from '../Shared/response.shared'

export default class GameController {
	constructor() { }

	public index(req: Request, res: Response) {
		return emptyOk(res)
	}
}
