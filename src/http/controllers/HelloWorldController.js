export default class {
  static handle (request, response) {
    console.log('> You called /api/hello-world route')

    response.json({ hello: 'World' })
  }
}
