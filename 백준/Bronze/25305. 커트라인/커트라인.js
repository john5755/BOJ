let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().split('\n')
let [N, k] = input[0].split(' ').map(n => Number(n))
let scores = input[1].split(' ').map(m => Number(m))
scores.sort((a,b) => b-a)

let ans = scores[k-1]

console.log(ans)