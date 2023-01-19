let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const calculated = Number(input[0]);
const itemNum = Number(input[1]);
let totalPrice = 0;

for(let i = 0; i < itemNum; i ++){
    let item = input[i+2].split(' ')
    totalPrice += Number(item[0]) * Number(item[1])
}

if (totalPrice === calculated) {
    console.log("Yes")
} else {
    console.log("No")
}