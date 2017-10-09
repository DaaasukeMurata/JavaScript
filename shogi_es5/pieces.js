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
var fillcolor = ["white", "LightPink", "fuchsia"];
var psize = 20;

function init() {
  canvas = document.getElementById("world");
  canvas.width = 800;
  canvas.height = 600;
  ctx = canvas.getContext('2d');
  ctx.font = "16px 'MSゴシック'";
  for (id = 0; id < 16; id++) {
    cx = (id % 8) * 4 + 2;
    cy = Math.floor(id / 8) * 6 + 2;
    movepiece(cx, cy, id);
  }
}

function movepiece(startx, starty, id) {
  ctx.fillStyle = "Khaki";
  ctx.fillRect(startx * psize, starty * psize, psize - 2, psize - 2);
  ctx.fillStyle = "black";
  ctx.fillText(nametbl[id], startx * psize + 2, starty * psize + 16, 300);
  for (dir = 0; dir < 10; dir++) {
    x = startx + x1[dir];
    y = starty + y1[dir];
    ctx.fillStyle = fillcolor[movtbl[id][dir]];
    ctx.fillRect(x * psize, y * psize, psize - 2, psize - 2);
  }
}

