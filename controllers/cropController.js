const Crop = require('../models/Crops');

module.exports.cropsdata = (req, res) =>{
  res.render("cropsdata.ejs");
} 
module.exports.cropsedit = async (req, res) => {
  const { id } = req.params;
  const newCrops = await Crop.findById(id);
  if (!newCrops) {
    req.flash("error", "requested Crop is not available.");
    return res.redirect("/profile");
  }
  res.render("crops-edit", { newCrops });
};
module.exports.cropsadd = async (req, res) => {
  console.log( req.file);
  console.log( req.body);
  // const { filename, path: url } = req.file;
  // const newCrops = new Crop();
  // const data = req.body.Crope;
  // newCrops.commodityName=data.commodityName,
  // newCrops.CropsName = data.CropsName,
  //   newCrops.price = data.price,
  //   newCrops.CropeDesc = data.CropeDesc,
  //   newCrops.CropeImage = { url, filename },
  //   newCrops.Farmer = req.session.user,
  //   await newCrops.save();
  // let newCropsList = await Crop.find();
  // res.render("profile", { newCropsList });
};
module.exports.cropsput = async (req, res) => {
  const { filename, path: url } = req.file;
  const newCrops = new Crop();
  const data = req.body.Crope;
  (newCrops.CropsName = data.CropsName),
    (newCrops.price = data.price),
    (newCrops.CropeDesc = data.CropeDesc),
    (newCrops.CropeImage = { url, filename }),
    await newCrops.save();
  res.render("profile", { newCrops });
};

