const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

// Home page
router.get("/", apiController.renderHome);

// Form page
router.get("/add", apiController.renderAdd);

// Submit data from form
router.post("/add", apiController.addMovie);

// About page
router.get("/about", apiController.renderAbout);

module.exports = router;
