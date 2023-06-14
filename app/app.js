require('dotenv').config()

require('express-async-errors')

const express = require('express')
const app = express()

//connect Database
const connectDb = require('./db/connectDb')

app.use(express.json())

//routers
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', userRoutes)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    const db = await connectDb(process.env.MONGO_URI)
    console.log('connection successful')
  } catch (err) {
    console.log('can not connect to DB !!', err)
  }

  try {
    app.listen(port, console.log('Server is  listening', `${port}`))
  } catch (err) {
    console.log('could  not connetc err', err)
  }
}

start()
