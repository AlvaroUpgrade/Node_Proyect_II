const mongoose = require("mongoose");
const Movie = require("../movies/movies.model");

const cinemaSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    movies: { type: mongoose.Schema.Types.ObjectId, ref: "movies" },
  },
  {
    timestamps: true,
  }
);

const Cinema = mongoose.model("cinemas", cinemaSchema);

module.exports = Cinema;
