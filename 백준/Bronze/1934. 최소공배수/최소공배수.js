let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let T = parseInt(input.shift())

let nums = input.map(n => n.split(' ').map(m => Number(m)))

let ans = [];
for(let i = 0; i < T; i++){
    let maxT = nums[i][0] * nums[i][1]
    let temp = nums[i][0] * nums[i][1]
    let minT = Math.min(...nums[i])
    for(let j = 1; j <= minT; j++){
        if(nums[i][0] % j === 0 && nums[i][1] % j === 0){
            temp = maxT / j
        }
    }
    ans.push(temp)
}

console.log(ans.join('\n'))

