let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim();

let target = parseInt(input);

function findSum(n){
    for(let i = 1; i < n; i++){
        let strNums = String(i).split('').map(m => Number(m))
        let sum = strNums.reduce(function add(acc, val){
            return acc + val
        },0);
        if((i + sum) === n){
            return i;
        }
    }
    return 0;
}

let ans = findSum(target)

console.log(ans)