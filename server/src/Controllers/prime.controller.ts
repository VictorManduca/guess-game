import { Request, Response } from 'express'

import { findAllPrimeNumbers } from '../Shared/prime.shared'
import { emptyOk, ok } from '../Shared/response.shared'

export default class PrimeController {
	public index(req: Request, res: Response) {
		return ok(res, findAllPrimeNumbers())
	}
}
