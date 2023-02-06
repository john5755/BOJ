let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().split('\n')
let T = Number(input[0])

for(let i = 1; i <= T; i++){
    let [H, W, N] = input[i].split(' ').map(num => Number(num))
    let floor = N % H
    let hosu = 0
    if (floor === 0){
        hosu = parseInt(N/H)
        floor = H
    } else {
        hosu = parseInt(N/H) + 1
    }
    floor = String(floor)
    if (hosu < 10){
        hosu = '0' + String(hosu)
    }
    console.log(floor + hosu)
}