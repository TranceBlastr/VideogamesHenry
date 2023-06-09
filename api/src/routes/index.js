const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const gameHandler = require("../handlers/gameHandler");
const gamePostHandler = require("../handlers/gamepostHandler");
const genreHandler = require("../handlers/genreHandler");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", gameHandler);

router.post("/videogames", gamePostHandler);

router.get("/genres", genreHandler);

module.exports = router;
