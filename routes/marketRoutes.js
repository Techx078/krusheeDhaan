const express = require("express");
const router = express.Router();
const marketController = require("../controllers/marketController");
const { isLoggedIn } = require("../middelware");
const wrappAsync = require('../utils/wrapper');
router.get(
  "/market-yard",

 wrappAsync( marketController.marketget )
);
router.post(
"/market-yard",
 
 wrappAsync(  marketController.marketpost )
);

module.exports = router;