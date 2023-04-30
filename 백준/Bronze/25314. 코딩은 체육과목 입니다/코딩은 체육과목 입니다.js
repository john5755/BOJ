let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim();

let N = input * 1;

let four = 'long int';

let longNum = N / 4 - 1;

let ans = '';
for(let i = 0; i < longNum; i++){
    ans += 'long '
}
ans += four;

console.log(ans);

