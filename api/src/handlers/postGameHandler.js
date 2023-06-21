const { Videogame, Genres } = require("../db");

const postGameHandler = async (req, res) => {
  const {
    name,
    description,
    platform,
    background_image,
    launch,
    rating,
    genres,
  } = req.body;

  try {
    if (!name || !description || !platform || !genres || !rating || !launch) {
      return res.status(400).json({ error: "Falta informacion obligatoria" });
    }

    const [createdGame, created] = await Videogame.findOrCreate({
      where: { name }, // Verifica si ya existe un juego con el mismo nombre
      defaults: {
        name,
        description,
        platform,
        background_image,
        rating,
        launch,
      },
    });
    // prettier-ignore
    if (!created) {
      return res.status(400).json({ error: "El juego ya existe en nuestra biblioteca." });
    }

    const findGenres = await Genres.findAll({
      where: {
        name: genres,
      },
    });

    await createdGame.addGenres(findGenres);

    return res.status(201).json("Juego creado con exito!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { postGameHandler };
