let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(m => Number(m)));

let [N, M] = input.shift();

let sums = Array.from({length: N + 1}, () => (new Array(N + 1).fill(0)))

for(let i = 1; i <= N; i++){
    let temp = 0;
    for(let j = 1; j <= N; j++){
        temp += input[i-1][j-1];
        sums[i][j] = temp;
    }
}

let answer = [];
for(let i = N; i < N + M; i++){
    let tmp = 0;
    for(let j = input[i][0]; j <= input[i][2]; j++){
        tmp += sums[j][input[i][3]];
        tmp -= sums[j][input[i][1] - 1];
    };
    answer.push(tmp);
};

console.log(answer.join('\n'))