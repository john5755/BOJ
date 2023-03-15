let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim()

let N = parseInt(input);

let locs = [];
let answer = 0;

function isPlace(x, y){
    for(let i = 0; i < x; i++){
        if(y === locs[i]) return false;
        if(Math.abs(y - locs[i]) === x - i) return false;
    }
    return true;
}

function nQueen(cnt){
    if(cnt === N){
        answer ++;
        return;
    }
    
    for(let i = 0; i < N; i++){
        if(isPlace(cnt, i)){
            locs.push(i);
            nQueen(cnt + 1);
            locs.pop()
        }
    }
}

for(let i = 0; i < N; i++){
    locs.push(i);
    nQueen(1);
    locs.pop();
}

console.log(answer);