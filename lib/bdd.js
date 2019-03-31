"use strict";

const mysql = require('mysql2/promise')
const config = require('../midgar.config.js')();

const select = async (sql, args = []) => {
  try {
    const request = await query(sql, args);
    return Promise.resolve(request);
  } catch (e) {
    return Promise.reject('at select in bdd.js:' + e);
  }
}

const insert = async (table, args) => {
  if (typeof args !== 'object') return Promise.reject('L\'argument doit être un object');
  try {
    const request = await query(`INSERT INTO ${table} (${Object.keys(args)}) VALUES ( ${Object.values(args).toString()} )`);
    return Promise.resolve(request);
  } catch (e) {
    return Promise.reject(e);
  }
}

const query = async (sql, args = []) => {
  let connection = null;
  try {
    if (!config.bdd) return Promise.reject('Database config not defined');
    const {host, user, database, socketPath} = config.mysql[process.env.NODE_ENV];
    connection = await mysql.createConnection({host, user, database, socketPath});
    //const results = await connection.execute(sql, args);
    connection.end();
    return Promise.resolve(results);
  } catch (e) {
    if (connection) connection.end();
    Promise.reject('at query in bdd.js: ' + e);
  }
}

module.exports = {
  select,
  insert
}