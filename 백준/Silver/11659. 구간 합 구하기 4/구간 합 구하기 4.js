let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(m => Number(m)));

let [N, M] = input[0];
let nums = input[1];
let numsAdd = [0];
let temp = 0;
for(let i = 0; i < N; i++){
    temp += nums[i];
    numsAdd.push(temp);
}

let answer = [];
for(let j = 0; j < M; j++){
    let sum = numsAdd[input[j + 2][1]] - numsAdd[input[j + 2][0] - 1]
    answer.push(sum);
}

console.log(answer.join('\n'))
