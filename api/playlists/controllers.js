const db = require("../db-connection");

const controllers = {
  getAll: async (req, res) => {
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
};

module.exports = controllers;
