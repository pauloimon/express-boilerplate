export default class {
  static handle (request, response) {
    console.log('> You called /api/hello-world route')

    return response.json({ hello: 'World' })
  }
}
