class Line {
    constructor(board, x, y) {
        //position is width of each square multiplied by the number of squares over plus half of 1 square width
        this.posx = board.w * x + board.w / 2;
        this.posy = board.w * y + board.w / 2;
    }
    show() {
        //return a vertex for the position of where the line should go
        return vertex(this.posx, this.posy);
    }
}