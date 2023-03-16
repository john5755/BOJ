let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let N = parseInt(input[0]);

let nums = input[1].split(' ').map(n => Number(n));

let operNums = input[2].split(' ').map(n => Number(n));
let opers = [];

for(let i = 0; i < 4; i++){
    let num = operNums[i];
    while(num > 0){
        opers.push(i);
        num -= 1;
    }
};

function calc(a, x, y){
    if(a === 0){
        return x + y;
    } else if (a === 1){
        return x - y;
    } else if (a === 2){
        return x * y;
    } else if (a === 3){
        if(x * y < 0){
            return Math.floor(- x / y) * (-1);
        } else {
            return Math.floor(x / y);
        }
    }
};

let sequence = [];
let visited = new Array(N-1).fill(false);
let output = [];
function dfs(cnt){
    if(cnt === N -1){
        let k = 0;
        let temp = nums[0];
        while(k < N-1){
            temp = calc(sequence[k], temp, nums[k+1]);
            k++;
        }
        output.push(temp);
        return;
    }
    for(let i = 0; i < N -1; i++){
        if(visited[i] === true) continue;
        visited[i] = true;
        sequence.push(opers[i]);
        dfs(cnt + 1);
        sequence.pop();
        visited[i] = false;
    } 
}

dfs(0);
let minNum = Math.min(...output);
let maxNum = Math.max(...output);
console.log(`${maxNum}\n${minNum}`);