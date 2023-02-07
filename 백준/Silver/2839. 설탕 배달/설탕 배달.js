let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim();
let N = Number(input);
let a = parseInt(N/5);
let b= 0;

while(a >= 0){
    let extra = N - 5 * a
    if (extra % 3 === 0){
        b = extra / 3
        break
    }
    a -= 1
}
let ans = -1;
if (a >= 0){
    ans = a + b
}

console.log(ans)