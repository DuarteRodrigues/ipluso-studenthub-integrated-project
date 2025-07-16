/**
 * @file connection.js
 * @description This file establishes a connection to the MongoDB database using the MongoDB Node.js
 * 
 * @returns {Promise<MongoClient>} A promise that resolves to the MongoDB client instance.
 * @see https://mongodb.github.io/node-mongodb-native/4.9/classes/MongoClient.html
 */

import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // * Connect the client to the server
  await client.connect();

  // * Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

// * This will connect to the database and create it if it doesn't exist
// * The database name is "StudentHub"
let db = client.db("student_hub");

export default db;
