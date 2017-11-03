import * as pieceVal from "./piece_value.js";

export default class Piece {
  constructor(id) {
    this.id = pieceVal.id[id];
    this.name = pieceVal.name[id];
    this.movables = pieceVal.movables[id];
  }
}

const piece = new Piece("OU");
console.log("piece.id : ", piece.id);
console.log("piece.name :", piece.name);
console.log("piece.movable :", piece.movable);

for (let move of piece.movables){
  console.log(move);
}
