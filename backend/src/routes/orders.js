import express from 'express'
import OrdersControllers from '../controllers/orders.js'

const ordersRouter = express.Router()
const ordersControllers = new OrdersControllers()

ordersRouter.get('/', async (req, res) => {
    const { body, success, statusCode } = await ordersControllers.getOrders()

    res.status(statusCode).send({ body, success, statusCode })
})

ordersRouter.get('/userorders/:id', async (req, res) => {
    const { body, success, statusCode } = await ordersControllers.getOrdersByUserId(req.params.id)

    res.status(statusCode).send({ body, success, statusCode })
})

ordersRouter.post('/', async (req, res) => {
    const { body, success, statusCode } = await ordersControllers.addOrder(req.body)

    res.status(statusCode).send({ body, success, statusCode })
})

ordersRouter.delete('/:id', async (req, res) => {
    const { body, success, statusCode } = await ordersControllers.deleteOrder(req.params.id)

    res.status(statusCode).send({ body, success, statusCode })
})

ordersRouter.put('/:id', async (req, res) => {
    const { body, success, statusCode } = await ordersControllers.updateOrder(req.params.id, req.body)

    res.status(statusCode).send({ body, success, statusCode })
})

export default ordersRouter 