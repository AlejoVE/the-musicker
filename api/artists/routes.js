const controllers = require("./controllers");
const express = require("express");

const router = express.Router();

router.get("/", controllers.getAll);
router.get("/albums/:id", controllers.getAlbums);
router.get("/albums/:id/songs", controllers.getSongs);
router.get("/:id/songs", controllers.getAllSongs);

module.exports = router;
