let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let N = parseInt(input[0]);

let nums = input[1].split(' ').map(m => Number(m));

let dpA = new Array(N).fill(0);
let dpB = new Array(N).fill(0);

for(let i = 0; i < N; i++){
    let maxA = 0;
    for(let j = 0; j < i; j++){
        if(nums[i] > nums[j] && dpA[j] > maxA){
            maxA = dpA[j];
        }
    }
    dpA[i] = maxA + 1;
}

for(let i = N -1; i >= 0; i -= 1){
    let maxB = 0;
    for(let j = N - 1; j > i; j -= 1){
        if(nums[i] > nums[j] && dpB[j] > maxB){
            maxB = dpB[j];
        }
    }
    dpB[i] = maxB + 1;
}

let ans = 0;
for(let i = 0; i < N; i ++){
    if(dpA[i] + dpB[i] > ans){
        ans = dpA[i] + dpB[i]
    }
}

console.log(ans - 1);
