const express = require("express");
const connectDB = require('./db.js');
const itemModel = require('./models/item.js');
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

connectDB();


app.get("/api", (req, res) => {
    res.json({"fruits": ["apple", "orange", "banana"] });
});

app.listen(8080, () => {
    console.log("server start on port 8080!");
});