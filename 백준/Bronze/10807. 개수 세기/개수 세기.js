let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let N = Number(input[0])
let numbers = input[1].split(' ').map(num => Number(num))
let target = Number(input[2])

let ans = 0
for(i=0; i<N; i++){
    if(numbers[i] === target){
        ans += 1
    }
}

console.log(ans)