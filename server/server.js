/**
 * @file server.js
 * @description This file sets up the Express server and configures the routes for the application.
 * 
 * @requires express
 * @requires cors
 */


// Importing necessary modules and routes
import express from "express";
import cors from "cors";
import auth from "./routes/auth.js";
import newsData from "./routes/news.js";
import eventsData from "./routes/events.js";
import internshipsData from "./routes/internships.js";
import profile from "./routes/profile.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
// * This identifies an initial path
//app.use("/record", records);

app.use("/auth", auth);

app.use("/", newsData);

app.use("/", eventsData);

app.use("/", internshipsData);

app.use("/", profile);
// Start the Express Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


