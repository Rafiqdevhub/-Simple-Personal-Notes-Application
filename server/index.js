const express = require("express");
const connectDb = require("./config/dbConnection");
const noteRoute = require("./routes/NoteRoute");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

connectDb();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(express.json());

app.use("/api", noteRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
