let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim()
let N = Number(input)

let start = 666
let idx = 1
while(idx < N){
    start += 1
    if(String(start).includes('666')){
        idx++
    }
}

console.log(start)