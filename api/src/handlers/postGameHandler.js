const { create } = require("domain");
const { Videogame } = require("../db");

const postGameHandler = async (req, res) => {
  const {
    name,
    description,
    platform,
    image,
    launch,
    rating,
    createdInDb,
    genres,
  } = req.body;
  try {
    // Validar que se proporcionen los datos necesarios
    if (
      !name ||
      !description ||
      !platform ||
      !genres ||
      !rating ||
      !launch ||
      !createdInDb
    ) {
      return res.status(400).json({ error: "Falta informacion obligatoria" });
    }
    const game = await Videogame.create({
      name,
      description,
      platform,
      image,
      genres,
      rating,
      launch,
      createdInDb,
    });
    return res.status(201).json("Juego creado con exito");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { postGameHandler };
