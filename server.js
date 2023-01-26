// Import packages
const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require("./db/db.json");

// Routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const { Console } = require("console");

// Set server port
const PORT = process.env.PORT || 3001;
// Initialize the app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Listen for connections
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
