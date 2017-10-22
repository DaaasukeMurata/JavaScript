import pieceId from "./piece_id.js";
import pieceNameTable from "./piece_name.js";

export default class Piece {
  constructor(id) {
    this.id = id;
    this.name = pieceNameTable[id];
  }
}

