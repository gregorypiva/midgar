"use strict";

const path = require('path');
const mainPath = path.parse(process.mainModule.filename).dir;
let config = {};

try {
  config = require(mainPath + '/midgar.config.js');
} catch(e) {}

module.exports = () => {
  return {
    mode: config.mode || 'development',
    log: {
      level: config.log.level || 0,
      type: config.log && config.log.type || "console",
      dir: config.log && config.log.dir || "./logs/",
      name: config.log && config.log.name || "log-server"
    },
    bdd: {
      development: config.bdd && config.bdd.development || null,
      production: config.bdd && config.bdd.production || null
    }
  }
}
