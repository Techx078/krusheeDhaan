const express=require("express");
const { profile } = require("./rootController");
const Farmer = require( "../models/Farmer" );
const passport = require("passport");
const farmer = require("../models/Farmer");

module.exports.getform=(req, res) => res.render("form");
module.exports.formdata= async (req, res) => {
  const {

    FullName,
    Email,
    MobileNumber,
    State,
    District,
    Taluka,    
} = req.body.farmer;
const{username,password}= req.body;
  const{
    path,
    filename
  }=req.file;
  const ProfileImage={
    path,filename
  }
  const newFarmer = new Farmer({
    username,
    FullName,
    Email,
    MobileNumber,
    State,
    District,
    Taluka,
    ProfileImage
});

let result = await Farmer.register(newFarmer,password);

res.redirect();

  };
