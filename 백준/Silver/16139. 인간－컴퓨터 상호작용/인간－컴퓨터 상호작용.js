let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let target = input[0];
let len = target.length;
let N = input[1] * 1;

let sums = Array.from({length : 26}, () => new Array(len + 1).fill(0));

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

for(let i = 0; i < len; i++){
    let idx = alphabet.indexOf(target[i]);
    for(let j = 0; j < 26; j++){
        if(idx === j){
            sums[j][i + 1] = sums[j][i] + 1;
        } else {
            sums[j][i + 1] = sums[j][i];
        }
    }
};

let ans = [];
for(let i = 2; i < 2 + N; i++){
    let [a, l, r] = input[i].split(' ');
    let index = alphabet.indexOf(a);
    ans.push(sums[index][r * 1 + 1] - sums[index][l * 1])
}

console.log(ans.join('\n'))