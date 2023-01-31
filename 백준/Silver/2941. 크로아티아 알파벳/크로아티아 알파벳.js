let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim()

let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

for(letter of croatia){
    while (input.includes(letter)){
        input = input.replace(letter, '?')
    }
}

console.log(input.length)