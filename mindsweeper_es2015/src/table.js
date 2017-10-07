import Cell from "./cell";  // defaultでexportしたclassに、”Cell"という名前をつける

export default class {
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
        this.array[j * this.cols + i] = new Cell(false, false, false);
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

}

