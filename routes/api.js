import { HelloWorldController } from '@~/src/http/controllers/HelloWorldController.js'
import { anAwesomeMiddleware } from '@~/src/http/middlewares/anAwesomeMiddleware.js'

const apiRoutes = [
  {
    methods: ['GET'],
    path: '/hello-world',
    middlewares: [anAwesomeMiddleware],
    action: HelloWorldController.handle
  }
]

export { apiRoutes }
