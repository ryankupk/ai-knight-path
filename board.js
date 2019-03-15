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
        this.x = 0;
        this.y = 0;
        this.w = 60;
    }
    
    show() {
        //(x,y) coordinates and width of squares
        let x = this.x;
        let y = this.y;
        let w = this.w;
        let dark = true;
        //color of square
        let sColor;
        for (let i = 0; i < board.cells.length; ++i) {
            for (let j = 0; j < board.cells[i].length; ++j) {
                //set background color for a square based on dark boolean
                sColor = !dark ? 60 : 255;
                fill(sColor);
                //draw square
                rect(x, y, w, w);
                //move to the next square
                x += w;
                //change from dark to light or light to dark
                dark = !dark;
            }
            //go back to far left of canvas
            x = 0;
            //move down one row
            y += this.w;
            //if there are an even number of squares in the rows, dark must be toggled
            dark = this.cells[0].length % 2 === 0 ? !dark : dark;
        }
    }
    addPoint(node) {
        //change the squares in the knight's path to 1 so a circle can be added
        this.cells[node.y][node.x] = 1;
    }
    
}