let fs =require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => Number(n))

let len = input.length

function isPrime(n){
    if (n === 1){
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            return false
        }
    }
    return true
}

let results = []
for(let j = 0; j < len-1; j++){
    let ans = 0;
    for(let k = input[j]+1; k <= 2 * input[j]; k++ ){
        if (isPrime(k)){
            ans += 1
        }
    }
    results.push(ans)
}

console.log(results.join('\n'))