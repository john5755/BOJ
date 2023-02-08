let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().split('\n').map(num => Number(num))

function isPrime(n){
    if (n === 1){
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

let primeSum = 0
let primeMin = 0

for(let i = input[0]; i <= input[1]; i++){
    if (isPrime(i)){
        primeSum += i
        if(primeMin === 0){
            primeMin = i
        }
    }
}

if(primeMin !== 0){
    console.log(primeSum)
    console.log(primeMin)
} else {
    console.log(-1)
}