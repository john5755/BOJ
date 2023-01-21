const fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().split('\n')
let N = Number(input[0])
let numbers = input[1].split(' ').map(num => Number(num))

let minNum = 1000000
let maxNum = -1000000

for(let num of numbers){
    if (num > maxNum){
        maxNum = num
    }
    if (num < minNum){
        minNum = num
    }
}

let ans = `${minNum} ${maxNum}`
console.log(ans)