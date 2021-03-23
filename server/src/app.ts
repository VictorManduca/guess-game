import express from 'express'

import './Configs/database.config'
import router from './routes'

const app: express.Application = express()

app.use(express.json())
app.use(router)

export default app
