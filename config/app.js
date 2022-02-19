export default {
  name: process.env.APP_NAME,
  env: process.env.APP_ENV || 'local',
  port: process.env.APP_PORT || 3000,
}
