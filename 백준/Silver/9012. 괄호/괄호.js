let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let N = parseInt(input.shift());

let ans = [];
for(let i = 0; i < N; i++){
    let stack = 0;
    for(let j = 0; j < input[i].length; j++){
        if(input[i][j] === '('){
            stack += 1;
        } else{
            if(stack <= 0){
                stack = -1;
                ans.push('NO');
                break;
            }
            stack -= 1;
        }
    }
    if(stack > 0){
        ans.push('NO')
    }
    if(stack === 0){
        ans.push('YES')
    }
    
}

console.log(ans.join('\n'));