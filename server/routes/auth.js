import express from "express";
import db from "../database/connection.js";

const router = express.Router();

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
        res.json({ message: "Login bem-sucedido", username: user.username });
    } catch (error) {
        console.error("[Auth] Server error:", err);
        res.status(500).json({ message: "Erro do servidor."});
    }
});

export default router;