let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let N = parseInt(input[0]);

let ans = 0;
let greeting = new Set();
for(let i = 2; i <= N; i++){
    if(input[i] === 'ENTER'){
        greeting = new Set();
    }
    else if(!greeting.has(input[i])){
        ans += 1;
        greeting.add(input[i]);
    }
}

console.log(ans);