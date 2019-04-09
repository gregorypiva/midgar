"use strict";

const mysql = require('mysql2/promise');
import {config, logger} from 'midgar';

class Database {
  constructor() {

  }

  static async select (sql: string, args?: Array<any>): Promise<any> {
    try {
      const response = await this.query(sql, args);
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject('at select in database.js: ' + e);
    }
  }

  static async insert (sql: string, args: Array<any>) {
    try {
      const response = await this.query(sql, args);
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject('at insert in database.js: ' + e);
    }
  }

  static async update (sql: string, args: object) {
    return Promise.resolve(true);
  }

  static async query (sql: string, args: Array<any> = []) {
    let connection: any;
    let results: any;
    const {host, user, database, socketPath} = (config as any).database[process.env.NODE_ENV];
    try {
      connection = await mysql.createConnection({host, user, database, socketPath});
      results = await connection.query(sql, args);
      logger.info('at query - request : ' + sql + '\r\n Results : ' + JSON.stringify(results[0]), 'database.js');
    } catch (e) {
      Promise.reject('at query in database.js: ' + e);
    } finally {
      if (connection) connection.end();
      return Promise.resolve(results[0]);
    }
  }

  static format () {

  }
}

export {Database}

// const select = async (sql: string, args?: object): Promise<Array<string|null>|string> => {
//   try {
//     const request = await query(sql, args);
//     return Promise.resolve(request);
//   } catch (e) {
//     return Promise.reject('at select in bdd.js: ' + e);
//   }
// }

// const insert = async (table: string, args: object): Promise<any> => {
//   try {
//     args = await formatQuery(args);
//     const request = `INSERT INTO ${table} (${(args as any).column}) VALUES (${(args as any).values})`;
//     const response = await query(request);
//     return Promise.resolve({request, response});
//   } catch (e) {
//     return Promise.reject(e);
//   }
// }

// const query = async (sql: string, args?: object): Promise<any> => {
//   let connection = null;
//   try {
//     if (!config.bdd) return Promise.reject('Database config not defined');
//     const {host, user, database, socketPath} = (config as any).bdd[process.env.NODE_ENV];
//     connection = await mysql.createConnection({host, user, database, socketPath});
//     const results = await connection.execute(sql, args);
//     connection.end();
//     return Promise.resolve(results[0]);
//   } catch (e) {
//     if (connection) connection.end();
//     Promise.reject('at query in bdd.js: ' + e);
//   }
// }

// const formatQuery = (args: object): Promise<object> => {
//   if (typeof args !== 'object') return Promise.reject('L\'argument doit être un object');
//   else if ((args as any).length < 1) return Promise.reject('La liste d\'arguments est vide');
//   return Promise.resolve({
//     column: Object.keys(args),
//     values: `"${Object.values(args).join('", "')}"`
//   });
// }

// export const bdd = {
//   select,
//   insert
// }