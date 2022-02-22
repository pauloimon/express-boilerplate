import cors from 'cors'
import express from 'express'
import corsConfig from '../../config/cors.js'
import routesResolver from './routesResolver.js'

const router = express.Router()
routesResolver(router)

const app = express()
  .use(cors(corsConfig))
  .use(router)

export default app
