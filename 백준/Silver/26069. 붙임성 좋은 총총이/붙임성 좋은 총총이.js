let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let N = parseInt(input[0]);
let dance = new Set();

for(let i = 1; i <= N; i++){
    let [a, b] = input[i].split(' ');
    if(a === 'ChongChong' || b === 'ChongChong' || dance.has(a) || dance.has(b)){
        dance.add(b);
        dance.add(a);
    }
};

console.log(dance.size);