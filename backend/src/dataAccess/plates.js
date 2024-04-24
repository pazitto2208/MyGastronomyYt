import { Mongo } from "../database/mongo.js"
import { ObjectId } from 'mongodb'

const collectionName = 'plates'

export default class PlatesDataAccess {
    async getPlates() {
        const result = await Mongo.db
        .collection(collectionName)
        .find({ })
        .toArray()

        return result
    }

    async getAvailablePlates() {
        const result = await Mongo.db
        .collection(collectionName)
        .find({ available: true })
        .toArray()

        return result
    }

    async addPlate(plateData) {
        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(plateData)

        return result
    }

    async deletePlate (plateId) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({ _id: new ObjectId(plateId) })

        return result
    }

    async updatePlate(plateId, plateData) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndUpdate(
            { _id: new ObjectId(plateId) },
            { $set: plateData }
        )

        return result
    }
    
}