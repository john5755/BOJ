let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => Number(n))

function sosu(n){
    if(n === 1){
        return false
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n  %  i === 0){
            return false
        }
    }
    return true
}

let N = input.shift()
let maxNum = Math.max(...input)
let check = new Array(maxNum + 1).fill(0)
for(let i = 2; i <= maxNum; i++){
    if(sosu(i)){
        check[i]++
    }
}

for(let j = 0; j < N; j++){
    let count = 0;
    for(let k = 2; k <= input[j] / 2; k++){
        if(check[k] === 1 && check[input[j] - k] === 1){
            count++
        }
    }
    console.log(count)
}
