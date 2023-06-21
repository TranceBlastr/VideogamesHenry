//Limpiar el array, me quedo solo con los datos que necesito.
const cleanGenre = (arr) => {
  //Limpiar el array, me quedo con solo lo que necesito.
  return arr.map((elm) => {
    return {
      // id: elm.id,
      name: elm.name,
    };
  });
};
module.exports = { cleanGenre };
