// import packages
const express = require("express");
const path = require("path");
const fs = require("fs");

// set server port
const PORT = process.env.PORT || 3001;

// initialize the app
const app = express();

// middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("./public"));

// listen PORT
app.listen(PORT, () => {
  console.log(`Server live on port ${PORT}! http://localhost:3001`);
});
