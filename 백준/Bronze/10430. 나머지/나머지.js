let fs = require('fs');

let [A, B, C] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(n => Number(n));

let a = (A+B) % C;
let b = ((A % C) + (B % C)) % C;
let c = (A * B) % C;
let d = ((A % C) * (B % C))% C;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
