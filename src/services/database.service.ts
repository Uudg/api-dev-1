// External dependencies

import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';

// Global variables

export const collections: {restaurants?: mongoDB.Collection, orders?: mongoDB.Collection} = {}


// Initialize connection

export async function connectToDatabase () {
    dotenv.config();
    
    // const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    const client: mongoDB.MongoClient = new mongoDB.MongoClient('mongodb+srv://2find:2find_collab@2find.ekk83.mongodb.net/?retryWrites=true&w=majority');
    
    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const restaurantsCollection: mongoDB.Collection = db.collection('restaurants');

    collections.restaurants = restaurantsCollection;
    //  Some info

    console.log(`Succesfult connected to database: ${db.databaseName} and collection: ${restaurantsCollection.collectionName}`);
}