const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const { isLoggedIn } = require("../middelware");

// Payment Routes
router.get("/payoption",isLoggedIn, paymentController.payop);
router.post("/submit-crop-details", isLoggedIn, paymentController.submit);
router.get("/payment", paymentController.ispay);

module.exports = router;