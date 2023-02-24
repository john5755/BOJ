let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().split('\n')
let [N, M] = input.shift().split(' ').map(n => Number(n))
let strings = new Set()
for(let i = 0; i < N; i++){
    strings.add(input.shift())
}
let ans = 0;
for(let j = 0; j < M; j++){
    if(strings.has(input[j])){
        ans ++
    }
}

console.log(ans)