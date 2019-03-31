"use strict";

const fs = require('fs');
const { Console } = require('console');
const config = require("../midgar.config.js")();
const fsPromises = require('fs').promises;

const error = (message, filename = 'None', code = 'None') => {
  send('ERROR', {message, filename, code});
}

const warn = (message, filename = 'None', code = 'None') => {
  if (config.log.level < 1) return;
  send('WARN', {message, filename, code});
}

const debug = (message, filename = 'None', code = 'None') => {
  if (config.log.level < 2) return;
  send('DEBUG', {message, filename, code});
}

const info = (message, filename = 'None', code = 'None') => {
  if (config.log.level < 3) return;
  send('INFO', {message, filename, code});
}

const write = async (message, filename) => {
  try {
    await getDirectory();
    const stdout = fs.createWriteStream(`${config.log.dir}${filename}.log`, {flags: 'a'});
    const logger = new Console({ stdout });
    logger.log(message);
  } catch (e) {
    throw `Error name=Midgar.logger type=function(write) name=createDirectory : ${e}`;    
  }
}

const send = (mode, args) => {
  if (config.log.type === 'console') console.log(`${mode} (-) ${args.filename} (-) ${args.code} : ${args.message}`);
  else if (config.log.type === 'file') sendFile(mode, args);
}

const sendFile = async (mode, args) => {
  try {
    await getDirectory();
    const stdout = fs.createWriteStream(`${config.log.dir}${config.log.name}.log`, {flags: 'a'});
    const logger = new Console({ stdout });
    const date = new Date();
    logger.log(`${date.toLocaleDateString('fr-FR')} - ${mode} (-) ${args.filename} (-) ${args.code} : ${args.message} \r\n`);
  } catch (e) {
    console.error(e);
  }
}

const getDirectory = async () => {
  try {
    await fsPromises.readdir(config.log.dir);
    return Promise.resolve(true);
  } catch(e) {
    if(e.code === 'ENOENT') createDirectory();
    else return Promise.reject(e);
  }
}

const createDirectory = async () => {
  try {
    await fsPromises.mkdir(config.log.dir, { recursive: true });
  } catch(e) {
    throw `Error name=Midgar.logger type=function name=createDirectory : ${e}`;
  }
}

module.exports = {
  error,
  warn,
  debug,
  info,
}