export default class {
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

}