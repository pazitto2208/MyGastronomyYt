import OrdersDataAccess from "../dataAccess/orders.js"
import { ok, serverError } from "../helpers/httpResponses.js"

export default class OrdersControllers {
    constructor() {
        this.dataAccess = new OrdersDataAccess()
    }

    async getOrders() {
        try {
            const orders = await this.dataAccess.getOrders()

            return ok(orders)
        } catch (error) {
            return serverError(error)
        }
    }

    async getOrdersByUserId(userId) {
        try {
            const orders = await this.dataAccess.getOrdersByUserId(userId)

            return ok(orders)
        } catch (error) {
            return serverError(error)
        }
    }

    async addOrder(orderData) {
        try {
            const result = await this.dataAccess.addOrder(orderData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async deleteOrder(orderId) {
        try {
            const result = await this.dataAccess.deleteOrder(orderId)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async updateOrder(orderId, orderData) {
        try {
            const result = await this.dataAccess.updateOrder(orderId, orderData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}