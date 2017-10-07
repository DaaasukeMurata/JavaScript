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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__panel_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__value_js__ = __webpack_require__(4);




class MindSweeper {
  constructor() {
    // const canvas = document.querySelector("#canvas");
    // const message = document.querySelector("#message");
    // const resetButton = document.querySelector("#reset");
    const canvas = document.getElementById("canvas");
    const message = document.getElementById("message");
    const resetButton = document.getElementById("reset");

    this.panel = new __WEBPACK_IMPORTED_MODULE_1__panel_js__["a" /* default */](canvas);
    this.table = null;
    this.panel.setCanvasSize(__WEBPACK_IMPORTED_MODULE_2__value_js__["c" /* PANEL_WIDTH */], __WEBPACK_IMPORTED_MODULE_2__value_js__["b" /* PANEL_HEIGHT */]);
    this.panel.setActionListener((status, data) => {
      if (status == "clicked") {
        const [i, j] = data;
        if (i != null && j != null) {
          this.table.turnAt(i, j);
          this.panel.paint();

          // game clear or game over 判定
          if (this.table.isGameclear()) {
            message.innerHTML = "Game Clear";
            this.panel.stopInputListeners();
          } else if (this.table.isGameover()) {
            message.innerHTML = "Game Over";
            this.panel.stopInputListeners();
          }
        }
      } else if (status == "rightClicked") {
        const [i, j] = data;
        this.table.flagAt(i, j);
        this.panel.paint();
      }
    });

    resetButton.addEventListener("click", () => {
      message.innerHTML = "";
      this.initGame();
    }, false);

  }

  initGame() {
    this.table = new __WEBPACK_IMPORTED_MODULE_0__table_js__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__value_js__["d" /* TABLE_COLS */], __WEBPACK_IMPORTED_MODULE_2__value_js__["e" /* TABLE_ROWS */]);
    this.table.setRandomBombs(__WEBPACK_IMPORTED_MODULE_2__value_js__["a" /* NUM_BOMBS */]);
    this.panel.setTable(this.table);
    this.panel.paint();
    if (!this.panel.isListening) {
      this.panel.startInputListeners();
    }
  }
}

const mindSweeper = new MindSweeper();
mindSweeper.initGame();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(2);
  // defaultでexportしたclassに、”Cell"という名前をつける

