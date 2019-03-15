let board = new Board();
let knight = new Knight(board, 1, 3);
let path;
let pathLength;
let index = 0;
let circles = [];
let lines = [];

function setup() {
    createCanvas(board.cells[0].length* board.w + 2, board.cells.length * board.w + 2);
    //generate path
    path = knight.getPath();
    pathLength = path.length;
    for (let i = 0; i < pathLength; ++i) {
        board.addPoint(path[0]);
        circles.push(new Circle(board, path[0].x, path[0].y, i, pathLength));
        lines.push(new Line(board, path[0].x, path[0].y));
        path.shift();
    }
    //slow down framerate so path visualization can be seen
    frameRate(1);
}

function draw() {
    background(255);
    board.show();
    
    for (let i = 0; i < index; ++i) {
        circles[i].show();
    }
    beginShape(LINES);
    for (let i = 0; i < index; ++i) {
        lines[i].show();
        if (i > 0) {
            lines[i].show();
        }
    }
    endShape();
    index = (index + 1) % pathLength;
}