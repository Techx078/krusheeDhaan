const express = require("express");
// const crop= require("./Cropes.js");
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const farmerSchema = new mongoose.Schema({
   
    FullName: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    MobileNumber: {
        type: Number,
    },
    
    State: { type: String, toUppercase: true },
    District: { type: String, toUppercase: true },
    Taluka: { type: String, toUppercase: true },
   
    ProfileImage: {
        path: String,
        filename: String,

    },
    Crope: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "crop",
        }
    ],


    Reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "review",
        }
    ],



});

farmerSchema.plugin(passportLocalMongoose);


let farmer = mongoose.model("farmer", farmerSchema);
module.exports = farmer;