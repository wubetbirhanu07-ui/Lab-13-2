import express from "express";
import "dotenv/config";

import connectDB from "./db/connection.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();


// Middleware
app.use(express.json());


// Database Connection
connectDB();


// Routes
app.use("/api/books", bookRoutes);


// Server Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});