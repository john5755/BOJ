const fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let target = input[0].split('');
let n = input[1] * 1;

console.log(target[n-1]);