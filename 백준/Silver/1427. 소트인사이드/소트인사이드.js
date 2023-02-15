let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim()

let ans = input.split('').sort((a,b) => b-a).join('')
console.log(ans)