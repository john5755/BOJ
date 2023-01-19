let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()
let target = Number(input[0])

for(let i = 1; i < 10; i ++){
    console.log(`${target} * ${i} = ${target*i}`)
}