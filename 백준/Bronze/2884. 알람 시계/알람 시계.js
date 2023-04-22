let fs = require('fs');

let [a, b] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(n => Number(n));

function alarm(m, n){
    let minute = 0;
    let hour = 0;
    if(n >= 45){
        minute = n - 45;
        hour = m;
    } else {
        minute = n - 45 + 60;
        if(m === 0){
            hour = 23;
        } else{
            hour = m - 1;
        }
    }
    return `${hour} ${minute}`
}

console.log(alarm(a, b));
