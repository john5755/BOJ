let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let N = parseInt(input.shift())

let synergies = input.map(n => n.split(' ').map(m => Number(m)));

let half = N / 2;
let answer = 100 * N * N;

let visited = new Array(N).fill(0);
let teamA = [];
function dfs(cnt, a){
    if(cnt === half){
        let teamB = [];
        let totalA = 0;
        let totalB = 0;
        for(let i = 0; i < N; i++){
            if(!teamA.includes(i)){
                teamB.push(i)
            }
        }
        for(let j = 0; j < half; j++){
            for(let k = j + 1; k < half; k++){
                totalA += synergies[teamA[j]][teamA[k]];
                totalA += synergies[teamA[k]][teamA[j]];
                totalB += synergies[teamB[j]][teamB[k]];
                totalB += synergies[teamB[k]][teamB[j]];
            }
        }
        if(answer > Math.abs(totalA - totalB)){
            answer = Math.abs(totalA - totalB);
        }
        return;
    }
    
    for(let j = a; j < N; j++){
        if(visited[j] !== 1){
            visited[j] = 1;
            teamA.push(j);
            dfs(cnt + 1, j);
            teamA.pop();
            visited[j] = 0;
        }
    }
}

for(let i = 0; i < half; i++){
    visited[i] = 1;
    teamA.push(i);
    dfs(1, i);
    teamA = [];
}

console.log(answer);