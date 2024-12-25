const express = require("express");
const { types, string } = require("joi");
const mongoose = require("mongoose");

const cropsSchema = new mongoose.Schema({
  commodityName:{ type:String,toUppercase:true},
  CropsName: { type: String, toUppercase: true },
  price: { type: Number, toUppercase: true },
  CropeDesc: {
    type: String,
  },
  CropeImage: {
    url: String,
    filename: String,
  },

  Farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "farmer",
  },
});

module.exports = mongoose.model("Crop", cropsSchema);
