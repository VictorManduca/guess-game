import { Router } from 'express'

import GameController from './Controllers/game.controller'

const router: Router = Router()

const gameController: GameController = new GameController()

router.get('/rank', gameController.index)

export default router
