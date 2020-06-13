const controllers = require("./controllers");
const express = require("express");

const router = express.Router();

router.get("/", controllers.getAllPlaylists);
router.get("/:id/songs", controllers.getPlaylistSongs);
// router.get("/albums/:id/songs", controllers.getSongs);
// router.get("/:id/songs", controllers.getAllSongs);

module.exports = router;
