import express from "express";

// * This will help us to connect to the database
import db from "../database/connection.js";

/**
 * * router is a built-in middleware function in Express. It is used to create a new router object
 * * it is used to define routing
 * * the router will be added as a middleware, so it will be used to handle requests starting with path /record.
 */
const router = express.Router();

// * This will handle user registration
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    console.log("[Auth] Received login request:", username);
    try {
        const collection = await db.collection("users");
        const user = await collection.findOne({ username, password });
        if (!user) {
            console.log("[Auth] Invalid credentials for user:", username);
            return res.status(401).json({ message: "Credenciais inválidas." });
        }
        console.log("[Auth] Login successful for:", username);
        res.json({ message: "Login bem-sucedido", userId: user._id.toString(), username: user.username }); // Return the ObjectId as a string
    } catch (error) {
        console.error("[Auth] Server error:", err);
        res.status(500).json({ message: "Erro do servidor."});
    }
});

export default router;