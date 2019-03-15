class Knight {
    constructor(board, x, y) {
        //initialize board object for knight
        this.board = board;
        //(x,y) coordinates of knight
        this.x = x;
        this.y = y;
        //fringe/frontier/whatever
        //it's a stack
        this.fringe = [];
        //list of visited states
        this.visited = [];
        //number of squares in board
        this.boardSize = this.board.cells.length * this.board.cells[0].length;
        //possible moves from any position
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
    
    getPath() { //generate path using depth first search
        //push initial state onto fringe
        this.fringe.push(new Node(this.x, this.y, 0, undefined));
        while (this.fringe.length > 0) {
            //pop top of stack
            let cur = this.fringe.pop();
            //if board is oddXodd dimensions, goal state is #squares - 1
            if (this.boardSize % 2 == 1 && cur.depth == this.boardSize - 1) {
                return this.generatePath(cur);
            }
            //if board is evenXeven or evenXodd, goal state is #squares
            else if (this.boardSize % 2 == 0 && cur.depth === this.boardSize) {
                return this.generatePath(cur);
            }
            //check if current state has been visited
            let visited = false;
            for (let i = 0; i < this.visited.length; ++i) {
                if (cur.x === this.visited[i][0] && cur.y === this.visited[i][1]) {
                    visited = true;
                    break;
                }
            }
            if (!visited) {
                //if the state has not been visited, push the state onto the visited list
                let xy = [cur.x, cur.y];
                this.visited.push(xy);
                //generate successors
                let successors = this.getSuccessors(cur);
                for (let i = 0; i < successors.length; ++i) {
                    //push each successor onto the fringe
                    this.fringe.push(successors[i]);
                }
            }
        }
    }
    
    generatePath(node) {
        path = [];
        while (node !== undefined) {
            //push node onto front of path, change node to parent
            path.unshift(node);
            node = node.parent;
        }
        return path;
    }
    
    getSuccessors(cur) {
        let successors = [];
        for (let i = 0; i < this.moves.length; ++i) {
            //newx/newy is currentx/currenty + the x and y of each possible move
            let newx = cur.x + this.moves[i][1];
            let newy = cur.y + this.moves[i][0];
            //if the move goes off the board, it's invalid, continue
            if (!((newx < this.board.cells[0].length && newx >= 0) && (newy < this.board.cells.length && newy >= 0))) {
                continue;
            }
            //if the move does not go off the board, push it onto successors list
            successors.push(new Node(newx, newy, cur.depth + 1, cur));
        }
        return successors;
    }
}