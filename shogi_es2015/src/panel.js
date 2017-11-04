import Table from "./table";

export default class Panel {
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
    for (let x = 0; x < Table.COLS; x++) {
      for (let y = 0; y < Table.ROWS; y++) {
        this.paintCell(this.table.cells[x][y], x, y);
      }
    }
  }

  paintCell(cell, x, y) {
    const cellWidth = this.width / Table.COLS;
    const cellHeight = this.height / Table.ROWS;

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

}