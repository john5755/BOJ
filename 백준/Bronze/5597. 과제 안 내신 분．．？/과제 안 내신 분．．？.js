let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().split('\n').map(num => Number(num))
let homework = []

for(let i=1; i <= 30; i ++){
    if(!input.includes(i)){
        homework.push(i)
    }
    if (homework.length === 2){
        break
    }
}

console.log(homework.join('\n'))