let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => Number(n));

let N = input.shift();
let cur = 0;
let ans = [];
let stack = [];
for(let i = 0; i < N; i++){
    if(cur > input[i]){
        let test = stack.pop();
        if(test === input[i]){
            ans.push('-');
            continue;
        } else {
            ans = ['NO'];
            break;
        }
    }
    
    for(let j = cur + 1; j <= input[i]; j++){
        stack.push(j);
        ans.push('+');
    }
    cur = input[i];
    stack.pop();
    ans.push('-');
}

console.log(ans.join('\n'));