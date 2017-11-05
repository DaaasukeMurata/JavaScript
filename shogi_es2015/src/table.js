import { Cell, CELL_STATE_IDLE, CELL_STATE_SELECTED, CELL_STATE_MOVABLE } from "./cell";
import { Piece, PIECE_ORDER_GOTE, PIECE_ORDER_SENTE } from "./piece";

export default class Table {

  constructor() {
    this.cells = [];
    for (let x = 0; x < Table.COLS; x++) {
      this.cells[x] = [];
      for (let y = 0; y < Table.ROWS; y++) {
        this.cells[x][y] = new Cell(null);
      }
    }
    this.init();
  }

  // 初期配置
  init() {
    this.cells[0][0].setPiece(new Piece("KYO", PIECE_ORDER_GOTE));
    this.cells[1][0].setPiece(new Piece("KEI", PIECE_ORDER_GOTE));
    this.cells[2][0].setPiece(new Piece("GIN", PIECE_ORDER_GOTE));
    this.cells[3][0].setPiece(new Piece("KIN", PIECE_ORDER_GOTE));
    this.cells[4][0].setPiece(new Piece("OU", PIECE_ORDER_GOTE));
    this.cells[5][0].setPiece(new Piece("KIN", PIECE_ORDER_GOTE));
    this.cells[6][0].setPiece(new Piece("GIN", PIECE_ORDER_GOTE));
    this.cells[7][0].setPiece(new Piece("KEI", PIECE_ORDER_GOTE));
    this.cells[8][0].setPiece(new Piece("KYO", PIECE_ORDER_GOTE));

    this.cells[1][1].setPiece(new Piece("HI", PIECE_ORDER_GOTE));
    this.cells[7][1].setPiece(new Piece("KAKU", PIECE_ORDER_GOTE));

    this.cells[0][2].setPiece(new Piece("FU", PIECE_ORDER_GOTE));
    this.cells[1][2].setPiece(new Piece("FU", PIECE_ORDER_GOTE));
    this.cells[2][2].setPiece(new Piece("FU", PIECE_ORDER_GOTE));
    this.cells[3][2].setPiece(new Piece("FU", PIECE_ORDER_GOTE));
    this.cells[4][2].setPiece(new Piece("FU", PIECE_ORDER_GOTE));
    this.cells[5][2].setPiece(new Piece("FU", PIECE_ORDER_GOTE));
    this.cells[6][2].setPiece(new Piece("FU", PIECE_ORDER_GOTE));
    this.cells[7][2].setPiece(new Piece("FU", PIECE_ORDER_GOTE));
    this.cells[8][2].setPiece(new Piece("FU", PIECE_ORDER_GOTE));

    this.cells[0][6].setPiece(new Piece("FU", PIECE_ORDER_SENTE));
    this.cells[1][6].setPiece(new Piece("FU", PIECE_ORDER_SENTE));
    this.cells[2][6].setPiece(new Piece("FU", PIECE_ORDER_SENTE));
    this.cells[3][6].setPiece(new Piece("FU", PIECE_ORDER_SENTE));
    this.cells[4][6].setPiece(new Piece("FU", PIECE_ORDER_SENTE));
    this.cells[5][6].setPiece(new Piece("FU", PIECE_ORDER_SENTE));
    this.cells[6][6].setPiece(new Piece("FU", PIECE_ORDER_SENTE));
    this.cells[7][6].setPiece(new Piece("FU", PIECE_ORDER_SENTE));
    this.cells[8][6].setPiece(new Piece("FU", PIECE_ORDER_SENTE));

    this.cells[1][7].setPiece(new Piece("KAKU", PIECE_ORDER_SENTE));
    this.cells[7][7].setPiece(new Piece("HI", PIECE_ORDER_SENTE));

    this.cells[0][8].setPiece(new Piece("KYO", PIECE_ORDER_SENTE));
    this.cells[1][8].setPiece(new Piece("KEI", PIECE_ORDER_SENTE));
    this.cells[2][8].setPiece(new Piece("GIN", PIECE_ORDER_SENTE));
    this.cells[3][8].setPiece(new Piece("KIN", PIECE_ORDER_SENTE));
    this.cells[4][8].setPiece(new Piece("OU", PIECE_ORDER_SENTE));
    this.cells[5][8].setPiece(new Piece("KIN", PIECE_ORDER_SENTE));
    this.cells[6][8].setPiece(new Piece("GIN", PIECE_ORDER_SENTE));
    this.cells[7][8].setPiece(new Piece("KEI", PIECE_ORDER_SENTE));
    this.cells[8][8].setPiece(new Piece("KYO", PIECE_ORDER_SENTE));
  }

  static get COLS() {
    return 9;
  }

  static get ROWS() {
    return 9;
  }

}

// let table = new Table();
// console.log(table);
