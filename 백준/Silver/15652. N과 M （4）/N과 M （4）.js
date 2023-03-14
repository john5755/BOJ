let fs = require('fs')

let [N, M] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(n => Number(n))

let result = '';
let output = [];

function dfs(cnt, s){
    if(cnt === M){
        result += `${output.join(' ')}\n`
        return;
    }
    
    for(let i = s; i <= N; i++){
        output.push(i);
        dfs(cnt + 1, i);
        output.pop();
    }
}

dfs(0, 1);
console.log(result);