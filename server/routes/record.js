import express from "express";

// * This will help us to connect to the database
import db from "../database/connection.js";

// * This will convert the id from a string into an Object for the _id field
import { ObjectId } from "mongodb";

/**
 * * router is a built-in middleware function in Express. It is used to create a new router object
 * * it is used to define routing
 * * the router will be added as a middleware, so it will be used to handle requests starting with path /record.
 */
const router = express.Router();

// * This will get a list of ALL the records in the database
// TODO - Wrap this code section in a try-catch block to handle errors
router.get("/", async (req, res) => {
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// * This will get a single record by id
// TODO - Wrap this code section in a try-catch block to handle errors
router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not Found").status(404);
  else res.send(result).status(200);
});

// * This will create a new record
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    // * The resulting code message 204 means that the request was successful and the server has fulfilled the request with no content to send back
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

// * This will update a record by id
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const update = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, update);
    // * The resulting code message 204 means that the request was successful and the server has fulfilled the request with no content to send back
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

// * This will delete a record by id
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("records");
    let result = await collection.deleteOne(query);
    // * The resulting code message 200 means that the request has been successfully processed
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;
