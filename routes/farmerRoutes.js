const express = require("express");
const router = express.Router();
const farmerController = require("../controllers/farmerController");
const { isLoggedIn } = require("../middelware");
const { Farmermiddelware } = require("../middelware");
const wrappAsync= require('../utils/wrapper');
const multer = require("multer");
const { storage } = require("../cloudConfig");
const Uploads = multer({ storage });

router.get("/form", farmerController.getform);
router.post(
  "/addFarmerData",
  
  Uploads.single("farmer[ProfileImage]"),
 
   farmerController.formdata 
);

module.exports = router;