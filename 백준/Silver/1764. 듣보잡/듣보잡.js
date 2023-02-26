let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [N, M] = input.shift().split(' ').map(n => Number(n))

let notHear = new Set()

for(let i = 0; i < N; i++){
    notHear.add(input.shift())
}

let ans = []

for(let j = 0; j < M; j++){
    if(notHear.has(input[j])){
     ans.push(input[j])       
    }
}
ans.sort()

let answer = String(ans.length) + '\n' + ans.join('\n')

console.log(answer)