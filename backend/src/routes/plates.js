import express from 'express'
import PlatesControllers from '../controllers/plates.js'

const platesRouter = express.Router()
const platesControllers = new PlatesControllers()

platesRouter.get('/', async (req, res) => {
    const { body, success, statusCode } = await platesControllers.getPlates()

    res.status(statusCode).send({ body, success, statusCode })
})

platesRouter.post('/', async (req, res) => {
    const { body, success, statusCode } = await platesControllers.addPlate(req.body)

    res.status(statusCode).send({ body, success, statusCode })
})

platesRouter.delete('/:id', async (req, res) => {
    const { body, success, statusCode } = await platesControllers.deletePlate(req.params.id)

    res.status(statusCode).send({ body, success, statusCode })
})

platesRouter.put('/:id', async (req, res) => {
    const { body, success, statusCode } = await platesControllers.updatePlate(req.params.id, req.body)

    res.status(statusCode).send({ body, success, statusCode })
})

platesRouter.get('/availables', async (req, res) => {
    const { body, success, statusCode } = await platesControllers.getAvailablePlates()

    res.status(statusCode).send({ body, success, statusCode })
})

export default platesRouter 