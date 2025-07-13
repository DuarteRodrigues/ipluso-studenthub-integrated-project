import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import auth from "./routes/auth.js";
import newsData from "./routes/news.js";
import eventsData from "./routes/events.js";
import internshipsData from "./routes/internships.js";
import profile from "./routes/profile.js";

const PORT = process.env.PORT || 5050;
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
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});


