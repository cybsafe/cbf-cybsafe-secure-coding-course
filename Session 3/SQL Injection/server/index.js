const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");
const express = require("express");
var cors = require("cors");
const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());
db.serialize(() => {
  db.run("CREATE TABLE lorem (info TEXT)");

  const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (let i = 0; i < 10; i++) {
    stmt.run("Ipsum " + i);
  }
  stmt.finalize();
});

app.post("/", (req, res) => {
  var sql = `select * from lorem where rowid=${req.body.id}`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on("SIGTERM", () => {
  db.close();
});
