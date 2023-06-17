const { getAllGenres } = require("../controllers/getAllGenres");

const genreHandler = async (req, res) => {
  try {
    const genresApi = await getAllGenres();
    console.log("genresApi:" + genresApi);
    res.status(200).json(genresApi);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = { genreHandler };
