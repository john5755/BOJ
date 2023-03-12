let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => Number(n))

let N = input.shift()

function sosu(n){
    if(n === 0 || n === 1){
        return false
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if( n % i === 0){
            return false
        }
    }
    return true
}

for(let i = 0; i < N; i++){
    let now = input[i];
    while(!sosu(now)){
        now++
    }
    console.log(now);
}