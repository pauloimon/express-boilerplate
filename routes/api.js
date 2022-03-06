import { HelloWorldController } from '@~/src/http/controllers/HelloWorldController.js'
import { myAwesomeMiddleware } from '@~/src/http/middlewares/myAwesomeMiddleware.js'

const apiRoutes = [
  {
    methods: ['GET'],
    path: '/hello-world',
    middlewares: [myAwesomeMiddleware],
    action: HelloWorldController.handle
  }
]

export { apiRoutes }
