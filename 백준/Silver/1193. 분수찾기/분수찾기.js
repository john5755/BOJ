let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString()
let N = Number(input)

let flag = 1
let now = 2
let count = 1
let a = 1
let b = 1
while (count < N) {
    if (flag === 1){
        while (a < now && count < N){
            count += 1
            a += 1
            if (b != 1){
            b -= 1}
        }
    } else {
        while (b < now && count < N){
            count += 1
            if (a != 1){
            a -= 1}
            b += 1
        }
    }
    flag *= -1
    now += 1
}

console.log(`${b}/${a}`)