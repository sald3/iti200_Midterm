const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const Pool = require('pg').Pool

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

const pool = new Pool({
    host: 'database-1.cl2iw6zrlxyf.us-east-1.rds.amazonaws.com',
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
    port: 5432,
})


app.post("/api/users/create", (req, res) => {

    console.log(req.body);

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const fruit = req.body.fruit;
    const quantity = req.body.quantity;

    const sql = "INSERT INTO orderinfo (firstName, lastName, adress, fruit, quantity) VALUES ('"+ firstName + "', '" + lastName + "', '" + address + "', '" + fruit + "', " + quantity + ")";

    pool.query(sql, (error, results) => {

        if (error) throw error

        res.status(200).json(results.rows)
    });

    app.get("/api/users", (req, res)=>{
        pool.query('SELECT * FROM orderinfo ORDER BY orderid DESC LIMIT 1', (error, results) => {

            if (error) throw error

            res.status(200).json(results.rows)
        })

    });

})

app.listen(3000, function (){
    console.log("Listening on port 3000");
});