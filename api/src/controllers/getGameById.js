const axios = require("axios");
const { Videogame } = require("../db");
const { API_KEY, API_URL } = process.env;
const { cleanObject } = require("../helpers/cleanObject");
const { isUUID } = require("../helpers/isUUID");

/* Tengo el ID por param, en caso de que venga con un formato de UUID
voy a buscar en la base de datos y devolver ese juego.
Si no encuentra nada, por ende es un numero puro y me dirijo a la API*/

const getGameById = async (id) => {
  try {
    if (isUUID(id)) {
      const gamesFromDB = await Videogame.findAll({ where: { id: id } });
      return gamesFromDB;
    }

    const { data } = await axios.get(`${API_URL}/${id}?key=${API_KEY}`);
    const gameByIdApi = await cleanObject(data);

    return gameByIdApi;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getGameById };
