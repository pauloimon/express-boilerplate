export default {
  origin: process.env.CORS_ORIGIN,
  methods: process.env.CORS_METHODS,
  preflightContinue: process.env.CORS_PREFLIGHT_CONTINUE === 'true',
  optionsSuccessStatus: parseInt(process.env.CORS_OPTIONS_SUCCESS_STATUS) || 204
}
