let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let N = parseInt(input[0]);

let nums = input[1].split(' ').map(n => Number(n));

let dp = [nums[0]];

for(let i = 1; i < N; i++){
    dp[i] = nums[i] > nums[i] + dp[i-1] ? nums[i] : nums[i] + dp[i-1];
}

console.log(Math.max(...dp));