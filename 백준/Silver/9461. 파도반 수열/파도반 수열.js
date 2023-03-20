let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => Number(n));

let N = input.shift();
let maxN = Math.max(...input);

let result = [];
let memo = [0, 1, 1, 1];
for(let i = 4; i <= maxN; i++){
     memo[i] = memo[i-3] + memo[i-2];
};

for(let j = 0; j < N; j++){
    result.push(memo[input[j]]);
}

console.log(result.join('\n'))

