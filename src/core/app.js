import express from 'express'
import routesResolver from './routesResolver.js'

const router = express.Router()
routesResolver(router)

const app = express()
  .use(router)

export default app
