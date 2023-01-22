const fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().split('\n').map(num => Number(num))

let maxNum = Math.max(...input)
let maxIdx = input.indexOf(maxNum) + 1

console.log(maxNum)
console.log(maxIdx)