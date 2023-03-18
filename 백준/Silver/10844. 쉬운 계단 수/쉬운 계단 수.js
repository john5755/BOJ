let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim();

let N = parseInt(input);

let start = 2;
let memo = new Array(10).fill(0);
memo[0] = 1;
memo[1] = 1;
memo[9] = 1;
for(let i = 2; i < 9; i++){
    memo[i] = 2;
};

let nemo = new Array(10).fill(0);

while(start < N){
    if(start % 2 === 0){
        nemo[0] = memo[1] % 1000000000;
        nemo[9] = memo[8] % 1000000000;
        for(let j = 1; j < 9; j++){
            nemo[j] = (memo[j-1] % 1000000000)+ (memo[j+1] % 1000000000);
        }
    } else{
        memo[0] = nemo[1] % 1000000000;
        memo[9] = nemo[8] % 1000000000;
        for(let k = 1; k < 9; k++){
            memo[k] = (nemo[k-1] % 1000000000) + (nemo[k+1] % 1000000000);
        }
    }
    start++;
}

let answer = 0;
if(N == 1){
    answer = 9;
} else if(N % 2 === 0){
    for(let l = 0; l < 10; l++){
        answer += memo[l] % 1000000000;
    }
} else{
    for(let m = 0; m < 10; m++){
        answer += nemo[m] % 1000000000;
    }
}

console.log(answer % 1000000000);
