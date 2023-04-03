let fs = require('fs')

let [N, M] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(n => Number(n));

console.log(N + M)