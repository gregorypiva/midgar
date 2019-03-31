"use strict";

const path = require('path');
const mainPath = path.parse(process.mainModule.filename).dir;

module.exports = () => {
  try {
    return require(mainPath + '/midgar.config.js');
  } catch(e) {
    return configDefault;
  };
}

const configDefault = {
  log: {
    level: 3,
    type: "console",
    dir: "./logs/",
    name: "log-server"
  }
};
