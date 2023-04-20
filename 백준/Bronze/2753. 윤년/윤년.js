let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim();

let n = input * 1;

function moon(n){
    if(n % 4 !== 0){
        return 0;
    } else if(n % 100 === 0){
        if(n % 400 === 0){
            return 1;
        }
        return 0;
    }
    return 1;
}

console.log(moon(n));