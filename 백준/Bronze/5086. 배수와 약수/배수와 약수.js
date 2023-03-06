let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let targets = input.map(n => n.split(' ').map(m => Number(m)))

function asdf(a, b){
    if(a % b === 0){
        return 'multiple'
    }
    if (b % a === 0){
        return 'factor'
    }
    return 'neither'
}

for(let i = 0; i < targets.length -1; i++){
    console.log(asdf(targets[i][0], targets[i][1]))
}