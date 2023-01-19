let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split(' ');
let inputA = Number(input[0])
let inputB = Number(input[1])

function sol(a, b){
    if (a === b){
        console.log('==')
    } else if ( a > b) {
        console.log ('>')
    } else {
        console.log ('<')
    }
}

sol(inputA, inputB)
