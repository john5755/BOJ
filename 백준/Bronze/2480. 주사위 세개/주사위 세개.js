const fs = require('fs');

let [a, b, c] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(n => Number(n));

let ans;

if(a === b && b === c){
    ans = 10000 + 1000 * a;
} else if (a === b && b !== c){
    ans = 1000 + 100 * a;
} else if (a === c && b !== c){
    ans = 1000 + 100 * a;
} else if (a !== b && b === c){
    ans = 1000 + 100 * b;
} else if (a !== b && b !== c){
    ans = 100 * Math.max(a, b, c)
}

console.log(ans);