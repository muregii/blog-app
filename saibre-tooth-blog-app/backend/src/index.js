const express = require("express");
const cors = require("cors");
require("dotenv").config();


const authRoutes = require("./routes/auth");
const path = require("path");
const connectDB = require("./database/db");

connectDB();

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
