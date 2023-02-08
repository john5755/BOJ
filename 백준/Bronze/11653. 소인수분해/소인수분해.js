let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split(' ');
let num = parseInt(input[0]);

let it = 2;
let primes = [];
while(true){
    if (num % it === 0){
        num = num / it;
        primes.push(it);
        it = 1;
    }
    it++;
    if (it > num){
        break;
    }
}

console.log(primes.join('\n'));