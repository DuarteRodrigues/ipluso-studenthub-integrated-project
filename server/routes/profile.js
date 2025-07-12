// * Import necessary modules
import express from "express";
import { ObjectId } from "mongodb";

// * This will help us to connect to the database
import db from "../database/connection.js";

/**
 * * router is a built-in middleware function in Express. It is used to create a new router object
 * * it is used to define routing  
 * * the router will be added as a middleware, so it will be used to handle requests starting with path /profile.
 */

const router = express.Router();

router.get("/profile/:id", async (req, res) => {
    console.log(`[Profile] Received request for profile with ID: ${req.params.id}`);
    try {
        const collection = db.collection("users");
        const userProfile = await collection.findOne({ _id: new ObjectId(req.params.id) });
        if (!userProfile) return res.status(404).json({ message: "Perfil não encontrado." });
        res.json(userProfile);
    } catch (error) {
        console.error(`[Profile] Error fetching profile with ID ${req.params.id}:`, error);
        res.status(500).json({ message: "Erro ao buscar perfil." });
    }
});

// * Export the router so it can be used in other files
export default router;