let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => n.trim())

let A = input[0];
let B = input[1];
let lenA = A.length;
let lenB = B.length;

let dp = Array.from({length: lenA}, () => new Array(lenB).fill(0));

for(let i = 0; i < lenB; i++){
    if(A[0] === B[i]){
        for(let j = i; j < lenB; j++){
            dp[0][j] = 1;
        }
        break;
    }
}

for(let i = 0; i < lenA; i++){
    if(A[i] === B[0]){
        for(let j = i; j < lenA; j++){
            dp[j][0] = 1;
        }
        break;
    }
}

for(let i = 1; i < lenA; i++){
    for(let j = 1; j < lenB; j++){
        if(A[i] === B[j]){
             dp[i][j] = dp[i-1][j-1] + 1;
        }
        else{
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);                   
        }
    }
}

let ans = dp[lenA-1][lenB-1]
console.log(ans);