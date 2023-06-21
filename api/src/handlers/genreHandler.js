const { getAllGenres } = require("../controllers/getAllGenres");
// const { Genres } = require("../db");

const genreHandler = async (req, res) => {
  try {
    const genresApi = await getAllGenres();
    // genresApi.forEach(async (genre) => {
    //   return await Genres.findOrCreate({
    //     where: {
    //       name: genresApi,
    //     },
    //   });
    // });
    res.status(200).json(genresApi);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = { genreHandler };
