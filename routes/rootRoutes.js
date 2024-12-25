const express = require("express");
const router = express.Router();
const rootController = require("../controllers/rootController");
const { isLoggedIn } = require("../middelware");
const wrappAsync = require('../utils/wrapper');



router.get("/", rootController.root);
router.get("/home", rootController.home);
router.get("/kishaancalc", rootController.kishanCalc);
router.get("/cropsdata",rootController.crop_data);
router.get("/crops-individual", rootController.crop_ind);
router.get("/profile", wrappAsync( rootController.profile ));

module.exports = router;