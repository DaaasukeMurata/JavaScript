var canvas;
var ctx;
var nametbl = [
  "王", "飛", "角", "金", "銀", "桂", "香", "歩",
  "--", "竜", "馬", "--", "全", "圭", "杏", "と"
];
var x1 = [0, 1, 1, 1, 0, -1, -1, -1, 1, -1];    // xの移動量
var y1 = [-1, -1, 0, 1, 1, 1, 0, -1, -2, -2];   // yの移動量
// 移動できる位置。
var movtbl = [
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // 王
  [2, 0, 2, 0, 2, 0, 2, 0, 0, 0], // 飛
  [0, 2, 0, 2, 0, 2, 0, 2, 0, 0], // 角
  [1, 1, 1, 0, 1, 0, 1, 1, 0, 0], // 金
  [1, 1, 0, 1, 0, 1, 0, 1, 0, 0], // 銀
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1], // 桂
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 香
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 歩
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 1, 2, 1, 2, 1, 2, 1, 0, 0], // 竜
  [1, 2, 1, 2, 1, 2, 1, 2, 0, 0], // 馬
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 1, 1, 0, 0], // 全
  [1, 1, 1, 0, 1, 0, 1, 1, 0, 0], // 圭
  [1, 1, 1, 0, 1, 0, 1, 1, 0, 0], // 杏
  [1, 1, 1, 0, 1, 0, 1, 1, 0, 0], // と
];
// コマの初期配置
var setup = [
  [7, 7, 7, 7, 7, 7, 7, 7, 7],
  [-1, 2, -1, -1, -1, -1, -1, 1, -1],
  [6, 5, 4, 3, 0, 3, 4, 5, 6]
];
var fontcolor = ["black", "maroon"];
var boxcolor = ["LimeGreen", "gray", "blue", "red"];
var fillcolor = ["LimeGreen", "Khaki", "white", "LightPink"];
var psize = 32;                 // 1マスのサイズ
var board = [];                 // 将棋盤
var bw = 19, bh = 11;           // 将棋盤バッファのサイズ
var ofsx = 5, ofsy = 1;
var turn = 0;                   // 0:先手  1:後手
var startx = -1, starty = -1;   // 選択した座標
var username = ["ipad", "iphone", "android"]
var playtbl = ["先手", "後手"]

function piece() {
  this.id = -1;
  this.player = 0;
  this.movable = false;
}

function init() {
  canvas = document.getElementById("world");
  canvas.width = 640;
  canvas.height = 480;
  ctx = canvas.getContext("2d");
  ctx.font = "24px 'MSゴシック'";

  // スマホからの表示の場合、イベントをtoucheventにする。
  user = window.navigator.userAgent.toLowerCase();
  for (i = 0; i < username.length; i++) {
    if (user.indexOf(username[i]) > 0) break;
  }
  if (i < username.length) {
    document.addEventListener("touchstart", touchstart);
  } else {
    document.addEventListener("mousedown", mousedown);
  }

  // 11x19マスの将棋盤生成
  board = new Array(bh);
  for (y = 0; y < bh; y++) {
    board[y] = new Array(bw);
    for (x = 0; x < bw; x++) {
      board[y][x] = new piece();
    }
  }

  // コマの初期配置
  for (y = 0; y < 3; y++) {
    for (x = 0; x < 9; x++) {
      board[ofsy + y + 6][ofsx + x].id = setup[y][x];
      board[ofsy + y + 6][ofsx + x].player = 0;
      board[ofsy + 2 - y][ofsx + x].id = setup[y][x];
      board[ofsy + 2 - y][ofsx + x].player = 1;
    }
  }
  redraw();
}

function touchstart(e) {
  if (e.targetTouches.length == 1) {
    touch = e.tartgetTouches[0];
    touchpiece(touch.pageX, touch.pageY);
  }
}

function mousedown(e) {
  touchpiece(e.clientX, e.clientY);
}

function touchpiece(tx, ty) {
  cx = Math.floor((tx - 8) / psize);
  cy = Math.floor((ty - 8) / psize);

  // 範囲外は処理しない
  if (isinside(cx, cy, 0, 0, bw, bh) == false) return;

  if (startx == -1) {
    movestart(cx, cy);
  } else {
    moveend(cx, cy);
    startx = -1;
    starty = -1;
    redraw();
  }
}

