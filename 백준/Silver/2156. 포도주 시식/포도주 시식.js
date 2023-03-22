let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => Number(n));

let N = input.shift();

let memo = [];

for(let i = 0; i <= N; i++){
    memo.push([0, 0, 0]);
};

memo[1][0] = 0;
memo[1][1] = input[0];
memo[1][2] = input[0];
let answer = input[0];

for(let i = 2; i <= N; i++){
    memo[i][0] = answer;
    memo[i][1] = memo[i-1][2] + input[i-1];
    memo[i][2] = Math.max(...memo[i-2]) + input[i-1];
    answer = Math.max(answer, ...memo[i])
};

console.log(answer);