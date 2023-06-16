const remainingFromApi = (gamesInDB) => {
  /* Compruebo que tenga juegos en la BDD y si son menos de 15 devuelvo
  la cantidad de juegos que deberia llamar por API en el controller */
  if (gamesInDB !== undefined && gamesInDB.length <= 15) {
    return 15 - gamesInDB.length;
  }
};
module.exports = { remainingFromApi };
