let fs = require('fs')

let [N, M] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(n => Number(n));
let result = '';
let output = [];

function dfs(cnt){
    if(cnt === M){
        result += `${output.join(' ')}\n`;
        return;
    }
    for(let i = 1; i <= N; i++){
        output.push(i);
        dfs(cnt + 1);
        output.pop();
    }
    
}

dfs(0)
console.log(result)