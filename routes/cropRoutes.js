const express = require("express");
const router = express.Router();
const cropController = require("../controllers/cropController");
const { isLoggedIn } = require("../middelware");
const { isOwner } = require("../middelware");
const { Cropsmiddelware } = require("../middelware");
const wrappAsync= require('../utils/wrapper');
const multer = require("multer");
const { storage } = require("../cloudConfig");
const Uploads = multer({ storage });

router.get("/cropsdata",  cropController.cropsdata );
router.get( "/:id/crops-edit",wrappAsync( cropController.cropsedit ));
router.get("/crops-add",  (req,res)=>{
  res.render( " crops.ejs " );
} );
router.post(
  "/crope-add",
 
  Uploads.single("Crope[CropeImage]"),
  wrappAsync( cropController.cropsadd )
);
router.put(
  "crope-add/:id",
  Cropsmiddelware,
  Uploads.single("Crope[CropeImage]"),
  wrappAsync( cropController.cropsput )
);

module.exports = router;