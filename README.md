# express-boilerplate

An Express MVC boilerplate for Node.js applications.

## Features
- MVC architecture
- ECMAScript Modules enabled
- dotenv to load environment variables from `.env` file
- nodemon to autorestart the local server
- ESLint with JavaScript Standard Style
- TypeScript (soon)

## How to use

1. Click [here](https://github.com/pauloimon/express-boilerplate/generate) to generate a new project
2. Create your `.env` file
3. Install the dependencies: `npm install`
4. Start the local server: `npm run dev`

## Registering a new route

There are two route files present on `./src/routes` directory.
The `web.js` file must be used to register Web routes which returns HTML.
The `api.js` file must be used to register API routes which returns JSON or any other data transfer format.
All routes registered on `./src/routes/api.js` will be automatically preppended with `/api`.

So, to register a new route you need to edit a route file inside the `./src/routes` directory and append an object with the following properties:

| Property      | Type              | Required | Examples                                     |
|:-------------:|:-----------------:|:--------:|----------------------------------------------|
| `methods`     | `Array \| String` | Yes      | `['OPTIONS']`, `['GET', 'POST']`, `'*'`      |
| `path`        | `String`          | Yes      | `'/my/awesome/route'`                        |
| `middlewares` | `Array`           | No       | `[(request, response, next) => next()]`      |
| `action`      | `Function`        | Yes      | `(request, response) => response.send('OK')` |

e.g.

```js
// File: ./src/routes/api.js
import { MyAwesomeController } from '@~/src/http/controllers/MyAwesomeController'

const apiRoutes = [
  {
    methods: ['GET'],
    path: '/my/awesome/route',
    action: MyAwesomeController.handle
  }
]

export { apiRoutes }
```

```js
// File: ./src/http/controllers/MyAwesomeController.js
class MyAwesomeController {
  static handle (request, response) {
    response.json({ success: true })
  }
}

export { MyAwesomeController }
```
