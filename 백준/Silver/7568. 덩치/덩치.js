let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
let N = parseInt(input.shift())
let people = input.map((p) => p.split(' ').map(n => Number(n)))
let ans = []

for(person of people){
    let count = 1;
    for(let i = 0; i < N; i++){
        if(person[0] < people[i][0] && person[1] < people[i][1]){
            count ++
        }
    }
    ans.push(count)
}

let result = ans.join(' ')
console.log(result)