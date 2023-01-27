let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
let N = Number(input[0])

let ans = 0
function confOne (a){
    let strA = String(a)
    let n = strA.length
    if(n <= 2){return true}
    let flag = true
    let gap = Number(strA[0]) - Number(strA[1])
    for(let j = 1; j < n-1; j++){
    if ((Number(strA[j]) - Number(strA[j+1])) !== gap){
        flag = false
        break
    }}
    return flag
}

for(let i =1; i <= N; i++){
    if(confOne(i)){
        ans += 1
    }
}

console.log(ans)
