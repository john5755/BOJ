let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(m => Number(m)))
let hor = input[0][0]
let ver = input[0][1]


let horCount= 0;
let verCount = 0;

if(input[0][0] === input[1][0]){
    hor = input[2][0]
} else {
    if(input[0][0] === input[2][0]){
        hor = input[1][0]
    }
}

if (input[0][1] === input[1][1]){
    ver = input[2][1]
} else{
    if(input[0][1] === input[2][1]){
        ver = input[1][1]
    }
}

let answer = `${hor} ${ver}`

console.log(answer)

