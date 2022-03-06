import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { corsConfig } from '@~/config/cors.js'
import { morganConfig } from '@~/config/morgan.js'
import { routesResolver } from '@~/src/core/routesResolver.js'

function createApp () {
  const router = express.Router()
  routesResolver(router)

  const app = express()
    .use(cors(corsConfig))
    .use(morgan(morganConfig.format))
    .use(express.json())
    .use(router)

  return app
}

export { createApp }
