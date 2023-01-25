let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().split('\n')

let C = Number(input[0])

for(let i = 1; i <= C; i++){
    let cases = input[i].split(' ').map(num => Number(num))
    let nums = cases[0]
    let scores = cases.slice(1);
    let sumScores = scores.reduce((acc, val) => acc += val, 0);
    let sumAvg = sumScores / scores.length;
    let count = 0;
    for(let score of scores){
    if (score > sumAvg) {count ++}
}
    let ans = ((count / nums) * 100).toFixed(3);
    console.log(ans + "%")
}