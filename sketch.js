var board = new Board();

function setup() {
  createCanvas(innerWidth - (.2 * innerWidth), innerHeight - (.2 * innerHeight));
}

function draw() {
    background(255);
    for (i = 0; i < board.cells.length - 1; ++i) {
        for (j = 0; j < board.cells[i].length - 2; ++i) {
            console.log(board.cells[i][j]);
        }
    }
    noLoop();
}