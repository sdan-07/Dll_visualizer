import 'dotenv/config'
import app from './src/app.js'
import { connect_db } from './src/config/db.js'

const port = process.env.PORT || 3000

const start = async () => {
  await connect_db()
  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  })
}

start()