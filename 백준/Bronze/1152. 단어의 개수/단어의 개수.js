let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim()

let ans = 1

for (let i = 0; i < input.length; i++){
    if (input[i] === ' '){
        ans += 1
    }
}

if(input.length === 0){
    ans = 0
}

console.log(ans)