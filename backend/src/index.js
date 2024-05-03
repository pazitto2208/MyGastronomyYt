import express from 'express'
import cors from 'cors'
import { Mongo } from './database/mongo.js'
import { config } from 'dotenv' 
import authRouter from './auth/auth.js'
import usersRouter from './routes/users.js'
import platesRouter from './routes/plates.js'
import ordersRouter from './routes/orders.js'

config()

async function main () {
    const hostname = 'localhost'
    const port = 3000

    const app = express()

    const mongoConnection = await Mongo.connect({ mongoConnectionString: process.env.MONGO_CS, mongoDbName: process.env.MONGO_DB_NAME })
    console.log(mongoConnection)
    
    app.use(express.json())
    app.use(cors())

    app.get('/', (req, res) => {
        res.send({
            success: true, 
            statusCode: 200,
            body: 'Welcome to MyGastronomy!'
        })
    })

    // routes
    app.use('/auth', authRouter)
    app.use('/users', usersRouter)
    app.use('/plates', platesRouter)
    app.use('/orders', ordersRouter)
    
    app.listen(port, () => {
        console.log(`Server running on: http://${hostname}:${port}`)
    })
}

main()