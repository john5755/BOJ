let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(n => Number(n));

let nums = input[1].split(' ').map(m => Number(m));

let max = 0;

for(let i = 0; i < K; i++){
    max += nums[i];
}

let temp = max;
for(let j = K; j < N; j++){
    temp -= nums[j-K];
    temp += nums[j];
    if(temp > max){
        max = temp;
    }
}

console.log(max);