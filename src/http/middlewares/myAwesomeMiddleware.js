function myAwesomeMiddleware (request, response, next) {
  console.log('I\'m an awesome middleware :)')

  next()
}

export { myAwesomeMiddleware }
