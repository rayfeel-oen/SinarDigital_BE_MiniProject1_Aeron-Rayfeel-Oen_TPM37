const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

// view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/", indexRouter);
app.use("/api", apiRoutes);

module.exports = app;
