import { MongoClient } from 'mongodb'

export const Mongo = {
    async connect({ mongoConnectionString, mongoDbName }) {
        try {
            const client = new MongoClient(mongoConnectionString)
    
            await client.connect()
            const db = client.db(mongoDbName)

            this.client = client
            this.db = db

            return 'Connected to mongo!'
            
        } catch (error) {
            return { text: 'Error during mongo connection', error }
        }
    }
}