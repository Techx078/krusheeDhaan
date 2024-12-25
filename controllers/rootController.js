const Crop = require("../models/Crops");

module.exports.root=(req, res) => res.render("roote");
module.exports.home=(req, res) => res.render("home.ejs");
module.exports.kishanCalc=(req, res) => res.render("kishaancalc");
module.exports.crop_data= (req, res) => res.render("cropsdata");
module.exports.crop_ind=(req, res) => res.render("crops-individual");
module.exports.profile=async (req, res) => {
    let newCropsList = await Crop.find();
    res.render("profile", { newCropsList });
  }