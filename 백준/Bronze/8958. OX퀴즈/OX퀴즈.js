let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().split('\n')
let N = Number(input[0])
for(let i = 1; i <= N; i++){
    let score = 0;
    let total = 0;
    for (let j = 0; j <= input[i].length; j++){
        if(input[i][j] === "O"){
            score += 1
            total += score
        } else {
            score = 0
        }
    }
    console.log(total)
}