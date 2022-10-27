const mongoose = require("mongoose");

const cinemaSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    movies: {},
  },
  {
    timestamps: true,
  }
);

const Cinema = mongoose.model("cinemas", cinemaSchema);

module.exports = Cinema;
