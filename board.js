class Board {
    constructor() {
        this.cells = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ];
    }
    
    show() {
        let x = 0;
        let y = 0;
        let w = 30;
        let dark = true;
        let color = 255;
        for (let i = 0; i < board.cells.length; ++i) {
        for (let j = 0; j < board.cells[i].length; ++j) {
            color = !dark ? 0 : 255;
            fill(color);
            rect(x, y, w, w);
            x += w;
            dark = !dark;
        }
            x = 0;
            y += w;
            dark = !dark;
    }
    }
    
}