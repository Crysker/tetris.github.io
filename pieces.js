class Piece {//code for the falling piece where we need the shape and also coordinates
    constructor(shape, context) {
        this.shape = shape 
        this.context = context 
        this.y = 0 
        this.x = Math.floor(COLS / 2)
    }

    renderPiece() {//drawing the piece on the canvas and colloring them + filling the 1 with the color
        this.shape.map((row, i) => {//map calls the callbackfunction of the elements in the array
            row.map((cell, j) => {
                if (cell > 0) {//basically saying if the value in our matrix is bigger than 0 fill them with a color
                    this.context.fillStyle = COLORS[cell] 
                    this.context.fillRect(this.x + j, this.y + i, 1, 1)
                }
            })
        })
    }
}