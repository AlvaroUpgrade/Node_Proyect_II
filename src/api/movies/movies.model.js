const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true },
    genre: {
      type: String,
      default: false,
      enum: [
        "Acción",
        "Terror",
        "Aventura",
        "Ciencia ficción",
        "Comedia",
        "Drama",
        "Fantasia",
        "Musical",
        "Animación",
        "Comedia romántica",
      ],
    },
  },

  {
    timestamps: true,
  }
);

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;
