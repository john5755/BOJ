let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
let N = Number(input.shift());
let cards = new Set(input.shift().split(' '));
let M = Number(input.shift())
let nums = input[0].split(' ')
let ans = ''

for(let i = 0; i < M; i++){
    if(cards.has(nums[i])){
        ans += '1 '
    } else {
        ans += '0 '
    }
}

console.log(ans)