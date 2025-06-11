const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const noteRoutes = require("./routes/noteRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome To the Notes App Server</h1>");
});

app.listen(PORT, () => {
    console.log(`Server running on port \x1b[4mhttp://localhost:${PORT}\x1b[0m`);
})

