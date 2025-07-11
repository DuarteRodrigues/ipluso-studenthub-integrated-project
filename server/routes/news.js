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

router.get("/news", async (req, res) => {
    console.log("[News] Received request for news data");
    try {
        const collection = db.collection("news");
        const newsData = await collection.find({}).toArray();
        console.log("[News] Fetched news data:", newsData);
        res.status(200).json(newsData);
    } catch (error) {
        console.error("[News] Error fetching news:", error);
        res.status(500).json({ message: "Erro ao buscar notícias." });
    }
});

router.get("/news/article/:id", async (req, res) => {
    console.log(`[News] Received request for article with ID: ${req.params.id}`);
    try {
        const collection = db.collection("news");
        const article = await collection.findOne({ _id: new ObjectId(req.params.id) });
        if (!article) return res.status(404).json({ message: "Notícia não encontrada." });
            res.json(article);
    } catch (error) {
        console.error(`[News] Error fetching article with ID ${req.params.id}:`, error);
        res.status(500).json({ message: "Erro ao buscar artigo." });
    }
});


export default router;