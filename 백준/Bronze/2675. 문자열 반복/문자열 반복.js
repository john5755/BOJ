let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().split('\n')
let T = Number(input[0])

for(let i = 1; i <= T; i ++){
    let [targetNum, targetStr] = input[i].split(' ')
    let targetArr = targetStr.split('')
    let ans = targetArr.reduce((acc, cur) => acc + cur.repeat(Number(targetNum)), '')
    console.log(ans)
}