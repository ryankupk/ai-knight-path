class Board {
    constructor() {
//        this.cells = [
//        [0,0,0,0,0,0,0,0],
//        [0,0,0,0,0,0,0,0],
//        [0,0,0,0,0,0,0,0],
//        [0,0,0,0,0,0,0,0],
//        [0,0,0,0,0,0,0,0],
//        [0,0,0,0,0,0,0,0],
//        [0,0,0,0,0,0,0,0],
//        [0,0,0,0,0,0,0,0]
//    ];
//        this.cells = [
//            [0,0,0,0,0,0],
//            [0,0,0,0,0,0],
//            [0,0,0,0,0,0],
//            [0,0,0,0,0,0],
//            [0,0,0,0,0,0],
//            [0,0,0,0,0,0]
//    ];
        this.cells = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
    ];
    }
    
    show() {
        //(x,y) coordinates and width of squares/circles
        let x = 0;
        let y = 0;
        let w = 30;
        let dark = true;
        let color;
        for (let i = 0; i < board.cells.length; ++i) {
            for (let j = 0; j < board.cells[i].length; ++j) {
                //set background color for a square based on dark boolean
                color = !dark ? 60 : 255;
                fill(color);
                //draw square
                rect(x, y, w, w);
                //if the current cell is one that has been visited by the knight, put a red circle in it
                if (this.cells[i][j] === 1) {
                    fill(255,0,0);
                    noStroke();
                    ellipse(x + w/2, y + w/2, w/2, w/2);
                    fill(color);
                    stroke(0);
                }
                //move to the next square
                x += w;
                //change from dark to light or light to dark
                dark = !dark;
            }
            //go back to far left of canvas
            x = 0;
            //move down one row
            y += w;
            //if there are an even number of squares in the rows, dark must be toggled
            dark = this.cells[0].length % 2 === 0 ? !dark : dark;
        }
    }
    addPoint(node) {
        //change the squares in the knight's path to 1 so a circle can be added
        this.cells[node.y][node.x] = 1;
    }
    
}