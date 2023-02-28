let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
let [N, M] = input[0].split(' ').map(n => Number(n))
let A = new Set(input[1].split(' '))
let B = new Set(input[2].split(' '))

let ans = 0;

for(let num of A){
    if(!B.has(num)){
        ans += 1
    }
}

for(let num of B){
    if(!A.has(num)){
        ans += 1
    }
}

console.log(ans)