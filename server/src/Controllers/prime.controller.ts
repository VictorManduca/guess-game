import { Request, Response } from 'express'

import { emptyOk } from '../Shared/response.shared'

export default class PrimeController {
	public index(req: Request, res: Response): Response {

	}

	private findAllPrimeNumbers() {
		const first = 1
		const last = 20_000
		let primeNumbers = new Array()

		for (let number = first; number <= last; number++) {
			let flag = 0

			for (let j = 2; j < number; j++) {
				if (number % j == 0) {
					flag = 1
					break
				}
			}

			if (number > 1 && flag == 0) {
				primeNumbers.push(number)
			}
		}
	}
}
