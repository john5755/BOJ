let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().split('\n')
let sub = Number(input[0])
let scores = input[1].split(' ').map(num => Number(num))
let maxSco = Math.max(...scores)
let ans = 0

for(let score of scores){
    ans += score / maxSco * 100 / sub
}

console.log(ans)