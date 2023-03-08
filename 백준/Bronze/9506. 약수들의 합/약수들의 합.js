let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(n => Number(n))

function perfect(n){
    let count = 0;
    let answer = `${String(n)} = `
    for(let i = 1; i <= n/2; i++){
        if (n % i === 0){
            count += i
            answer += `${String(i)} + `
        }
    }
    if(count === n){
        answer = answer.slice(0, answer.length - 3)
        return answer
    }
    return `${n} is NOT perfect.`
}

for(let i = 0; i < input.length - 1; i++){
    console.log(perfect(input[i]))
}