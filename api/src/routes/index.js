const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllGamesHandler } = require("../handlers/gameHandler");
const { getGameByIdHandler } = require("../handlers/gameHandler");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/games", getAllGamesHandler);
router.get("/games/:id", getGameByIdHandler);
// router.post("/games", gamePostHandler);

// router.get("/genres", genreHandler);

module.exports = router;

//! Teniendo las sub-rutas, utilizo los handlers para gestionar la informacion
//! que debo pedir a la
