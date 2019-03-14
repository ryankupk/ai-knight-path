let board = new Board();
let knight = new Knight(board);

function setup() {
  createCanvas(innerWidth - (.2 * innerWidth), innerHeight - (.2 * innerHeight));
    let path = knight.getPath();
    console.log(path);
}

function draw() {
    background(255);
    board.show();
    knight.show();
    noLoop();
}