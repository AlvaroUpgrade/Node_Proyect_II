const { mongoose } = require("mongoose");
const Movie = require("../../api/movies/movies.model");
const { DB_URL } = require("../database/db");

const movies = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    year: 1999,
    genre: "Acción",
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    year: 2003,
    genre: "Acción",
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    year: 2003,
    genre: "Animación",
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    year: 2016,
    genre: "Animación",
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ciencia ficción",
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    year: 2004,
    genre: "Comedia romántica",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    //Pregunta
    const allMovies = await Movie.find().lean();

    if (!allMovies.length) {
      console.log("[seed]: No se encuentran personajes, continuo...");
    } else {
      console.log(`[seed]: Encontrados ${allMovies.length} personajes.`);
      await Movie.collection.drop();
      console.log("[seed]: Colección Characters eliminada correctamente");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error eliminando la colección -->", error)
  )
  .then(async () => {
    await Movie.insertMany(movies);
    console.log("[seed]: Nuevos personajes añadidos con éxito");
  })
  .catch((error) =>
    console.log("[seed]: Error añadiendo los personajes", error)
  )
  .finally(() => mongoose.disconnect());
