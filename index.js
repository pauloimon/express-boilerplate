import 'dotenv/config'
import appConfig from '@~/config/app.js'
import app from '@~/src/core/app.js'

const { name, port } = appConfig

app.listen(port, () => {
  console.log(`> ${name}`)
  console.log(`> App listening on port ${port}`)
})
