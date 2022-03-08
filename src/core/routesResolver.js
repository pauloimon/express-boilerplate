import { apiRoutes } from '@~/routes/api'
import { webRoutes } from '@~/routes/web'

function routesResolver (router) {
  const routes = [
    ...apiRoutes.map(route => {
      route.path = '/api' + route.path

      return route
    }),
    ...webRoutes
  ]

  routes.forEach(({ methods, path, middlewares = [], action }) => {
    if (methods === '*') {
      router.all(path, ...middlewares, action)

      return
    }

    methods.map(method => method.toLowerCase())
      .forEach(method => {
        router[method](path, ...middlewares, action)
      })
  })
}

export { routesResolver }
