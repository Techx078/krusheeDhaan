const express = require("express");
const router = express.Router();
const uerController = require("../controllers/userController");
const wrappAsync = require('../utils/wrapper');


router.get("/register",uerController.user_reg_get);
router.post(
  "/register",
  wrappAsync(uerController.user_reg_post)
);
router.get("/login", uerController.user_login_get);
router.post(
  "/login",
  wrappAsync(uerController.user_login_post));

  module.exports = router;