import 'dotenv/config'
import { appConfig } from '@~/config/app.js'
import { createApp } from '@~/src/core/createApp.js'

const { name, port } = appConfig

createApp()
  .listen(port, () => {
    console.log(`> ${name}`)
    console.log(`> App listening on port ${port}`)
  })
