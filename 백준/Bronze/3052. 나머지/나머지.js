const fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(num => Number(num))

let extras = []

for(let num of input){
    if(!extras.includes(num % 42)){
        extras.push(num % 42)
    }
}

console.log(extras.length)