import { Router } from 'express'

import GameController from './Controllers/game.controller'
import PrimeController from './Controllers/prime.controller'

const router: Router = Router()

const gameController: GameController = new GameController()
const primeController: PrimeController = new PrimeController()

router.get('/rank', gameController.index)
router.post('/game', gameController.createOrUpdate)
router.get('/prime', primeController.index)

export default router
