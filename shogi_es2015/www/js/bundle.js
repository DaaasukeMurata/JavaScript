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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__piece_value_js__ = __webpack_require__(3);


class Piece {
  constructor(id) {
    this.id = __WEBPACK_IMPORTED_MODULE_0__piece_value_js__["a" /* id */][id];
    this.name = __WEBPACK_IMPORTED_MODULE_0__piece_value_js__["c" /* name */][id];
    this.movables = __WEBPACK_IMPORTED_MODULE_0__piece_value_js__["b" /* movables */][id];
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Piece;


const piece = new Piece("OU");
console.log("piece.id : ", piece.id);
console.log("piece.name :", piece.name);
console.log("piece.movable :", piece.movable);

for (let move of piece.movables){
  console.log(move);
}


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const id = {
  OU: Symbol(),
  HI: Symbol(),
  KAKU: Symbol(),
  KIN: Symbol(),
  GIN: Symbol(),
  KEI: Symbol(),
  KYO: Symbol(),
  HU: Symbol(),
  RYU: Symbol(),
  UMA: Symbol(),
  NARI_GIN: Symbol(),
  NARI_KEI: Symbol(),
  NARI_KYO: Symbol(),
  NARI_HU: Symbol()
};
/* harmony export (immutable) */ __webpack_exports__["a"] = id;


const name = {
  OU: "王",
  HI: "飛",
  KAKU: "角",
  KIN: "金",
  GIN: "銀",
  KEI: "桂",
  KYO: "香",
  FU: "歩",
  RYU: "竜",
  UMA: "馬",
  NARI_GIN: "全",
  NARI_KEI: "圭",
  NARI_KYO: "杏",
  NARI_HU: "と"
};
/* harmony export (immutable) */ __webpack_exports__["c"] = name;


// [x, y, continuous]
const movables = {
  OU: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [-1, 1, 0], [-1, 0, 0], [-1, -1, 0]],
  HI: [[0, -1, 1], [1, 0, 1], [0, 1, 1], [-1, 0, 1]],
  KAKU: [[1, -1, 1], [1, 1, 1], [-1, 1, 1], [-1, -1, 1]],
  KIN: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 1, 0], [-1, 0, 0], [-1, -1, 0]],
  GIN: [[0, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0], [-1, -1, 0]],
  KEI: [[1, -2, 0], [-1, -2, 0]],
  KYO: [[0, -1, 1]],
  FU: [[0, -1, 0]],
  RYU: [[0, -1, 1], [1, -1, 0], [1, 0, 1], [1, 1, 0], [0, 1, 1], [-1, 1, 0], [-1, 0, 1], [-1, -1, 0]],
  UMA: [[0, -1, 0], [1, -1, 1], [1, 0, 0], [1, 1, 1], [0, 1, 0], [-1, 1, 1], [-1, 0, 0], [-1, -1, 1]],
  NARI_GIN: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 1, 0], [-1, 0, 0], [-1, -1, 0]],
  NARI_KEI: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 1, 0], [-1, 0, 0], [-1, -1, 0]],
  NARI_KYO: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 1, 0], [-1, 0, 0], [-1, -1, 0]],
  NARI_HU: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 1, 0], [-1, 0, 0], [-1, -1, 0]]
};
/* harmony export (immutable) */ __webpack_exports__["b"] = movables;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map