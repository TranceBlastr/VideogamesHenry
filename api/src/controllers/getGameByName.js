const axios = require("axios");
const { Videogame } = require("../db");
const { API_KEY, API_URL } = process.env;
const { Op } = require("sequelize");
const { cleanArray } = require("../controllers/cleanArray");

// Tengo el name por param, busco en la BDD todos los juegos con ese nombre
// busco en la api por query y devuelvo todo junto
const getGameByName = async (name) => {
  try {
    //Traigo los juegos con similitudes a Name de la BDD
    const gamesFromDB = await Videogame.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
    });
    //Chequeo si tengo algun juego en BD
    //Defino la cantidad que me hacen falta de la API
    let cantidadJuegosDB = 0;
    let cantidadJuegosAPI = 15;
    if (gamesFromDB !== undefined) {
      cantidadJuegosDB = gamesFromDB.length + 1;
    }
    if (cantidadJuegosDB < 15) {
      cantidadJuegosAPI - cantidadJuegosDB;
    }

    //Le pido a la api el contenido de ese nombre especifico
    const { data } = await axios.get(
      `${API_URL}?key=${API_KEY}&search=${name}`
    );
    // limpio los datos obtenidos
    const gamesFromAPIcleaned = await cleanArray(data.results);

    //Itero la cantidad de juegos que falten para llegar a 15
    //Viniendo de la api y pusheandolo a un array nuevo
    const gamesFromApi = [];
    for (let i = 0; i < cantidadJuegosAPI; i++) {
      gamesFromApi.push(gamesFromAPIcleaned[i]);
    }
    //Concateno ambos resultando en un array de 15 objetos
    return [...gamesFromDB, ...gamesFromApi];
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getGameByName };
