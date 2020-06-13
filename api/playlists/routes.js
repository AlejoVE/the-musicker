const controllers = require("./controllers");
const express = require("express");

const router = express.Router();

router.get("/", controllers.getAllPlaylists);
router.get("/:id/songs", controllers.getPlaylistSongs);
router.post("/", controllers.addPlaylist);
router.delete("/:id", controllers.deletePlaylist);

module.exports = router;
