// setup 

let canvas = document.getElementById("canvas") 
let scoreboard = document.getElementById("scoreboard") 
let context = canvas.getContext("2d") 
context.scale(BLOCK_SIDE_LENGTH, BLOCK_SIDE_LENGTH) 
let model = new GameModel(context)

let score = 0 

let game_overSound = new Audio('./assets/game_over.mp3')
let background_music = new Audio('./assets/music_by_serkan.mp3');
let hit = new Audio('./assets/tetris_hit.mp3');

setInterval(() => {
    newGameState()
}, GAME_CLOCK); 



let newGameState = () => {
    fullSend() 

    background_music.play();
    if (model.fallingPiece === null) {
        const rand = Math.round(Math.random() * 6) + 1
        const newPiece = new Piece(SHAPES[rand], context) 
        model.fallingPiece = newPiece 
        model.moveDown()
    } else {
        model.moveDown()
    }
}
//checking the rows and also deleting them when we get a full line + giving points
const fullSend = () => {
    const allFilled = (row) => {
        for (let x of row) {
            if (x === 0) {
                return false
            }
        }
        return true
    }

    for (let i = 0; i < model.grid.length; i++) {
        if (allFilled(model.grid[i])) {
            hit.play();
            score += SCORE_WORTH 
            model.grid.splice(i, 1) 
            model.grid.unshift([0,0,0,0,0,0,0,0,0,0])
        }
    }

    scoreboard.innerHTML = "Your Score: " + String(score)
}


//adding eventlisteners for the keys where the player can move the pieces
document.addEventListener("keydown", (e) => {
    e.preventDefault() 
    switch(e.key) {
        case "ArrowUp":
            model.rotate() 
            break 
        case "ArrowRight":
            model.move(true) 
            break 
        case "ArrowDown": 
            model.moveDown() 
            break 
        case "ArrowLeft":
            model.move(false) 
            break
            case "Escape":
                location.replace('./index.html');
                break
            
    }
})