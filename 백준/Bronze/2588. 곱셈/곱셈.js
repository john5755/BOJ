let fs = require('fs');

let [A, B] = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => Number(n));

let last = A * B;
let ans = [];
while(B > 0){
    ans.push((B % 10) * A);
    B = Math.floor(B / 10);
}
ans.push(last);
console.log(ans.join('\n'));
