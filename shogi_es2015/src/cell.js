export default class Cell {
  constructor(piece){
    this.setPiece(piece);
  }

  // 駒を配置。取り除くときはnullで指定
  setPiece(piece){
    this.piece = piece;
  }

  get hasPiece(){
    if(this.piece == null){
      return 0;
    } else {
      return 1;
    }
  }

}
