let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(m => Number(m)));

let [N, M] = input[0];

let sums = new Array(N).fill(0);
let extras = new Array(M).fill(0);

let temp = 0;
for(let i = 0; i < N; i++){
    temp += input[1][i];
    temp = temp % M;
    sums[i] = temp;
    extras[temp] += 1;
}

let ans = extras[0];
for(let j = 0; j < M; j++){
    ans += extras[j] * (extras[j] - 1) / 2;
}

console.log(ans);
