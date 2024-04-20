const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    userType:{
        type: Number,
        required : true
    }
}, { timestamps: true });

const user = mongoose.models.User || mongoose.model('User', Schema);

module.exports = user
