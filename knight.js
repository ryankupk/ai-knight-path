class Knight {
    constructor(board) {
        this.board = board;
        this.x = Math.floor(Math.random() * 8);
        this.y = Math.floor(Math.random() * 8);
        this.fringe = [];
        this.closed = new Set();
    }
    show() {
        console.log(this.x, this.y);
    }
    
    getPath() {
        
    }
    
    getSuccessors() {
        
    }
}

/*
for (i = 0; i < board.cells.length; ++i) {
        for (j = 0; j < board.cells[i].length; ++j) {
            console.log(board.cells[i][j]);
        }
    }
    */