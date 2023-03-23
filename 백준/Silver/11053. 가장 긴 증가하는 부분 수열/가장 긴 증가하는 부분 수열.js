let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let N = parseInt(input.shift())

let nums = input[0].split(' ').map(n => Number(n));

let dp = new Array(N).fill(0);


for(let i = 0; i < N; i++){
    let max = 0;
    for(let j = 0; j < i; j++){
        if(nums[i] > nums[j] && dp[j] > max){
            max = dp[j];
        }
    }
    dp[i] = max + 1;
}

console.log(Math.max(...dp));
