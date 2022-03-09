import { HelloWorldController } from '@~/src/http/controllers/HelloWorldController'
import { myAwesomeMiddleware } from '@~/src/http/middlewares/myAwesomeMiddleware'

const apiRoutes = [
  {
    methods: ['GET'],
    path: '/hello-world',
    middlewares: [myAwesomeMiddleware],
    action: HelloWorldController.handle
  }
]

export { apiRoutes }
