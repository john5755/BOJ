let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let N = Number(input.shift())

let locas = input.map(loc => loc.split(' ').map(n => Number(n)))

locas.sort((a,b) => {if(a[1] === b[1]){
    return a[0] - b[0]
} return a[1] - b[1]})

let results = ''
locas.forEach(loca => results += `${loca[0]} ${loca[1]}\n`)

console.log(results)