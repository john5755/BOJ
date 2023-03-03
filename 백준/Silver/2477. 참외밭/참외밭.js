let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let N = parseInt(input.shift())

let locas = input.map(n => n.split(' ').map(m => Number(m)))

let garo = 0;
let horIdx = 0;
let sero = 0;
let verIdx = 0;
for(let i = 0; i < 6; i++){
  if(locas[i][0] === 1 || locas[i][0] === 2){
      if(locas[i][1] > garo){
          garo = locas[i][1];
          horIdx = i;
      }
  }  else{
      if(locas[i][1] > sero){
          sero = locas[i][1];
          verIdx = i;
      }
  }
};

let vacant = locas[(horIdx + 3) % 6][1] * locas[(verIdx + 3) % 6][1]

let answer = (garo * sero - vacant) * N

console.log(answer)