const {
  getAllGamesController,
} = require("../controllers/getAllGamesController");
const { getGameByName } = require("../controllers/getGameByName");
const getAllGamesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const games = name
      ? await getGameByName(name)
      : await getAllGamesController();
    res.status(200).json(games);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const getGameByIdHandler = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const game = await getGameById(id);
//     res.status(200).json(game);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
// const postGameHandler = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const game = await getGameById(id);
//     res.status(200).json(game);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
module.exports = {
  getAllGamesHandler,
  // getGameByIdHandler,
  // postGameHandler,
};
