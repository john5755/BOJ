let fs = require('fs')

let [a, b] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(n => Number(n))

let ab = a * b
while(a % b !== 0){
    let r = a % b;
    if(r !== 0){
        a = b;
        b = r;
    }
}

let ans = ab / b

console.log(ans)