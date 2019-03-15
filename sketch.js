let board = new Board();
let knight = new Knight(board, 2, 0);
let path;

function setup() {
    createCanvas(innerWidth - (.2 * innerWidth), innerHeight - (.2 * innerHeight));
    //generate path
    path = knight.getPath();
    //slow down framerate so path visualization can be seen
    frameRate(2);
}

function draw() {
    background(255);
    board.show();
    //if there are nodes in the path, modify board each frame
    if (path.length > 0) {
        board.addPoint(path[0]);
        path.shift();
    }
}