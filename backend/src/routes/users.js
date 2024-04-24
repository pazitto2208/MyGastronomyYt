import express from 'express'
import UsersControllers from '../controllers/users.js'

const usersRouter = express.Router()
const usersControllers = new UsersControllers()

usersRouter.get('/', async (req, res) => {
    const { body, success, statusCode } = await usersControllers.getUsers()

    res.status(statusCode).send({ body, success, statusCode })
})

usersRouter.delete('/:id', async (req, res) => {
    const { body, success, statusCode } = await usersControllers.deleteUser(req.params.id)

    res.status(statusCode).send({ body, success, statusCode })
})

usersRouter.put('/:id', async (req, res) => {
    const { body, success, statusCode } = await usersControllers.updateUser(req.params.id, req.body)

    res.status(statusCode).send({ body, success, statusCode })
})

export default usersRouter 