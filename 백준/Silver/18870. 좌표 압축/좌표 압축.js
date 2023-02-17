let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
let N = Number(input.shift())
let locas = input[0].split(' ').map(n => Number(n))
let set = new Set(locas);
let uniq = [...set].sort((a,b) => a-b)
let dic = {};
uniq.forEach((e, idx) => {dic[e] = idx})
let ans = '';
for(let i = 0; i < N; i++){
    ans += dic[locas[i]] + ' ';
}

console.log(ans);
