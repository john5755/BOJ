let input = require('fs').readFileSync('dev/stdin').toString().trim();
let inputNum = Number(input)

let ans = 0

for(i = 0; i <= inputNum; i ++){
    ans += i
}

console.log(ans)