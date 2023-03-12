let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => Number(n))

let N = input.shift()

let space = [];

for(let i = 0; i < N-1; i++){
    space.push(input[i+1] - input[i])
}

function yaksu(a, b){
    while(a % b !== 0){
        let r = a % b;
        if(r !== 0){
            a = b;
            b = r;
        }
    }
    return b;
}

let a = yaksu(space[0], space[1])
for(let j = 2; j < space.length; j++){
    let b = yaksu(a, space[j]);
    a = b;
}

let needs = ((input[N-1] - input[0]) / a ) + 1
let ans = needs - N;
console.log(ans)
