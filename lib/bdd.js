"use strict";

const mysql = require('mysql2/promise')
const config = require('../midgar.config.js')();

const select = async (sql, args = []) => {
  try {
    const request = await query(sql, args);
    return Promise.resolve(request);
  } catch (e) {
    return Promise.reject('at select in bdd.js: ' + e);
  }
}

const insert = async (table, args) => {
  try {
    args = await formatQuery(args);
    const request = `INSERT INTO ${table} (${args.column}) VALUES (${args.values})`;
    const response = await query(request);
    return Promise.resolve({request, response});
  } catch (e) {
    return Promise.reject(e);
  }
}

const query = async (sql, args) => {
  let connection = null;
  try {
    if (!config.bdd) return Promise.reject('Database config not defined');
    const {host, user, database, socketPath} = config.bdd[config.mode];
    connection = await mysql.createConnection({host, user, database, socketPath});
    const results = await connection.execute(sql, args);
    connection.end();
    return Promise.resolve(results[0]);
  } catch (e) {
    if (connection) connection.end();
    Promise.reject('at query in bdd.js: ' + e);
  }
}

const formatQuery = (args) => {
  if (typeof args !== 'object') return Promise.reject('L\'argument doit être un object');
  else if (args.length < 1) return Promise.reject('La liste d\'arguments est vide');
  return Promise.resolve({
    column: Object.keys(args),
    values: `"${Object.values(args).join('", "')}"`
  });
}

module.exports = {
  select,
  insert
}