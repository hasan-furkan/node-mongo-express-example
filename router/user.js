const express = require("express")
const mongoose = require('mongoose');
const User = require("../schema/User")

const router = express.Router()

router.get("/callUser", (req, res) => {
    User.find().lean().then(user => {
        console.log(user);
    })
})

router.post("/addUser", (req,res) => {
    User.create(req.body, (err, user)=> {
        req.body
    })
})

router.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id
        User.findOneAndDelete(id)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => console.log(err))
    
    
   
})

module.exports = router