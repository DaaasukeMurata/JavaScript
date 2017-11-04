export const idTable = {
  OU: Symbol(),
  HI: Symbol(),
  KAKU: Symbol(),
  KIN: Symbol(),
  GIN: Symbol(),
  KEI: Symbol(),
  KYO: Symbol(),
  HU: Symbol(),
  RYU: Symbol(),
  UMA: Symbol(),
  NARI_GIN: Symbol(),
  NARI_KEI: Symbol(),
  NARI_KYO: Symbol(),
  NARI_FU: Symbol()
};

export const nameTable = {
  OU: "王",
  HI: "飛",
  KAKU: "角",
  KIN: "金",
  GIN: "銀",
  KEI: "桂",
  KYO: "香",
  FU: "歩",
  RYU: "竜",
  UMA: "馬",
  NARI_GIN: "全",
  NARI_KEI: "圭",
  NARI_KYO: "杏",
  NARI_FU: "と"
};

// [x, y, continuous]
export const movablesTable = {
  OU: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [-1, 1, 0], [-1, 0, 0], [-1, -1, 0]],
  HI: [[0, -1, 1], [1, 0, 1], [0, 1, 1], [-1, 0, 1]],
  KAKU: [[1, -1, 1], [1, 1, 1], [-1, 1, 1], [-1, -1, 1]],
  KIN: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 1, 0], [-1, 0, 0], [-1, -1, 0]],
  GIN: [[0, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0], [-1, -1, 0]],
  KEI: [[1, -2, 0], [-1, -2, 0]],
  KYO: [[0, -1, 1]],
  FU: [[0, -1, 0]],
  RYU: [[0, -1, 1], [1, -1, 0], [1, 0, 1], [1, 1, 0], [0, 1, 1], [-1, 1, 0], [-1, 0, 1], [-1, -1, 0]],
  UMA: [[0, -1, 0], [1, -1, 1], [1, 0, 0], [1, 1, 1], [0, 1, 0], [-1, 1, 1], [-1, 0, 0], [-1, -1, 1]],
  NARI_GIN: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 1, 0], [-1, 0, 0], [-1, -1, 0]],
  NARI_KEI: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 1, 0], [-1, 0, 0], [-1, -1, 0]],
  NARI_KYO: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 1, 0], [-1, 0, 0], [-1, -1, 0]],
  NARI_FU: [[0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 1, 0], [-1, 0, 0], [-1, -1, 0]]
};

// 成れるか
export const promoteTable = {
  OU: 0,
  HI: 1,
  KAKU: 1,
  KIN: 0,
  GIN: 1,
  KEI: 1,
  KYO: 1,
  FU: 1,
  RYU: 0,
  UMA: 0,
  NARI_GIN: 0,
  NARI_KEI: 0,
  NARI_KYO: 0,
  NARI_FU: 0
};


export default class Piece {

  constructor(id, order) {
    this.id = idTable[id];
    this.name = nameTable[id];
    this.movables = movablesTable[id];
    this.canPromote = promoteTable[id];
    this.order = order;
  }

  // 成る
  promote() {
    let promoted_id;

    if (!this.canPromote)
      return;

    switch (this.id) {
      case idTable["HI"]:
        promoted_id = "RYU";
        break;
      case idTable["KAKU"]:
        promoted_id = "UMA";
        break;
      case idTable["GIN"]:
        promoted_id = "NARI_GIN";
        break;
      case idTable["KEI"]:
        promoted_id = "NARI_KEI";
        break;
      case idTable["KYO"]:
        promoted_id = "NARI_KYO";
        break;
      case idTable["FU"]:
        promoted_id = "NARI_FU";
        break;
    }
    this.id = idTable[promoted_id];
    this.name = nameTable[promoted_id];
    this.movables = movablesTable[promoted_id];
    this.canPromote = promoteTable[promoted_id];
  }
}