/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor(cols, rows) {
    this.cols = cols;
    this.rows = rows;
    this.clear();
  }

  // 全cellをfalseで初期化
  clear() {
    this.array = [];
    for (let j = 0; j < this.rows; j++) {
      for (let i = 0; i < this.cols; i++) {
        this.array[j * this.cols + i] = new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* default */](false, false, false);
      }
    }
  }

  // i行j列のCell取得
  getAt(i, j) {
    return this.array[j * this.cols + i];
  }

  // Bombの配置
  setRandomBombs(n) {
    let k = 0;
    while (k < n) {
      const i = Math.floor(Math.random() * this.cols);  // Math.floor()は小数点切り下げ
      const j = Math.floor(Math.random() * this.rows);
      const cell = this.getAt(i, j);
      if (!cell.isBomb) {
        cell.isBomb = true;
        k += 1;
      }
    }
  }

  // 周りのBombの数を返す
  countNeighborBombs(i, j) {
    const positions = this.neighboarPositions(i, j);
    let num = 0;
    for (let k = 0; k < positions.length; k++) {
      const position = positions[k];
      const cell = this.getAt(position.i, position.j);
      if (cell.isBomb) {
        num += 1;
      }
    }
    return num;
  }

  // 周囲のマスをリストで返す
  neighboarPositions(i, j) {
    const min_i = Math.max(i - 1, 0);
    const max_i = Math.min(i + 1, this.cols - 1);
    const min_j = Math.max(j - 1, 0);
    const max_j = Math.min(j + 1, this.rows - 1);
    let list = [];
    for (let jj = min_j; jj <= max_j; jj++) {
      for (let ii = min_i; ii <= max_i; ii++) {
        if (i != ii || j != jj) {   // clickされたマスを除く
          list.push({ i: ii, j: jj });
        }
      }
    }
    return list;
  }

  // OpenCell
  turnAt(i, j) {
    const cell = this.getAt(i, j);
    if (cell.isOpen) {
      return;
    }

    cell.isFlagged = false;
    cell.isOpen = true;
    if (cell.isBomb) {
      return; // gameover
    }

    // 周りにbombsがない場合、周辺まで開ける
    const bombsNum = this.countNeighborBombs(i, j);
    if (bombsNum == 0) {
      const positions = this.neighboarPositions(i, j);
      for (let k = 0; k < positions.length; k++) {
        const position = positions[k];
        this.turnAt(position.i, position.j);
      }
    }
  }

  // トグルでflagを立てる
  flagAt(i, j) {
    let cell = this.getAt(i, j);
    if (!cell.isOpen) {
      cell.isFlagged = !cell.isFlagged;
    }
  }

  // GameClear判定
  isGameclear() {
    const n = this.reduce((n, cell) => {
      if (cell.isBomb || cell.isOpen) {
        return n + 1;
      }
      return n;
    }, 0);
    // すべてのcellがOpened or Bombの場合、GameClear(trueを返却)
    return n == this.rows * this.cols;
  }

  // GameOver判定
  isGameover() {
    const f = this.reduce((f, cell) => {
      if (!f && cell.isOpen && cell.isBomb) {
        return true;
      }
      return f;
    }, false);
    return f;
  }

  // 全cellに対して実行する汎用集約関数
  reduce(callback, initialValue) {
    let result = initialValue;
    for (let j = 0; j < this.rows; j++) {
      for (let i = 0; i < this.cols; i++) {
        const cell = this.getAt(i, j);
        result = callback(result, cell);
      }
    }
    return result;
  }

});



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// defaultでexportすることで、名前はimport側でつける
/* harmony default export */ __webpack_exports__["a"] = (class {
    constructor(isBomb, isOpen, isFlagged) {
    this.isBomb = isBomb;
    this.isOpen = isOpen;
    this.isFlagged = isFlagged;
  }
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.defineInputListeners();
    this.startInputListeners();
  }

  setCanvasSize(width, height) {
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

  setActionListener(callback) {
    this.actionListener = callback;
  }

  // マウスクリック時のcallback
  defineInputListeners() {

    // 左クリック
    this.clicked = (e) => {
      const [i, j] = this.getPosition(e.layerX, e.layerY);
      if (i != null && j != null) {
        this.actionListener("clicked", [i, j]);
      }
    };

    // 右クリック
    this.contextmenu = (e) => {
      e.preventDefault(); // 右クリック時のdefault動作をキャンセルする
      const [i, j] = this.getPosition(e.layerX, e.layerY);
      if (i != null && j != null) {
        this.actionListener("rightClicked", [i, j]);
      }
    };
  }

  // マウスイベント取得開始
  startInputListeners() {
    this.isListening = true;
    this.canvas.addEventListener("click", this.clicked, false);
    this.canvas.addEventListener("contextmenu", this.contextmenu, false);
  }

  // マウスイベント取得停止
  stopInputListeners() {
    this.canvas.removeEventListener("click", this.clicked, false);
    this.canvas.removeEventListener("contextmenu", this.contextmenu, false);
    this.isListening = false;
  }

  // 座標から、マス位置を取得
  getPosition(x, y) {
    if (this.table == null) {
      return [null, null];
    }

    const cellWidth = this.width / this.table.cols;
    const cellHeight = this.height / this.table.rows;
    let i = Math.floor(x / cellWidth);
    let j = Math.floor(y / cellHeight);
    if (i >= this.table.cols) {
      i = null;
    }
    if (j >= this.table.rows) {
      j = null;
    }
    return [i, j];

    // let ii = null;
    // let jj = null;
    // const table = this.table;
    // const cols = this.table.cols;
    // const rows = this.table.rows;
    // for (let j = 0; j < rows; j++) {
    //   for (let i = 0; i < cols; i++) {
    //     if (this.width / cols * i <= x && this.height / rows * j <= y && x < this.width / cols * (i + 1) && y < this.height / rows * (j + 1)) {
    //       ii = i;
    //       jj = j;
    //       break;
    //     }
    //   }
    // }
    // return [ii, jj];
  }

  // 描画
  paint() {
    if (this.table == null) {
      return;
    }

    for (let j = 0; j < this.table.rows; j++) {
      for (let i = 0; i < this.table.cols; i++) {
        const cell = this.table.getAt(i, j);
        this.paintCell(cell, i, j);
      }
    }
  }

  // Cell 1個の描画
  paintCell(cell, i, j) {
    const ctx = this.context;
    const cellWidth = this.width / this.table.cols;
    const cellHeight = this.height / this.table.rows;
    const left = cellWidth * i;
    const top = cellHeight * j;
    const fontSize = Math.ceil(Math.min(cellWidth, cellHeight) * 0.8);
    let fill, stroke;
    let text = null;

    if (cell.isOpen) {
      fill = "rgb(255,200,200)";
      stroke = "rgb(0,0,255)";
      if (cell.isBomb) {
        text = "\u2620";
      } else {
        const n = this.table.countNeighborBombs(i, j);
        if (n > 0) {
          text = n;
        }
      }
    } else {
      fill = "rgb(255,255,255)";
      stroke = "rgb(0,0,255)";
      if (cell.isFlagged) {
        text = "\u2713";
      }
    }

    // マス描画
    ctx.fillStyle = fill;
    ctx.fillRect(left, top, cellWidth, cellHeight);
    ctx.StrokeStyle = stroke;
    ctx.strokeRect(left, top, cellWidth, cellHeight);

    // text描画
    if (text != null) {
      ctx.fillStyle = "rgb(50,50,50)";
      ctx.font = `$(fontSize)px Times New Roman`;
      ctx.textAligh = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, left + (cellWidth / 2), top + (cellHeight / 2));
    }

  }

});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const PANEL_WIDTH = 360;
/* harmony export (immutable) */ __webpack_exports__["c"] = PANEL_WIDTH;

const PANEL_HEIGHT = 300;
/* harmony export (immutable) */ __webpack_exports__["b"] = PANEL_HEIGHT;

const TABLE_COLS = 12;
/* harmony export (immutable) */ __webpack_exports__["d"] = TABLE_COLS;

const TABLE_ROWS = 10;
/* harmony export (immutable) */ __webpack_exports__["e"] = TABLE_ROWS;

const NUM_BOMBS = 8;
/* harmony export (immutable) */ __webpack_exports__["a"] = NUM_BOMBS;




/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map