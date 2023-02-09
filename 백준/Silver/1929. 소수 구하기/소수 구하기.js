const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const [n, m] = input.split(" ").map(v => Number(v));

function isPrime(n){
    if (n === 1){
        return false
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0) {
            return false
        }
    }
    return true
}

const results = []
for(let j = n; j <= m; j++){
    if(isPrime(j)){
        results.push(j)
    }
}

console.log(results.join('\n'))