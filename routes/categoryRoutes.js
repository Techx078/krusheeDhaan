const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.catget);
router.post("/",categoryController.catpost);

module.exports = router;