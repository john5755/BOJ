let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let [N, M] = input.shift().split(' ').map(n => Number(n));

let pokeDex = {};
let dexPoke = {};

for(let i = 0; i < N; i++){
    pokeDex[input[i]] = i + 1;
    dexPoke[String(i+1)] = input[i]; 
};

let quiz = input.slice(N, input.length);
let answer = '';
for(let j = 0; j < M; j++){
    if(quiz[j] in pokeDex){
        answer += pokeDex[quiz[j]] + '\n'
    } else{
        answer += dexPoke[quiz[j]] + '\n'
    }
}

console.log(answer)