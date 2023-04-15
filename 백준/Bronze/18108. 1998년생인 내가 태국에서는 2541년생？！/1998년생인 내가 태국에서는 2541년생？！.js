let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim();

let N = input * 1;

let ans = N - (2541 - 1998);

console.log(ans);