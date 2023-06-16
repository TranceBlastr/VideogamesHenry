//Limpiar el array, me quedo solo con los datos que necesito.
const cleanArray = (arr) => {
  //Limpiar el array, me quedo con solo lo que necesito.
  return arr.map((elm) => {
    return {
      id: elm.id,
      name: elm.name,
      description: elm.description,
      platform: elm.platforms.map((g) => g.platform.name),
      image: elm.background_image,
      launch: elm.released,
      rating: elm.rating,
      genres: elm.genres.map((g) => g.name),
      createdInDb: false,
    };
  });
};
module.exports = { cleanArray };
