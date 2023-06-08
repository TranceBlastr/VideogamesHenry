const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", videogameHandler);

router.get("/videogames/:id", videogameHandlerById);

router.get("/videogames/name?=", videogameHandlerByNameQuery);

router.post("/videogames", videogamePostHandler);

router.get("/genres", genreHandler);
module.exports = router;
