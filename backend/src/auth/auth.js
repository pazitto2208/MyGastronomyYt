import express from "express"
import passport from 'passport'
import LocalStrategy from 'passport-local'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { Mongo } from "../database/mongo.js"
import { ObjectId } from 'mongodb'

const collectionName = 'users'

const authRouter = express.Router()

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, callback) => {
    const user = await Mongo.db
    .collection(collectionName)
    .findOne({ email: email })

    if(!user) {
        return callback(null, false)
    }

    const saltBuffer = user.salt.buffer

    crypto.pbkdf2(password, saltBuffer, 310000, 16, 'sha256', (error, hashedPassword) => {
        if(error) {
            return callback(error)
        }

        const userPassowrdBuffer = Buffer.from(user.password.buffer)

        if(!crypto.timingSafeEqual(userPassowrdBuffer, hashedPassword)) {
            return callback(null, false)
        }

        const { password, salt, ...rest } = user

        return callback(null, rest)
    })
}))

authRouter.post('/signup', async(req, res) => {
    const checkUser = await Mongo.db
    .collection(collectionName)
    .findOne({ email: req.body.email })

    if(checkUser) {
        return res.status(500).send({
            success: false,
            statusCode: 500,
            body: {
                text: 'User already exists'
            }
        })
    }

    const salt = crypto.randomBytes(16)
    
    crypto.pbkdf2(req.body.password, salt, 310000, 16, 'sha256', async (error, hashedPassword) => {
        if(error) {
            res.status(500).send({
                success: false,
                statusCode: 500,
                body: {
                    text: 'User already exists'
                }
            })
        }

        const result = await Mongo.db
        .collection(collectionName)
        .insertOne({
            fullname: req.body.fullname,
            email: req.body.email,
            password: hashedPassword,
            salt,
        })

        if(result.insertedId) {
            const user = await Mongo.db
            .collection(collectionName)
            .findOne({ _id: new ObjectId(result.insertedId) }, { projection: { password: 0, salt: 0 } })

            const token = jwt.sign(user, 'secret')

            return res.send({
                success: true,
                statusCode: 200,
                body: {
                    text: 'User registered',
                    user,
                    token
                }
            })
        }
    })
})

authRouter.post('/login', (req, res) => {
    passport.authenticate('local', (error, user) => {
        if(error) {
            return res.status(500).send({
                success: false,
                statusCode: 500,
                body: {
                    text: 'Error during authentication',
                    error
                }
            })
        }

        if(!user) {
            return res.status(400).send({
                success: false,
                statusCode: 400,
                body: {
                    text: 'Credentials are not correct',
                }
            })  
        }

        const token = jwt.sign(user, 'secret')
        return res.status(200).send({
            success: true,
            statusCode: 200,
            body: {
                text: 'User logged in correctly',
                user,
                token
            }
        })  
    })(req, res)
})

export default authRouter