const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const user = require("./router/user")
const env = require('dotenv').config()

const app = express()

const PORT = env.parsed.PORT


console.log(env.parsed);

mongoose.connect(env.parsed.CONNECT_URL).then(console.log("connected to mongo"))
 

app.use(cors())
app.use(bodyparser.json())

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/about", (req, res) => {
    res.send("about")
})

app.use("/user", user)


app.listen(PORT, (req, res) => {
    console.log("server is running");
})