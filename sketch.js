let board = new Board();
let knight = new Knight(board, 2, 0);
let path;

function setup() {
  createCanvas(innerWidth - (.2 * innerWidth), innerHeight - (.2 * innerHeight));
    path = knight.getPath();
    console.log(path);
    frameRate(2);
}

function draw() {
    background(255);
    board.show();
    if (path.length > 0) {
        board.addPoint(path[0]);
    }
    path.shift();
//    noLoop();
}