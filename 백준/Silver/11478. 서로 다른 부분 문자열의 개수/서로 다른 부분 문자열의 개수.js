let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim()

let anSet = new Set()

for(let i = 0; i < input.length; i++){
    for(let j = i; j < input.length; j++){
        anSet.add(input.slice(i,j+1))
    }
}

let answer = anSet.size

console.log(answer)