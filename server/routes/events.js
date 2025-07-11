// * Import necessary modules
import express from "express";
import { ObjectId } from "mongodb"; // Import ObjectId for MongoDB document ID handling

// * This will help us to connect to the database
import db from "../database/connection.js";

/**
 * * router is a built-in middleware function in Express. It is used to create a new router object
 * * it is used to define routing
 * * the router will be added as a middleware, so it will be used to handle requests starting with path /record.
 */
const router = express.Router();

router.get("/events", async (req, res) => {
    console.log("[Events] Received request for events data");
    try {
        const collection = db.collection("events");
        const eventsData = await collection.find({}).toArray();
        console.log("[Events] Fetched events data:", eventsData);
        res.status(200).json(eventsData);
    } catch (error) {
        console.error("[Events] Error fetching events:", error);
        res.status(500).json({ message: "Erro ao buscar eventos." });
    }
});

router.get("/events/article/:id", async (req, res) => {
    console.log(`[Events] Received request for article with ID: ${req.params.id}`);
    try {
        const collection = db.collection("events");
        const article = await collection.findOne({ _id: new ObjectId(req.params.id) });
        if (!article) return res.status(404).json({ message: "Evento não encontrado." });
        res.json(article);
    } catch (error) {
        console.error(`[Events] Error fetching article with ID ${req.params.id}:`, error);
        res.status(500).json({ message: "Erro ao buscar artigo." });
    }
});

export default router;