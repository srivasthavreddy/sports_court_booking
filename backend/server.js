console.log("Starting server...");

let connectDB;
let slotRoutes;
let authRoutes;
try {
  connectDB = require("./config/db");
  slotRoutes = require("./routes/slotRoutes");
  authRoutes = require("./routes/authRoutes");
} catch (err) {
  console.error("Error requiring modules:", err);
  process.exit(1);
}

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/slots", slotRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));