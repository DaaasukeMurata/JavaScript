// defaultでexportすることで、名前はimport側でつける
// export default class {
export class Cell{
    constructor(isBomb, isOpen, isFlagged) {
    this.isBomb = isBomb;
    this.isOpen = isOpen;
    this.isFlagged = isFlagged;
  }
}
