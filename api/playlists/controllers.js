const db = require("../db-connection");

const controllers = {
  getAllPlaylists: async (req, res) => {
    try {
      const sql = `SELECT * FROM playlists`;
      db.all(sql, (err, rows) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.send(rows);
      });
    } catch (error) {
      console.log(error);
    }
  },
  getPlaylistSongs: (req, res) => {
    try {
      const id = Number(req.params.id);
      const sql = `SELECT  t.name as song
                          FROM Playlist_Track pt
                          INNer join Playlists p on pt.PlaylistId = p.PlaylistId
                          INNER JOIN Tracks T ON t.trackId  = pt.trackId
                          WHERE pt.playlistId = ${id} LIMIT 30;`;
      db.all(sql, (err, rows) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.send(rows);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = controllers;
