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
