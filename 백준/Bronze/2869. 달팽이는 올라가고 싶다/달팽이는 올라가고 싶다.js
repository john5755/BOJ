let fs =require('fs')

let input = fs.readFileSync('dev/stdin').toString().split(' ')
let [A, B, V] = input.map(num => Number(num))

console.log(Math.ceil((V - B) / (A - B)));