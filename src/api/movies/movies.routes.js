const express = require("express");
const Movie = require("./movies.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    console.log(allMovies);
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json("Error en el servidor");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const movieToFind = await Movie.findById(id);
    console.log(movieToFind);
    return res.status(200).json(movieToFind);
  } catch (error) {
    return res.status(500).json("No se encontró la pelicula");
  }
});

router.get("/findbytitle/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const movieToFind = await Movie.findOne({ title: title });
    console.log(movieToFind);
    return res.status(200).json(movieToFind);
  } catch (error) {
    return res.status(500).json("No se encontró la pelicula");
  }
});

router.post("/create", async (req, res) => {
  try {
    const movie = req.body;
    const newMovie = new Movie(movie);
    const created = await newMovie.save();
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json("Error al crear la pelicula");
  }
});

router.put("/modify/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const movie = req.body;
    const movieModificator = new Movie(movie);
    movieModificator._id = id;
    const movieModified = await Movie.findByIdAndUpdate(id, movieModificator);
    return res.status(200).json("Se ha modificado la pelicula");
  } catch (error) {
    return res.status(500).json("Error al modificar la pelicula");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const movieToDelete = await Movie.findByIdAndRemove(id);
    return res.status(200).json("Se han modificado los datos de la pelicula");
  } catch (error) {
    return res.status(500).json("Error al modificar la pelicula");
  }
});

module.exports = router;
