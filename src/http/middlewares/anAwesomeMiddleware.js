function anAwesomeMiddleware (request, response, next) {
  console.log('> I\'m an awesome middleware :)')

  next()
}

export { anAwesomeMiddleware }
