const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");
const express = require("express");
var cors = require("cors");
const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());
db.serialize(() => {
  db.run("CREATE TABLE main (info TEXT)");
});

app.get("/", (req, res) => {
  var sql = `select * from main`;
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

app.post("/post", (req, res) => {
  let sql = db.prepare("INSERT INTO main VALUES (?)");
  sql.run(req.body.message);
  var response = `select * from main`;
  var params = [];
  db.all(response, params, (err, rows) => {
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
