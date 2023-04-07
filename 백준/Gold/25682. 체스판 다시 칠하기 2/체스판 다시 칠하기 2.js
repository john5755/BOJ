let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [N, M, K] = input.shift().split(' ').map(n => Number(n));

let chess = input.map(m => m.split(''));

let sumsWhite = Array.from({length: N + 1}, () => new Array(M + 1).fill(0));
let sumsBlack = Array.from({length: N + 1}, () => new Array(M + 1).fill(0));

let flag = 1;
for(let i = 0; i < N; i++){
    for(let j = 0; j < M; j++){
        if(flag === 1){
            if(chess[i][j] === 'W'){
                sumsWhite[i+1][j+1] = sumsWhite[i+1][j] + sumsWhite[i][j+1] - sumsWhite[i][j] + 1;
                sumsBlack[i+1][j+1] = sumsBlack[i+1][j] + sumsBlack[i][j+1] - sumsBlack[i][j];
            } else{
                sumsWhite[i+1][j+1] = sumsWhite[i+1][j] + sumsWhite[i][j+1] - sumsWhite[i][j];
                sumsBlack[i+1][j+1] = sumsBlack[i+1][j] + sumsBlack[i][j+1] - sumsBlack[i][j] + 1;
            }
        }
        else{
            if(chess[i][j] === 'B'){
                sumsWhite[i+1][j+1] = sumsWhite[i+1][j] + sumsWhite[i][j+1] - sumsWhite[i][j] + 1;
                sumsBlack[i+1][j+1] = sumsBlack[i+1][j] + sumsBlack[i][j+1] - sumsBlack[i][j];
            } else{
                sumsWhite[i+1][j+1] = sumsWhite[i+1][j] + sumsWhite[i][j+1] - sumsWhite[i][j];
                sumsBlack[i+1][j+1] = sumsBlack[i+1][j] + sumsBlack[i][j+1] - sumsBlack[i][j] + 1;
            }
        }
        flag *= -1;
        }
    if(M % 2 === 0){
        flag *= -1;
    }
    }

let min = K * K;
for(let i = K; i <= N; i++){
    for(let j = K; j <= M; j++){
        let tempWhite = sumsWhite[i][j] - sumsWhite[i][j-K] - sumsWhite[i-K][j] + sumsWhite[i-K][j-K];
        let tempBlack = sumsBlack[i][j] - sumsBlack[i][j-K] - sumsBlack[i-K][j] + sumsBlack[i-K][j-K];
        min = Math.min(tempWhite, tempBlack, min);
    }
}

console.log(min);