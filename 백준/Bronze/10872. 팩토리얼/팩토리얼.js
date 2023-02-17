let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim();

let N = Number(input)

function factor(num){
    if (num <= 1){
        return 1
    }
    
    return num * factor(num - 1);
}

console.log(factor(N))