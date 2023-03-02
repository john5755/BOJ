let fs = require('fs')

let [x, y, w, h] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(n => Number(n))

let ans = Math.min(x, y, w-x, h-y)

console.log(ans)
