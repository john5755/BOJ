class Queue{
    constructor(){
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    
    size(){
        if(this.storage[this.rear] === undefined){
            return 0;
        } else {
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

let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let N = parseInt(input.shift());

let answer = [];
let queue = new Queue();
for(let i = 0; i < N; i++){
    if(input[i] === 'pop'){
        if(queue.size() === 0){
            answer.push(-1);
        } else {
            answer.push(queue.popleft());
        }
    } else if(input[i] === 'size'){
        answer.push(queue.size());
    } else if(input[i] === 'empty'){
        if(queue.size() === 0){
            answer.push(1)
        } else {
            answer.push(0)
        }
    } else if(input[i] === 'front'){
        if(queue.size() === 0){
            answer.push(-1)
        } else{
            answer.push(queue.storage[queue.front])
        }        
    } else if(input[i] === 'back'){
        if(queue.size() === 0){
            answer.push(-1)
        } else {
            answer.push(queue.storage[queue.rear])
        }
    } else {
        let n = input[i].split(' ')[1] * 1;
        queue.add(n);
    }
}

console.log(answer.join('\n'))