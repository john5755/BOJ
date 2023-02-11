let fs = require('fs')

function isPrime(n){
    if(n === 1){
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            return false
        }
    }
    return true
}

function goldBach(n){
    let temp = -1;
    for(let i = 2; i <= n/2; i++){
        if(isPrime(i) && isPrime(n-i) && i > temp){
            temp = i
        } 
    }
    return String(temp) + ' ' + String(n-temp)
}

let input = fs.readFileSync('dev/stdin').toString().split('\n').map(n => Number(n))

let ans = []

for(let j = 1; j <= input[0]; j++){
    ans.push(goldBach(input[j]))
}

console.log(ans.join('\n'))

