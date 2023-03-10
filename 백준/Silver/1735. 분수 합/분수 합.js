let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(m => Number(m)))

let a = input[0][1]
let b = input[1][1]
while(a % b !== 0){
    let r = a % b;
    if(r !== 0){
    a = b;
    b = r;
    }
}

let c = input[0][1] * input[1][1] / b
let d = (input[0][0] * input[1][1] / b) + (input[1][0] * input[0][1] / b)
let bunmo = c;
let bunja = d;
while(c % d !== 0){
    let e = c % d;
    if(e !== 0){
        c = d;
        d = e;
    }
}

bunmo /= d;
bunja /= d;

let ans = `${bunja} ${bunmo}`
console.log(ans)