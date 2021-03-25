import { getConnection, getManager } from 'typeorm'

import { Game } from '../Models/Entities/Game'
import { User } from '../Models/Entities/User'

export default class GameRepository {
	public create(time: number, guesses: number, number: number, user: User): void {
		const game: Game = new Game
		game.time = time
		game.guesses = guesses
		game.number = number
		game.user = user

		game.save()

		return
	}

	public update(time: number, guesses: number, number: number, user: User): void {
		getConnection()
			.createQueryBuilder()
			.update(Game)
			.set({ time: time, guesses: guesses, number: number })
			.where('userId = :userId', { userId: user.id })
			.execute()

		return
	}

	public selectRank() {
		return getManager()
			.query('SELECT time, guesses, number, name FROM game INNER JOIN user ON userId = user.id ORDER BY time ASC')
	}
}
