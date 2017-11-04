import Table from "./table";
import Panel from "./panel";
import * as Values from "./values";

class Shogi {
  constructor() {
    const canvas = document.getElementById("canvas");
    this.panel = new Panel(canvas, Values.PANEL_WIDTH, Values.PANEL_HEIGHT);
    this.table = null;
  }

  startGame() {
    this.table = new Table();
    this.panel.setTable(this.table);
    this.panel.paint();
  }
}

const shogi = new Shogi();
shogi.startGame();