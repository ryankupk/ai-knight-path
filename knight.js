class Knight {
    constructor(board, x = Math.floor(Math.random() * this.board.length), y = Math.floor(Math.random() * this.board.length)) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.fringe = [];
        this.visited = [];
        this.boardSize = this.board.cells.length * this.board.cells[0].length;
        this.moves = [
            //y   x     2 sq  1 sq
            [ 2,  1], //down  right
            [ 2, -1], //down  left
            [ 1, -2], //left  down
            [-1, -2], //left  up
            [-2, -1], //up    left
            [-2,  1], //up    right
            [-1,  2], //right up
            [ 1,  2]  //right down
        ]
    }
    show() {
        
    }
    
    getPath() { //generate path using depth first search
        let path = [];
        this.fringe.push(new Node(this.x, this.y, 0, undefined));
        while (this.fringe.length > 0) {
            let cur = this.fringe.pop();
            if (this.boardSize % 2 == 1 && cur.depth == this.boardSize - 1) {
                while (cur !== undefined) {
                    path.unshift(cur);
                    cur = cur.parent;
                }
                return path;
            }
            else if (this.boardSize % 2 == 0 && cur.depth === this.boardSize) {
                while (cur !== undefined) {
                    path.unshift(cur);
                    cur = cur.parent;
                }
                return path;
            }
            let visited = false;
            for (let i = 0; i < this.visited.length; ++i) {
                if (cur.x === this.visited[i][0] && cur.y === this.visited[i][1]) {
                    visited = true;
                    break;
                }
            }
            if (!visited) {
                let xy = [cur.x, cur.y];
                this.visited.push(xy);
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
            let newx = cur.x + this.moves[i][1];
            let newy = cur.y + this.moves[i][0];
            if (!((newx < this.board.cells[0].length && newx >= 0) && (newy < this.board.cells.length && newy >= 0))) {
                continue;
            }
            
            successors.push(new Node(newx, newy, cur.depth + 1, cur));
            
        }
        return successors;
    }
}