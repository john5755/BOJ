let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => n.split(' '));

function change(a){
    let score = 0;
    switch(a){
        case 'A+':
            score = 4.5;
            break;
        case 'A0':
            score = 4.0;
            break;
        case 'B+':
            score = 3.5;
            break;
        case 'B0':
            score = 3.0;
            break;
        case 'C+':
            score = 2.5;
            break;
        case 'C0':
            score = 2.0;
            break;
        case 'D+':
            score = 1.5;
            break;
        case 'D0':
            score = 1.0;
            break;
        case 'F':
            score = 0.0;
        case 'P':
            score = 0.0;
    }
    return score;                     
}

let hack = 0;
let total = 0;
for(let i = 0; i < input.length; i++){
    if(input[i][2] !== 'P'){
        let b = input[i][1] * 1;
        hack += b;
        total += b * change(input[i][2])
    }
}

let answer = total / hack;
console.log(answer);