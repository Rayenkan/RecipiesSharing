const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ['POST', 'GET', 'PUT'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000,
      secure: false,
      httpOnly: true,
      sameSite: 'strict',
    },
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "RecipeWebdb",
});

app.put('/api/addRecipe' , (req,res)=>{
  const sql ="UPDATE user SET likedRecipies = ? WHERE username =? ";
  db.query(sql,[req.body.likeRecipie , req.body.name] , (error)=>{
    if (error) {
      console.error("Error updating password:", error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      console.log("Recipe added successfully");
      res.status(200).json({ message: "Recipe added successfully" });
    }
  })
})
app.put('/api/changePassword', (req, res) => {
  const sql = "UPDATE user SET password = ? WHERE username = ?";
  db.query(sql, [req.body.newPassword, req.body.name], (error) => {
    if (error) {
      console.error("Error updating password:", error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      console.log("Password updated successfully");
      res.status(200).json({ message: "Password updated successfully" });
    }
  });
});
app.get("/userDetails", (req, res) => {
  const username = req.query.name;
  const sql = "SELECT * FROM user WHERE username = ?";
  db.query(sql, [username], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (result.length > 0) {
      return res.json({ valid: true, userData: result[0] });
    } else {
      return res.json({ valid: false, message: "User not found" });
    }
  });
});

app.get("/", (req, res) => {
  if (req.session.UserName) {
    return res.json({ valid: true, username: req.session.UserName })
  } else {
    return res.json({ valid: false })
  }
})


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
  } else {
    const sql = "SELECT * FROM user WHERE username = ? AND password = ?";
    console.log(req.body.UserName)
    console.log(req.body.password)
    db.query(sql, [req.body.UserName, req.body.password], (err, results) => {
      console.log(err)
      if (err) {
        return res.json("Internal Server Error");
      }
      if (results.length > 0) {
        req.session.UserName = results[0].username;

        return res.json({ login: true, username: req.session.UserName });
      } else {
        return res.json({ login: false });
      }
    });
  }
});

app.listen(8081, () => {
  console.log("listening");
});
