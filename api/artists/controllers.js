const db = require("../db-connection");

const controllers = {
  getAll: (req, res) => {
    const sql = `SELECT * FROM artists`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json(rows);
    });
  },
  getAlbums: (req, res) => {
    try {
      const id = Number(req.params.id);
      const sql = `SELECT al.title, al.albumId
                  FROM Albums al
                  INNER JOIN Artists ar on ar.artistId = al.ArtistId
                  WHERE ar.ArtistId = ${id};`;

      db.all(sql, (err, rows) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.json(rows);
      });
    } catch (error) {
      console.log(error);
    }
  },
  getSongs: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const sql = `SELECT t.name
                  FROM Tracks t
                  WHERE t.albumid = ${id};`;

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
  getAllSongs: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const sql = `SELECT t.name 
                  FROM Tracks t
                  INNER JOIN  Artists ar  ON ar.Name = t.composer
                  WHERE artistId = ${id};`;

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
