import { Request, Response } from 'express'

import GameRepository from '../Repository/game.repository'
import { ok, emptyOk, badRequest, created } from '../Shared/response.shared'
import UserRepository from '../Repository/user.repository'
import { isFieldsValid, isUserRegistered } from '../Shared/validator.shared'

export default class GameController {
	public async index(req: Request, res: Response) {
		try {
			const gameRepository: GameRepository = new GameRepository
			const rank = await gameRepository.selectRank()
			return ok(res, rank)
		} catch (error) {
			return badRequest(res, error)
		}
	}

	public async createOrUpdate(req: Request, res: Response) {
		try {
			const { name, time, guesses, number } = req.body
			const userRepository: UserRepository = new UserRepository
			const gameRepository: GameRepository = new GameRepository

			if (!isFieldsValid({ name, time, guesses, number })) {
				return badRequest(res, 'Invalid payload')
			}

			const hasUser = await isUserRegistered(name)
			if (hasUser) {
				await gameRepository.update(time, guesses, number, hasUser)
				return emptyOk(res)
			}

			const user = await userRepository.create(name)
			await gameRepository.create(time, guesses, number, user)

			return created(res)
		} catch (error) {
			return badRequest(res, error)
		}
	}
}
