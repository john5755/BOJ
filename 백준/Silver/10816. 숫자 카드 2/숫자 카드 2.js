let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let N = Number(input.shift())
let cards = input.shift().split(' ')
let M = Number(input.shift())
let targets = input.shift().split(' ')

let carDict = {}
for(card of cards){
    if (card in carDict){
        let temp = carDict[card] + 1
        carDict[card] = temp
    } else {
        carDict[card] = 1
    }
}

let ans = []
for(let i = 0; i < M; i++){
    if(targets[i] in carDict){
    ans.push(carDict[targets[i]])
    } else {
        ans.push('0')
    }
}

console.log(ans.join(' '))