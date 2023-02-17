let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim()
let N = Number(input)

function fibo(n){
    if(n === 0){
        return 0
    } else if (n === 1){
        return 1
    }
    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(N))