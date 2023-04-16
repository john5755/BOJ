let fs = require('fs');

let [A, B, C] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(n => Number(n));

console.log(A + B + C);