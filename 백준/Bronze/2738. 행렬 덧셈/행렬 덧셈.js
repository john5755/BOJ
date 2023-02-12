let fs =require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
let [N, M] = input[0].split(' ').map(num => Number(num))
let A = []
let B = []
for(let i = 1; i <= N; i++){
    A.push(input[i].split(' ').map(n => Number(n)))
}
for(let j = N+1; j <= 2*N; j++){
    B.push(input[j].split(' ').map(n => Number(n)))
}

let ans = Array.from(Array(N), () => (new Array(M).fill(0)))

for(let k = 0; k < N; k++){
    for(let l = 0; l < M; l++){
        ans[k][l] = A[k][l] + B[k][l]
    }
}

for(let m = 0; m < N; m++){
    console.log(ans[m].join(' '))
}