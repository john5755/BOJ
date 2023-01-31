let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let N = Number(input[0])
let ans = 0

for(let i = 1; i <= N; i++){
    let letters = []
    for(let j = 0; j < input[i].length; j++){
        if(!letters.includes(input[i][j])){
            letters.push(input[i][j])
        } else if (input[i][j-1] !== input[i][j]){
            break
        }
        if(j === input[i].length -1){
            ans += 1
        }
    }
}

console.log(ans)