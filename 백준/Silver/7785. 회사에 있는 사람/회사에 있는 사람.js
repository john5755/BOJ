let fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let N = parseInt(input.shift());

let people = input.map(n => n.split(' '));

let commute = new Set();

for(let i = 0; i < N; i++){
    if(people[i][1] === 'enter'){
        commute.add(people[i][0]);
    } else if (people[i][1] === 'leave'){
        commute.delete(people[i][0]);
    };
}

let comArray = Array.from(commute);

comArray.sort().reverse();

console.log(comArray.join('\n'));