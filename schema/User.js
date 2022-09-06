const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    },
    address : {
        type : String, 
        required : true
    },
    phone : {
        type : Number, 
        required : true
    },
    email : {
        type : String, 
        required : true,
        unique : true
    },

})

module.exports = mongoose.model("User", UserSchema) 