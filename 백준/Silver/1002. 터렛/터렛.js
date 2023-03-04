let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let N = parseInt(input.shift())

for(let i = 0; i < N; i++){
    let [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(n => Number(n))
    let d = (x1- x2) ** 2 + (y1 - y2) ** 2
    let out = (r1 + r2) ** 2
    let inCircle = (r1 - r2) ** 2
    if(d === 0){
        if(r1 === r2){
            console.log(-1)
        } 
        else{
        console.log(0)
        }
    } else {
        if (d > out || d < inCircle){
            console.log(0)
        } 
        else if(d === out || d === inCircle){
            console.log(1)
        } 
        else if (d < out){
            console.log(2)
        }
    }
}