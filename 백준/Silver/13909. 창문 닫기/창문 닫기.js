let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim()

let N = parseInt(input);

let ans = Math.floor(Math.sqrt(N));

console.log(ans);