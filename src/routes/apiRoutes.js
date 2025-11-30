const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

// Get movie list in JSON
router.get("/movies", apiController.getMovies);

module.exports = router;
