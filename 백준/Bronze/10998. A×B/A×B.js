let fs = require('fs')

let [A, B] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(n => Number(n));

let ans = A * B;

console.log(ans);