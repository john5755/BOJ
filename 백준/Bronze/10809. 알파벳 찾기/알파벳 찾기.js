let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim()

let alphas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let ans = ''
for (let el of alphas){
    ans += input.indexOf(String(el))
    ans += ' '
}

console.log(ans.trim())