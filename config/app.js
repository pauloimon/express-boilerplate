const appConfig = {
  name: process.env.APP_NAME,
  port: parseInt(process.env.APP_PORT) || 3000
}

export { appConfig }
