let board = new Board();
let knight = new Knight(board, 0, 0);
let path;
let pathLength;
let index = 0;
let circles = [];

function setup() {
    createCanvas(innerWidth - (.2 * innerWidth), innerHeight - (.2 * innerHeight));
    //generate path
    path = knight.getPath();
    pathLength = path.length;
    for (let i = 0; i < pathLength; ++i) {
        board.addPoint(path[0]);
        circles.push(new Circle(board, path[0].x, path[0].y, i, pathLength));
        path.shift();
    }
    //slow down framerate so path visualization can be seen
    frameRate(2);
}

function draw() {
    background(255);
    board.show();
    for (let i = 0; i < index; ++i) {
        circles[i].show();
    }
    index = (index + 1) % pathLength;
}