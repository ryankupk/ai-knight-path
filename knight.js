class Knight {
    constructor(board) {
        this.board = board;
        this.x = Math.floor(Math.random() * 8);
        this.y = Math.floor(Math.random() * 8);
        this.fringe = [];
        this.closed = new Set();
        this.moves = [
            //          2 sq  1 sq
            [ 2,  1], //down  right
            [ 2, -1], //down  left
            [ 1, -2], //left  down
            [-1, -2], //left  up
            [-2, -1], //up    left
            [-2,  1], //up    right
            [-1,  2], //right up
            [-1,  2]  //right down
        ]
    }
    show() {
        
    }
    
    getPath() { //generate path using depth first search
        let path = [];
        this.fringe.push(new Node(this.x, this.y, 0));
        while (this.fringe.length > 0) {
            let cur = this.fringe.pop();
            if (cur.depth === 64) {
                while (cur.parent !== 0) {
                    path.unshift(cur);
                    cur = cur.parent;
                }
                console.log("done");
                return path;
            }
            if (!this.closed.has(cur)) {
                this.closed.add(cur);
                let successors = this.getSuccessors(cur);
                for (let i = 0; i < successors.length; ++i) {
                    this.fringe.push(successors[i]);
                }
            }
        }
    }
    
    getSuccessors(cur) {
        let successors = [];
        for (let i = 0; i < this.moves.length; ++i) {
            let newx;
            let newy;
            if ((cur.x + this.moves[i][1] < 7 && cur.x + this.moves[i][1] > 0) && (cur.y + this.moves[i][0] < 7 && cur.y + this.moves[i][0] > 0)) {
                newx = cur.x + this.moves[i][1];
                newy = cur.y + this.moves[i][0];
            }
            if (newx !== undefined && newy !== undefined) {
                successors.push(new Node(newx, newy, cur));
            }
        }
        return successors;
    }
}

/*
for (i = 0; i < board.cells.length; ++i) {
        for (j = 0; j < board.cells[i].length; ++j) {
            console.log(board.cells[i][j]);
        }
    }
    */