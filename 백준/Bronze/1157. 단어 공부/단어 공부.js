let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().toUpperCase().split('').sort()

let curMax = 1
let curIdx = 0
let curNum = 1
let ans = input[0]
while (curIdx <= input.length -1){
    if (input[curIdx] === input[curIdx+1]){
        curNum += 1
        if (curMax === curNum){
            ans = '?'
        }
        if (curMax < curNum){
            curMax = curNum
            ans = input[curIdx]
        }
    } else {
        curNum = 1
    }
    curIdx += 1
}

console.log(ans)