function movestart(cx, cy) {
  id = board[cy][cx].id;
  player = board[cy][cx].player;

  // コマが存在しない時、相手の駒を選択したとき
  if (id == -1) return;
  if (player != turn) return;

  startx = cx;
  starty = cy;

  drawpiece(startx, starty, id, player, 2);

  // 持ち駒を選択したとき
  if (isinside(startx, starty, ofsx, ofsy, 9, 9) == false) {
    for (x = ofsx; x < ofsx + 9; x++) {

      // 2歩を判定
      pawn = 0;
      for (y = ofsy; y < ofsy + 9; y++) {
        if (id != 7) break; // 歩
        id2 = board[y][x].id;
        player2 = board[y][x].player;
        if ((player == player2) && (id2 == 7)) {
          pawn++;
        }
      }
      if (pawn > 0) continue;

      // 動けないマスでないか判定
      // 桂は2、香・歩は1マス空ける必要あり
      margin = [0, 0, 0, 0, 0, 2, 1, 1];
      flip = 1 - (player * 2);    // 先手は1, 後手は-1
      y = ofsy + (player * 8) + (margin[id] * flip);

      while (isinside(x, y, ofsx, ofsy, 9, 9) == true) {
        if (board[y][x].id == -1) { // コマがない場合
          drawpiece(x, y, -1, 0, 3);
          board[y][x].movable = true;
        }
        y += flip;
      }
    }
    return;
  }

  // 盤面のコマを選択した時
  for (dir = 0; dir < 10; dir++) {
    x = startx;
    y = starty;
    flip = 1 - (player * 2);

    while (movtbl[id][dir] > 0) {
      x += x1[dir];
      y += y1[dir] * flip;
      if (isinside(x, y, ofsx, ofsy, 9, 9) == false) break;
      id2 = board[y][x].id;
      player2 = board[y][x].player;
      // 自分のコマがある場合
      if ((id2 != -1) && (player2 == player)) break;
      drawpiece(x, y, id2, player2, 3);
      board[y][x].movable = true;
      // 移動量が1以上の移動のため、駒があれば抜ける
      if (id2 != -1) break;
      if (movtbl[id][dir] == 1) break;
    }
  }
}

function moveend(endx, endy) {
  if (board[endy][endx].movable == false) return;

  id = board[starty][startx].id;
  player = board[starty][startx].player;

  // コマがなる ならないの判定
  if (isinside(startx, starty, ofsx, ofsy, 9, 9) == true) {
    exist1 = isinside(startx, starty, ofsx, ofsy + 6 * player, 9, 3);
    exist2 = isinside(endx, endy, ofsx, ofsy + 6 * player, 9, 3);
    if ((exist1 == true) || (exist2 == true)) {
      if ((id < 8) && (nametbl[id | 8] != "--")) {
        if (confirm("成りますか？")) {
          board[starty][startx].id |= 8;
        }
      }
    }
  }

  // 相手のコマがある場合
  if (board[endy][endx].id != -1) {
    // 手札の秋場所を検索
    tx = (1 - player) * (bw - 3) + 1;   // playerは0 or 1
    ty = (1 - player) * (bh - 3) + 1;
    tx1 = (player * 2) - 1;
    ty1 = (player * 2) - 1;
    for (i = 0; i < 20; i++) {
      x = tx + (i % 3) * tx1;
      y = ty + Math.floor(i / 3) * ty1;
      if (board[y][x].id == -1) break;
    }
    board[y][x].id = board[endy][endx].id & 7;
    board[y][x].player = player;
  }

  // コマ移動
  board[endy][endx].id = board[starty][startx].id;
  board[endy][endx].player = board[starty][startx].player;
  board[starty][startx].id = -1;
  turn ^= 1;
}

// color 0:背景, 1:通常マス, 2:手持ち選択, 3:移動可能
function drawpiece(x, y, id, player, color) {
  px = x * psize;
  py = y * psize;
  ctx.fillStyle = boxcolor[color];
  ctx.fillRect(px, py, psize, psize);
  ctx.fillStyle = fillcolor[color];
  ctx.fillRect(px + 1, py + 1, psize - 2, psize - 2);

  if (id == -1) return;

  // コマの描画
  ctx.fillStyle = fontcolor[(id >> 3) & 1];
  if (player == 1) {
    px = -px - psize;
    py = -py - psize;
    ctx.rotate(Math.PI);
  }
  ctx.fillText(nametbl[id], px + 4, py + 24, 300);
  if (player == 1) {
    ctx.rotate(Math.PI);
  }
}

function isinside(x, y, ax, ay, w, h) {
  if ((x < ax) || (x >= ax + w) || (y < ay) || (y >= ay + h)) {
    return false;
  } else {
    return true;
  }
}

function redraw() {
  for (y = 0; y < bh; y++) {
    for (x = 0; x < bw; x++) {
      if (isinside(x, y, ofsx, ofsy, 9, 9)) {
        c = 1;  // color
      } else {
        c = 0;
      }
      id = board[y][x].id;
      player = board[y][x].player;
      drawpiece(x, y, id, player, c);
      board[y][x].movable = false;
    }
  }
  ctx.fillStyle = fontcolor[0];
  ctx.fillText(playtbl[turn], 280, (1 - turn) * 318 + 26, 300);
}


