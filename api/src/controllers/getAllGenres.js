const axios = require("axios");
const { Genres } = require("../db");
const { API_KEY, API_GENRE_URL } = process.env;
const { cleanGenre } = require("../helpers/cleanGenre");

const getAllGenres = async () => {
  // Obtener los géneros desde la base de datos
  const genresFromDB = await Genres.findAll();

  if (genresFromDB.length > 0) {
    return genresFromDB;
  }
  const response = await axios.get(`${API_GENRE_URL}?key=${API_KEY}`);
  const genresFromAPI = await cleanGenre(response.data.results);
  // const genresFromAPI = data.results.map((genre) => genre.name);
  // console.log(response.data.results);
  await Genres.bulkCreate(genresFromAPI);
  console.log(genresFromAPI);
  return [...genresFromDB, ...genresFromAPI];
  // return genresFromAPI;
  // return axios
  //   .get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
  //   .then((data) => data.data.results.map((genre) => genre.name))
  //   .catch((error) => new Error(error));
};

module.exports = { getAllGenres };
