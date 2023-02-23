let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
let [N, M] = input.shift().split(' ').map(n => Number(n))
let board = []
for(let i = 0; i < N; i++){
    let line = input.shift().split('');
    board.push(line)
}

let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW']
let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']

let answer = 64;
for(let i = 0; i <= N - 8; i++){
    for(let j = 0; j <= M - 8; j++){
        check(j, i)
    }
}

function check(x, y){
    let checkWhite = 0;
    let checkBlack = 0;
    for(let i = y; i < y + 8; i++){
        for(let j = x; j < x + 8; j++){
            if(board[i][j] !== white[i-y][j-x]){
                checkWhite++;
            }
            if(board[i][j] !== black[i-y][j-x]){
                checkBlack++; 
            }
        }
    }
    let min = checkBlack < checkWhite ? checkBlack : checkWhite
    
    if(min < answer){
        answer = min
    }
}

console.log(answer)
