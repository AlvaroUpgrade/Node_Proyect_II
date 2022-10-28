const { mongoose } = require("mongoose");
const Cinema = require("../../api/cinemas/cinemas.model");
const Movie = require("../../api/movies/movies.model");
// const Movie = require("../../api/movies/movies.model");
const { DB_URL } = require("../database/db");

const cinemas = [
  {
    name: "primerCine",
    location: "Madrid",
  },
  {
    name: "segundoCine",
    location: "Madrid",
  },
  {
    name: "terceroCine",
    location: "Madrid",
  },
  {
    name: "cuartoCine",
    location: "Madrid",
  },
  {
    name: "quintoCine",
    location: "Madrid",
  },
  {
    name: "sextoCine",
    location: "Madrid",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allCinemas = await Cinema.find().lean();

    if (!allCinemas.length) {
      console.log("[seed]: No se encuentran personajes, continuo...");
    } else {
      console.log(`[seed]: Encontrados ${allCinemas.length} personajes.`);
      await Cinema.collection.drop();
      console.log("[seed]: Colección Characters eliminada correctamente");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error eliminando la colección -->", error)
  )
  .then(async () => {
    const allMovies = await Movie.find().lean();

    await Cinema.insertMany(allMovies);
    console.log("[seed]: Nuevos personajes añadidos con éxito");
  })
  .catch((error) =>
    console.log("[seed]: Error añadiendo los personajes", error)
  )
  .finally(() => mongoose.disconnect());
