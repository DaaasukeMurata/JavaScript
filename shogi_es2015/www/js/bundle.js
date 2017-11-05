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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__piece__ = __webpack_require__(3);



class Table {

  constructor() {
    this.cells = [];
    for (let x = 0; x < Table.COLS; x++) {
      this.cells[x] = [];
      for (let y = 0; y < Table.ROWS; y++) {
        this.cells[x][y] = new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* Cell */](null);
      }
    }
    this.init();
  }

  // 初期配置
  init() {
    this.cells[0][0].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KYO", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[1][0].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KEI", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[2][0].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("GIN", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[3][0].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KIN", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[4][0].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("OU", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[5][0].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KIN", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[6][0].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("GIN", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[7][0].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KEI", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[8][0].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KYO", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));

    this.cells[1][1].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("HI", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[7][1].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KAKU", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));

    this.cells[0][2].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[1][2].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[2][2].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[3][2].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[4][2].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[5][2].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[6][2].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[7][2].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));
    this.cells[8][2].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["a" /* PIECE_ORDER_GOTE */]));

    this.cells[0][6].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[1][6].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[2][6].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[3][6].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[4][6].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[5][6].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[6][6].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[7][6].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[8][6].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("FU", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));

    this.cells[1][7].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KAKU", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[7][7].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("HI", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));

    this.cells[0][8].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KYO", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[1][8].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KEI", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[2][8].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("GIN", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[3][8].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KIN", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[4][8].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("OU", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[5][8].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KIN", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[6][8].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("GIN", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[7][8].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KEI", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
    this.cells[8][8].setPiece(new __WEBPACK_IMPORTED_MODULE_1__piece__["c" /* Piece */]("KYO", __WEBPACK_IMPORTED_MODULE_1__piece__["b" /* PIECE_ORDER_SENTE */]));
  }

  static get COLS() {
    return 9;
  }

  static get ROWS() {
    return 9;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Table;


// let table = new Table();
// console.log(table);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__panel__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__values__ = __webpack_require__(5);




class Shogi {
  constructor() {
    const canvas = document.getElementById("canvas");
    this.panel = new __WEBPACK_IMPORTED_MODULE_1__panel__["a" /* default */](canvas, __WEBPACK_IMPORTED_MODULE_2__values__["b" /* PANEL_WIDTH */], __WEBPACK_IMPORTED_MODULE_2__values__["a" /* PANEL_HEIGHT */]);
    this.table = null;
  }

  startGame() {
    this.table = new __WEBPACK_IMPORTED_MODULE_0__table__["a" /* default */]();
    this.panel.setTable(this.table);
    this.panel.paint();
  }
}

const shogi = new Shogi();
shogi.startGame();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CELL_STATE_IDLE = 0;
/* unused harmony export CELL_STATE_IDLE */

const CELL_STATE_SELECTED = 1;
/* unused harmony export CELL_STATE_SELECTED */

const CELL_STATE_MOVABLE = 2;
/* unused harmony export CELL_STATE_MOVABLE */


class Cell {
  constructor() {
    this.piece = null;
    this.state = CELL_STATE_IDLE;
  }

  // 駒を配置。取り除くときはnullで指定
  setPiece(piece) {
    this.piece = piece;
  }

  get hasPiece() {
    if (this.piece == null) {
      return 0;
    } else {
      return 1;
    }
  }

  select() {
    if (this.state == CELL_STATE_SELECTED) {
      this.state = CELL_STATE_IDLE;
    } else {
      this.state = CELL_STATE_SELECTED;
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cell;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const idTable = {
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
  NARI_FU: Symbol()
};

const nameTable = {
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
  NARI_FU: "と"
};

// [x, y, continuous]
const movablesTable = {
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
  NARI_FU: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 1, 0], [-1, 0, 0], [-1, -1, 0]]
};

// 成れるか
const promoteTable = {
  OU: 0,
  HI: 1,
  KAKU: 1,
  KIN: 0,
  GIN: 1,
  KEI: 1,
  KYO: 1,
  FU: 1,
  RYU: 0,
  UMA: 0,
  NARI_GIN: 0,
  NARI_KEI: 0,
  NARI_KYO: 0,
  NARI_FU: 0
};

const PIECE_ORDER_SENTE = 0;
/* harmony export (immutable) */ __webpack_exports__["b"] = PIECE_ORDER_SENTE;

const PIECE_ORDER_GOTE = 1;
/* harmony export (immutable) */ __webpack_exports__["a"] = PIECE_ORDER_GOTE;


class Piece {

  constructor(id, order) {
    this.id = idTable[id];
    this.name = nameTable[id];
    this.movables = movablesTable[id];
    this.canPromote = promoteTable[id];
    this.order = order;
  }

  // 成る
  promote() {
    let promoted_id;

    if (!this.canPromote)
      return;

    switch (this.id) {
      case idTable["HI"]:
        promoted_id = "RYU";
        break;
      case idTable["KAKU"]:
        promoted_id = "UMA";
        break;
      case idTable["GIN"]:
        promoted_id = "NARI_GIN";
        break;
      case idTable["KEI"]:
        promoted_id = "NARI_KEI";
        break;
      case idTable["KYO"]:
        promoted_id = "NARI_KYO";
        break;
      case idTable["FU"]:
        promoted_id = "NARI_FU";
        break;
    }
    this.id = idTable[promoted_id];
    this.name = nameTable[promoted_id];
    this.movables = movablesTable[promoted_id];
    this.canPromote = promoteTable[promoted_id];
  }

  // 成ったのを戻す
  backPromote() {
    let promoted_id;

    switch (this.id) {
      case idTable["RYU"]:
        promoted_id = "HI";
        break;
      case idTable["UMA"]:
        promoted_id = "KAKU";
        break;
      case idTable["NARI_GIN"]:
        promoted_id = "GIN";
        break;
      case idTable["NARI_KEI"]:
        promoted_id = "KEI";
        break;
      case idTable["NARI_KYO"]:
        promoted_id = "KYO";
        break;
      case idTable["NARI_FU"]:
        promoted_id = "FU";
        break;
    }
    this.id = idTable[promoted_id];
    this.name = nameTable[promoted_id];
    this.movables = movablesTable[promoted_id];
    this.canPromote = promoteTable[promoted_id];

  }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = Piece;




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table__ = __webpack_require__(0);


class Panel {
  constructor(canvas, width, height) {
    this.canvas = canvas;
    this.drawCtx = canvas.getContext("2d");
    this.width = width;
    this.height = height;

    this.canvas.style.width = width + "px";
    this.canvas.style.height = height + "px";
    this.canvas.width = width;
    this.canvas.height = height;
  }

  setTable(table) {
    this.table = table;
  }

  paint() {
    for (let x = 0; x < __WEBPACK_IMPORTED_MODULE_0__table__["a" /* default */].COLS; x++) {
      for (let y = 0; y < __WEBPACK_IMPORTED_MODULE_0__table__["a" /* default */].ROWS; y++) {
        this.paintCell(this.table.cells[x][y], x, y);
      }
    }
  }

  paintCell(cell, x, y) {
    const cellWidth = this.width / __WEBPACK_IMPORTED_MODULE_0__table__["a" /* default */].COLS;
    const cellHeight = this.height / __WEBPACK_IMPORTED_MODULE_0__table__["a" /* default */].ROWS;

    const left = cellWidth * x;
    const top = cellHeight * y;

    // マス描画
    this.drawCtx.fillStyle = "rgb(255,255,255)";
    this.drawCtx.fillRect(left, top, cellWidth, cellHeight);
    this.drawCtx.StrokeStyle = "rgb(0,0,255)";
    this.drawCtx.strokeRect(left, top, cellWidth, cellHeight);

    // 駒の文字描画
    if (cell.hasPiece) {
      let fontsize = Math.ceil(Math.min(cellWidth, cellHeight) * 0.8);
      let px = left + (cellWidth * 0.1);
      let py = top + (cellWidth * 0.1);

      this.drawCtx.fillStyle = "rgb(50,50,50)";
      this.drawCtx.font = `${fontsize}px Times New Roman`;
      this.drawCtx.textAligh = "center";
      this.drawCtx.textBaseline = "top";

      // 後手の場合、逆さにして文字描画
      if (cell.piece.order) {
        this.drawCtx.rotate(Math.PI);
        px = -px - (cellWidth * 0.8);
        py = -py - (cellHeight * 0.8);
      }
      this.drawCtx.fillText(cell.piece.name, px, py);
      if (cell.piece.order) {
        this.drawCtx.rotate(Math.PI);
      }
    }
  }

  // 座標から、tableのマス取得
  getTablePosition(xpx, ypx) {
    if (this.table == null) {
      return [null, null];
    }

    const cellWidth = this.width / __WEBPACK_IMPORTED_MODULE_0__table__["a" /* default */].COLS;
    const cellHeight = this.height / __WEBPACK_IMPORTED_MODULE_0__table__["a" /* default */].ROWS;
    let x = Math.floor(xpx / cellWidth);
    let y = Math.floor(ypx / cellHeight);
    if (x >= __WEBPACK_IMPORTED_MODULE_0__table__["a" /* default */].COLS) {
      x = null;
    }
    if (y >= __WEBPACK_IMPORTED_MODULE_0__table__["a" /* default */].ROWS) {
      y = null;
    }
    return [x, y];
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Panel;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const PANEL_WIDTH = 360;
/* harmony export (immutable) */ __webpack_exports__["b"] = PANEL_WIDTH;

const PANEL_HEIGHT = 360;
/* harmony export (immutable) */ __webpack_exports__["a"] = PANEL_HEIGHT;




/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map