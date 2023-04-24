const fs = require('fs');

const [N, K] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(n => Number(n));

class Queue{
    constructor(){
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    size(){
        if(this.storage[this.rear] === undefined){
            return 0;
        } else{
            return this.rear - this.front + 1;
        }
    }
    
    add(value){
        if(this.size() === 0){
            this.storage['0'] = value;
        } else {
            this.rear += 1;
            this.storage[this.rear] = value;
        }
    }
    
    popleft(){
        let temp;
        if(this.front === this.rear){
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front = 0;
            this.rear = 0;
        } else {
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front += 1;
        }
        return temp;
    }
}

let nums = new Queue();
for(let i = 1; i <= N; i++){
    nums.add(i);
}

let ansArr = [];
while(nums.size() > 0){
    for(let i = 1; i < K; i++){
        let temp = nums.popleft();
        nums.add(temp);
    }
    let target = nums.popleft();
    ansArr.push(target);
}

let ans = ansArr.join(', ');
let answer = `<${ans}>`
console.log(answer);

