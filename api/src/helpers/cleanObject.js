//Limpiar el array, me quedo solo con los datos que necesito.
const cleanObject = (obj) => {
  //Limpiar el obj, me quedo con solo lo que necesito.
  return {
    id: obj.id,
    name: obj.name,
    description: obj.description,
    platform: obj.platforms.name,
    image: obj.background_image,
    launch: obj.released,
    rating: obj.rating,
    genres: obj.genres.name,
    createdInDb: false,
  };
};
module.exports = { cleanObject };
