let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => Number(n))
let N = input.shift()

input.sort((a,b) => a-b);

for(let i = 0; i < N; i++){
    console.log(input[i]);
}