let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let N = input.shift()

input.sort((a,b) => {if(a.length === b.length){return a.localeCompare(b)} return a.length - b.length})

let words = new Set(input)

let results = ''

for(word of words){
    results += `${word}\n`
}

console.log(results)