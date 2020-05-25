console.log('server.js');

const mysql = require('mysql');
const express = require('express');

const dbConfig = require('./config/db.config');

const app = express();
const PORT = process.env.PORT || 3306;

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

app.get('/selectfrom', (req, res) => {
  let sql = 'SELECT * FROM test WHERE username="DrFreeze459";';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(PORT, function () {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`,
    PORT
  );
});
