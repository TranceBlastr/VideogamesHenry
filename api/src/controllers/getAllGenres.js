const axios = require("axios");
const { Genres } = require("../db");
const { API_KEY, API_GENRE_URL } = process.env;
const { cleanGenre } = require("../helpers/cleanGenre");

const getAllGenres = async () => {
  // Obtener los géneros desde la base de datos
  const genresFromDB = await Genres.findAll();
  console.log("genresfromdb" + genresFromDB);
  if (genresFromDB.length > 0) {
    return genresFromDB;
  }
  // Si la base de datos está vacía, obtener los géneros desde la API
  const { data } = await axios.get(`${API_GENRE_URL}?key=${API_KEY}`);
  const genresFromAPI = await cleanGenre(data.results);
  console.log("genresfromapi:" + genresFromAPI);

  await Genres.bulkCreate(genresFromAPI);

  return [...genresFromDB, ...genresFromAPI];
};

module.exports = { getAllGenres };
