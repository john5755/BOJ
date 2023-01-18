let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let c = Number(input[0])
let d = Number(input[1])

function sol(a, b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(Math.floor(a/b));
    console.log(a%b);
}

sol(c, d)