let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => Number(n))

input.sort((a,b) => a-b)

let total = input.reduce(function add(sum, curVal){return sum + curVal;},0)
let avg = total / 5
let cent = input[2]
console.log(avg)
console.log(cent)