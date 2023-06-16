const axios = require("axios");
const { Videogame } = require("../db");
const { API_KEY, API_URL } = process.env;
const { Op } = require("sequelize");
const { cleanArray } = require("../helpers/cleanArray");
const { remainingFromApi } = require("../helpers/remainingFromApi");

/*Busco los juegos dentro de la BDD y si son menos de 15 pido los necesarios en la api*/

const getGameByName = async (name) => {
  try {
    // prettier-ignore
    const gamesFromDB = await Videogame.findAll({where: {name: { [Op.iLike]: `%${name}%`}}});
    //Chequeo si tengo algun juego en BD y efino la cantidad que me hacen falta de la API
    const remaining = remainingFromApi(gamesFromDB);

    // prettier-ignore
    const { data } = await axios.get(`${API_URL}?key=${API_KEY}&search=${name}`);
    const gamesFromAPIcleaned = await cleanArray(data.results);

    //Itero la cantidad de juegos que falten para llegar a 15 viniendo de la api y pusheandolo a un array nuevo
    const gamesFromApi = [];
    for (let i = 0; i < remaining; i++) {
      gamesFromApi.push(gamesFromAPIcleaned[i]);
    }

    return [...gamesFromDB, ...gamesFromApi];
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getGameByName };
