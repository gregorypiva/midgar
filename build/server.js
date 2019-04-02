/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/logger.ts":
/*!***********************!*\
  !*** ./lib/logger.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// \"use strict\";\r\nexports.__esModule = true;\r\n// const fs = require('fs');\r\n// const { Console } = require('console');\r\n// const config = require(\"../midgar.config.js\")();\r\n// const fsPromises = require('fs').promises;\r\nvar error = function (message, filename, code) {\r\n    if (filename === void 0) { filename = 'None'; }\r\n    if (code === void 0) { code = 'None'; }\r\n    //send('ERROR', {message, filename, code});\r\n    console.log(message);\r\n};\r\n// const warn = (message, filename = 'None', code = 'None') => {\r\n//   if (config.log.level < 1) return;\r\n//   send('WARN', {message, filename, code});\r\n// }\r\n// const debug = (message, filename = 'None', code = 'None') => {\r\n//   if (config.log.level < 2) return;\r\n//   send('DEBUG', {message, filename, code});\r\n// }\r\n// const info = (message, filename = 'None', code = 'None') => {\r\n//   if (config.log.level < 3) return;\r\n//   send('INFO', {message, filename, code});\r\n// }\r\n// const write = async (message, filename) => {\r\n//   try {\r\n//     await getDirectory();\r\n//     const stdout = fs.createWriteStream(`${config.log.dir}${filename}.log`, {flags: 'a'});\r\n//     const logger = new Console({ stdout });\r\n//     logger.log(message);\r\n//   } catch (e) {\r\n//     throw `Error name=Midgar.logger type=function(write) name=createDirectory : ${e}`;    \r\n//   }\r\n// }\r\n// const send = (mode, args) => {\r\n//   if (config.log.type === 'console') console.log(`${mode} (-) ${args.filename} (-) ${args.code} : ${args.message}`);\r\n//   else if (config.log.type === 'file') sendFile(mode, args);\r\n// }\r\n// const sendFile = async (mode, args) => {\r\n//   try {\r\n//     await getDirectory();\r\n//     const stdout = fs.createWriteStream(`${config.log.dir}${config.log.name}.log`, {flags: 'a'});\r\n//     const logger = new Console({ stdout });\r\n//     const date = new Date();\r\n//     logger.log(`${date.toLocaleDateString('fr-FR')} - ${mode} (-) ${args.filename} (-) ${args.code} : ${args.message} \\r\\n`);\r\n//   } catch (e) {\r\n//     console.error(e);\r\n//   }\r\n// }\r\n// const getDirectory = async () => {\r\n//   try {\r\n//     await fsPromises.readdir(config.log.dir);\r\n//     return Promise.resolve(true);\r\n//   } catch(e) {\r\n//     if(e.code === 'ENOENT') createDirectory();\r\n//     else return Promise.reject(e);\r\n//   }\r\n// }\r\n// const createDirectory = async () => {\r\n//   try {\r\n//     await fsPromises.mkdir(config.log.dir, { recursive: true });\r\n//   } catch(e) {\r\n//     throw `Error name=Midgar.logger type=function name=createDirectory : ${e}`;\r\n//   }\r\n// }\r\nexports.logger = {\r\n    error: error\r\n};\r\n\n\n//# sourceURL=webpack:///./lib/logger.ts?");

/***/ }),

/***/ "./lib/midgar.ts":
/*!***********************!*\
  !*** ./lib/midgar.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nexports.__esModule = true;\r\n// module.exports.Logger = require('./lib/Logger');\r\n// module.exports.Bdd = require('./lib/Bdd');\r\n// module.exports = {\r\n//   logger: require('./lib/Logger'),\r\n//   bdd:    require('./lib/Bdd')\r\n// }\r\n__export(__webpack_require__(/*! ./logger */ \"./lib/logger.ts\"));\r\n\n\n//# sourceURL=webpack:///./lib/midgar.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar midgar_1 = __webpack_require__(/*! midgar */ \"./lib/midgar.ts\");\r\nconsole.log(midgar_1.logger);\r\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ })

/******/ });