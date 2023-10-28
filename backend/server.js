const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config()
const port = 5000

connectDB();

const app = express();

// app.get("/post", (req, res) => {
//     res.json({ message: "Voici les données" });
// });

//Middleware qui permet de traiter les données de la request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use("/post", require("./routes/post.routes"))

app.use("/user", require("./routes/user.routes"))


//Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port  " + port))