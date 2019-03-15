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
        this.visited = 0;
    }
    
    show() {
        let x = 0;
        let y = 0;
        let w = 30;
        let dark = true;
        let color;
        for (let i = 0; i < board.cells.length; ++i) {
            for (let j = 0; j < board.cells[i].length; ++j) {
                color = !dark ? 60 : 255;
                fill(color);
                rect(x, y, w, w);
                if (this.cells[i][j] === 1) {
                    fill(255,0,0);
                    noStroke();
                    ellipse(x + w/2, y + w/2, w/2, w/2);
                    fill(color);
                    stroke(0);
                }
                x += w;
                dark = !dark;
            }
            x = 0;
            y += w;
            dark = this.cells[0].length % 2 === 0 ? !dark : dark;
        }
    }
    addPoint(node) {
        this.cells[node.y][node.x] = 1;
    }
    
}