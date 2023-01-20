let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')
let [N, X] = input[0].split(' ').map(n => Number(n))
let numbers = input[1].split(' ').map(n => Number(n))
let ans = ''

for(let i = 0; i < N; i ++) {
    if (numbers[i] < X){
        ans += String(numbers[i]) + ' '
    }
}
ans.trim()

console.log(ans)