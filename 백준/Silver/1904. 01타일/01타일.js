let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim()

let N = parseInt(input);

let memo = new Array(N+1).fill(0);
memo[1] = 1;
memo[2] = 2;

for(let i = 3; i < N+1; i++){
    memo[i] = (memo[i-2] + memo[i-1]) % 15746;
}

let answer = memo[N]
console.log(answer);
