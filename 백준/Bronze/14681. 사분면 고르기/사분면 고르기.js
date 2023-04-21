let fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n')

let [a, b] = input.map(n => Number(n));

function loca(m, n){
    if(m > 0 && n > 0){
        return 1;
    } else if (m > 0 && n < 0){
        return 4;
    } else if (m < 0 && n > 0){
        return 2;
    } else {
        return 3;
    }
}

console.log(loca(a, b));