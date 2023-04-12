let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let N = input.length - 1;
let answer = [];

for(let i = 0; i < N; i++){
    let stack = [];
    for(let j = 0; j < input[i].length; j++){
        if(input[i][j] === "("){
            stack.push("(");
        } else if(input[i][j] === ")"){
            let start = stack.pop();
            if(start !== "("){
                stack = ["("];
                break;
            }
        } else if(input[i][j] === "["){
            stack.push("[");
        } else if(input[i][j] === "]"){
            let start = stack.pop();
            if(start !== "["){
                stack = ["["];
                break;
            }
        }
    }
    if(stack.length > 0){
        answer.push('no')
    } else{
        answer.push('yes')
    }
}

console.log(answer.join('\n'))