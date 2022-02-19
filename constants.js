const GAME_CLOCK = 1000 
const BLOCK_SIDE_LENGTH = 30
const ROWS = 20  //size of rows
const COLS = 10 //size of collums
const SCORE_WORTH = 100  //how many points we get when we hit on full line


//adding a 3d array with a 4x4,3x3,2x2 matrix to give the pieces their shapes by changing the values to 1 and 0
const SHAPES = [
    [],
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ], 

    [
        [2,0,0],
        [2,2,2],
        [0,0,0],
    ],

    [
        [0,0,3],
        [3,3,3],
        [0,0,0],
    ],

    [
        [4,4],
        [4,4],
    ],

    [
        [0,5,5],
        [5,5,0],
        [0,0,0],
    ],

    [
        [0,6,0],
        [6,6,6],
        [0,0,0],
    ],

    [
        [7,7,0],
        [0,7,7],
        [0,0,0],
    ],

]

const COLORS = [
    '#000000', //background
    'cyan',  //long one
    'orange', //the L one
    'blue', //reverse L one
    'yellow', //the block
    'green', // the z one
    'purple', //the T one
    'red' //reverse z one

]