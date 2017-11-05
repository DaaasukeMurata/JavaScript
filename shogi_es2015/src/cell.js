export const CELL_STATE_IDLE = 0;
export const CELL_STATE_SELECTED = 1;
export const CELL_STATE_MOVABLE = 2;

export class Cell {
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
