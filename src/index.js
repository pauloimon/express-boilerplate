import 'dotenv/config'
import { appConfig } from '@~/src/config/app'
import { createApp } from '@~/src/core/createApp'

const { name, port } = appConfig

createApp()
  .listen(port, () => {
    console.log(`> ${name}`)
    console.log(`> App listening on port ${port}`)
  })
