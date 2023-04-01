let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let [N, K] = input.shift().split(' ').map(n => Number(n));

let coins = input.map(n => Number(n));

let ans = 0;
let idx = N - 1;
while(K > 0){
    if(coins[idx] <= K){
        temp = parseInt(K / coins[idx]);
        ans += temp;
        K -= coins[idx] * temp;
    }
    idx -= 1;
}

console.log(ans);