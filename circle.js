class Circle {
    constructor(board, x, y, index, length) {
        this.c = map(index, 0, length-1, 0, 255);
        this.xpos = board.w * x + board.w / 2;
        this.ypos = board.w * y + board.w / 2;
        this.board = board;
    }
    
    show() {
        colorMode(HSB);
        fill(this.c, 100, 100);
        noStroke();
        ellipse(this.xpos, this.ypos, this.board.w / 2, this.board.w / 2);
        stroke(0);
        colorMode(RGB);
    }
}