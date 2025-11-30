const fs = require("fs");
const path = require("path");

const dataFile = path.join(__dirname, "..", "..", "data", "data.json");

// read JSON file
function loadData() {
  try {
    return JSON.parse(fs.readFileSync(dataFile));
  } catch {
    return [];
  }
}

// write JSON file
function saveData(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

exports.renderHome = (req, res) => {
  const movies = loadData();
  res.render("index", { movies });
};

exports.renderAdd = (req, res) => {
  res.render("add");
};

exports.addMovie = (req, res) => {
  const { title, genre, duration, description } = req.body;

  const movies = getMovies();
  movies.push({
    id: Date.now(),
    title,
    genre,
    duration,
    description,
  });

  saveMovies(movies);
  res.redirect("/");
};

exports.getMovies = (req, res) => {
  const movies = loadData();
  res.json(movies);
};

exports.renderAbout = (req, res) => {
  res.render("about");
};
