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
      const sql = `SELECT al.title
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
};

module.exports = controllers;
