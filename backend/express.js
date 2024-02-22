const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "RecipeWebdb"
});
app.post("/login", (req, res) => {
    if (req.body.action === "Sign Up") {
        const sql = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
db.query(sql, [req.body.UserName, req.body.email, req.body.password], (err, results) => {
    if (err) {
        console.error(err);
        return res.json("Internal Server Error: " + err.message);
    }

    if (results.affectedRows > 0) {
        return res.json("Registration successful");
    } else {
        return res.json("User registration failed");
    }
});

    }else {
        
        const sql = "SELECT * FROM user WHERE username = ? AND password = ?";
        db.query(sql, [req.body.UserName, req.body.password], (err, results) => {
            console.log(results)
            console.log("login")
            if (err) {
                return res.json("Internal Server Error");
            }
            if (results.length > 0) {
                return res.json("Login successful");
            } else {
                return res.json("User Not Found");
            }
        });
    }

});



app.listen(8081, () => {
    console.log("listening");
})