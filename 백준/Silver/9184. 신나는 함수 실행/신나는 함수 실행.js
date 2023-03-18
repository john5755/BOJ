let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(m => Number(m)));

let N = input.length - 1;
let memo = [];
for(let i = 0; i < 51; i++){
    memo[i] = [];
    for(let j = 0; j < 51; j++){
        memo[i][j] = [];
        for(let k = 0; k < 51; k++){
            memo[i][j][k] = 0;
        }
    }
}

memo[0][0][0] = 1;

function w(a, b, c){
    if(a <= 0 || b <= 0 || c <= 0){
        return 1;
    }    
    else if(memo[a][b][c] !== 0){
        return memo[a][b][c];
    }
    else if(a > 20 || b > 20 || c > 20){
        memo[a][b][c] = w(20, 20, 20);
    }
    else if(a < b && b < c){
        memo[a][b][c] = w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c);
    } else {
        memo[a][b][c] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1);
    };
    return memo[a][b][c];
}

function printW(a, b, c){
    let d = w(a, b, c);
    return `w(${a}, ${b}, ${c}) = ${d}`
};

for(let i = 0; i < N; i++){
    console.log(printW(input[i][0], input[i][1], input[i][2]))
};