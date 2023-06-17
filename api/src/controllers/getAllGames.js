const axios = require("axios");
const { Videogame } = require("../db");
const { API_KEY, API_URL } = process.env;
const { cleanArray } = require("../helpers/cleanArray");

//Levanto los juegos de las primeras 5 paginas de la API
const cienJuegos = async () => {
  //defino el array
  let apiInfo = [];
  for (let i = 1; i <= 5; i++) {
    //itero para pedir a cada una de las 5 paginas que necesito
    const { data } = await axios.get(`${API_URL}?key=${API_KEY}&page=${i}`);
    //concateno lo que tenog mas la info de la pag nueva de la API
    apiInfo = [...apiInfo, ...data.results];
  }
  //ya devuelvo todo completo
  return apiInfo;
};

const getAllGames = async () => {
  try {
    // Obtengo juegos de la base de datos
    const gamesFromDB = await Videogame.findAll();

    // Obtengo juegos de la API utilizando cienJuegos
    const gamesFromAPI = await cleanArray(await cienJuegos());

    // Combino los juegos de la base de datos y de la API
    const allGames = [...gamesFromDB, ...gamesFromAPI];

    return allGames;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = { getAllGames };
