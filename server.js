const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;


app.get("/prices", (req, res) => {
    let prices = [
    '$2',
    '$3',
    '$4'
    ]
    res.json(prices);
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});