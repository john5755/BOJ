let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let [N, M] = input[0].split(' ').map(n => Number(n))
let cards = input[1].split(' ').map(n => Number(n))

let max = 0;

for(let i = 0; i < N; i++){
    for(let j = i+1; j < N; j++){
        for(let k = j+1; k < N; k++){
            let sums = cards[i] + cards[j] + cards[k]
            if(sums > max && sums <= M){
                max = sums
            }
        }
    }
}

console.log(max)