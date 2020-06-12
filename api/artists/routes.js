const controllers = require("./controllers");
const express = require("express");

const router = express.Router();

router.get("/", controllers.getAll);
router.get("/albums/:id", controllers.getAlbums);

module.exports = router;
