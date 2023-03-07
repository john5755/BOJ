let fs = require('fs');

let [N, K] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(n => Number(n))

let count = 0;

function yaksu(n, k){
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            count ++
            if(count === k){
                return i
            }
        }
    }
    return 0
}

console.log(yaksu(N, K))