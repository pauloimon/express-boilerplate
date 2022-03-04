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

1. Clone this repository: `git clone git@github.com:pauloimon/express-boilerplate.git && cd ./express-boilerplate`
2. Transform it into a new repository: `rm -rf ./.git && git init`
3. Create your environment file: `cp .env.example .env`
4. Install dependencies: `npm install`
5. Start the local server: `npm run dev`

## Registering a new route

There are two route files present on `./routes` directory.
The `web.js` file must be used to register Web routes which returns HTML.
The `api.js` file must be used to register API routes which returns JSON or any other data transfer format.
All routes registered on `./routes/api.js` will be automatically preppended with `/api`.

So, to register a new route you need to edit a route file inside the `./routes` directory and append an object with the following properties:

| Property      | Type           | Required | Examples                                     |
|:-------------:|:--------------:|:--------:|----------------------------------------------|
| `methods`     | `Array/String` | Yes      | `[OPTIONS]`, `['GET', 'POST']`, `'*'`        |
| `path`        | `String`       | Yes      | `/my/awesome/route`                          |
| `middlewares` | `Array`        | No       | `[(request, response, next) => next()]`      |
| `action`      | `Function`     | Yes      | `(request, response) => response.send('OK')` |

e.g.
```js
// ./routes/api.js
import MyAwesomeController from '../src/http/controllers/MyAwesomeController.js'

export default [
  {
    methods: ['GET'],
    path: '/my/awesome/route',
    action: MyAwesomeController.handle
  }
]
```

```js
// ./src/http/controllers/MyAwesomeController.js
export default class {
  static handle (request, response) {
    return response.json({ success: true })
  }
}
```
