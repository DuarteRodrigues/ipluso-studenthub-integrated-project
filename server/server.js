import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
// * This identifies an initial path
app.use("/record", records);

// Start the Express Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


