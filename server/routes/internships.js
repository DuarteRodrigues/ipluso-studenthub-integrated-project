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

router.get("/internships", async (req, res) => {
    console.log("[Internships] Received request for internships data");
    try {
        const collection = db.collection("internships");
        const internshipsData = await collection.find({}).toArray();
        console.log("[Internships] Fetched internships data:", internshipsData);
        res.status(200).json(internshipsData);
    } catch (error) {
        console.error("[Internships] Error fetching internships:", error);
        res.status(500).json({ message: "Erro ao buscar estágios." });
    }
});

router.get("/internships/article/:id", async (req, res) => {
    console.log(`[Internships] Received request for article with ID: ${req.params.id}`);
    try {
        const collection = db.collection("internships");
        const article = await collection.findOne({ _id: new ObjectId(req.params.id) });
        if (!article) return res.status(404).json({ message: "Estágio não encontrado." });
        res.json(article);
    } catch (error) {
        console.error(`[Internships] Error fetching article with ID ${req.params.id}:`, error);
        res.status(500).json({ message: "Erro ao buscar artigo." });
    }
});

router.post("/internships/article/:id/feedback", async (req, res) => {
    const { userId, type } = req.body;
    const articleId = req.params.id;
    if (!userId) return res.status(400).json({ message: "[Internships] Missing userId." });

    try {
        const collection = db.collection("internships");

        if (!type) {
            // Remove feedback if type is null or undefined
            console.log(`[Internships] Removing feedback for article ID: ${articleId} from user ID: ${userId}`);
            await collection.updateOne(
                { _id: new ObjectId(articleId) },
                { $pull: { feedback: { userId: new ObjectId(userId) } } }
            );
        } else {
            console.log(`[Internships] Received feedback for article ID: ${articleId} from user ID: ${userId}`);
            const article = await collection.findOne({ _id: new ObjectId(articleId) });
            if (!article) return res.status(404).json({ message: "Estágio não encontrado." });

            // Check if feedback already exists (regardless of type)
            const existingFeedback = (article.feedback || []).find(
                fb => fb.userId.toString() === userId
            );

            if (existingFeedback) {
                if (existingFeedback.type === type) {
                    // Toggle off: remove feedback
                    await collection.updateOne(
                        { _id: new ObjectId(articleId) },
                        { $pull: { feedback: { userId: new ObjectId(userId) } } }
                    );
                } else {
                    // Update existing feedback
                    await collection.updateOne(
                        { _id: new ObjectId(articleId), "feedback.userId": new ObjectId(userId) },
                        { $set: { "feedback.$.type": type, "feedback.$.date": new Date() } }
                    );
                }
            } else {
                // Add new feedback
                await collection.updateOne(
                    { _id: new ObjectId(articleId) },
                    { $push: { feedback: { userId: new ObjectId(userId), type, date: new Date() } } }
                );
            }
        }
        // Get updated article 
        const updated = await db.collection("news").findOne({ _id: new ObjectId(articleId) });

        // Count feedback
        const feedbackCount = { like: 0, wow: 0, congrats: 0 };
        let userCurrentFeedback = null;
        (updated.feedback || []).forEach(f => {
            if (feedbackCount[f.type] !== undefined) feedbackCount[f.type]++;
            if (f.userId.toString() === userId) userCurrentFeedback = f.type;
        });

        res.json({ feedbackCount, userFeedback: userCurrentFeedback });
    } catch (error) {
        console.error(`[News] Error handling feedback for article ID ${articleId}:`, error);
        res.status(500).json({ message: "Erro ao processar feedback." });
    }
});

router.get("/internships/article/:id/feedback", async (req, res) => {
    const articleId = req.params.id;
    const userId = req.query.userId; 
    try {
        const collection = db.collection("internships");
        const article = await collection.findOne({ _id: new ObjectId(articleId) });
        if (!article) return res.status(404).json({ message: "Estágio não encontrado." });

        // Count feedback
        const feedbackCount = { like: 0, wow: 0, congrats: 0 };
        let userFeedback = null;
        (article.feedback || []).forEach(f => {
            if (feedbackCount[f.type] !== undefined) feedbackCount[f.type]++;
            if (f.userId.toString() === userId) userFeedback = f.type;
        });

        res.json({feedbackCount, userFeedback});
    } catch (error) {
        console.error(`[Internships] Error fetching feedback for article ID ${articleId}:`, error);
        res.status(500).json({ message: "Erro ao buscar feedback." });
    }
});

export default router;
