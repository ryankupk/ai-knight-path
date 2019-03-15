class Line {
    constructor(board, x, y) {
        this.posx = board.w * x + board.w / 2;
        this.posy = board.w * y + board.w / 2;
    }
    show() {
        return vertex(this.posx, this.posy);
    }
}