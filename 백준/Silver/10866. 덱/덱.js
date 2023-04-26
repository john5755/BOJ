let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let N = parseInt(input.shift());

class Queue{
    constructor(){
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    };
    
    size(){
        if(this.storage[this.rear] === undefined){
            return 0;
        } else {
            return this.rear - this.front + 1;
        }
    };
    
    addRight(value){
        if(this.size() === 0){
            this.storage['0'] = value;
        } else {
            this.rear += 1;
            this.storage[this.rear] = value;
        }
    };
    
    addLeft(value){
        if(this.size() === 0){
            this.storage['0'] = value;
        } else{
        let start = this.front;
        let now = this.storage[this.front];
        while(start < this.rear){
            let next = this.storage[start + 1];
            this.storage[start + 1] = now;
            now = next;
            start += 1;
        };
        this.rear += 1;
        this.storage[this.rear] = now;
        this.storage[this.front] = value;
        }
    };
    
    popLeft(){
        let temp;
        if(this.front === this.rear){
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.rear = 0;
            this.front = 0;
        } else {
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front += 1;
        }
        return temp;
    };
    
    popRight(){
        let temp;
        if(this.front === this.rear){
            temp = this.storage[this.rear];
            delete this.storage[this.rear];
            this.front = 0;
            this.rear = 0;
        } else {
            temp = this.storage[this.rear];
            delete this.storage[this.rear];
            this.rear -= 1;
        }
        return temp;
    };
};

let queue = new Queue();
let ans = [];
for(let i = 0; i < N; i++){
    if(input[i] === 'pop_front'){
        if(queue.size() === 0){
            ans.push('-1');
        } else{
            ans.push(queue.popLeft());
        }
    } else if (input[i] === 'pop_back'){
        if(queue.size() === 0){
            ans.push('-1');
        } else {
            ans.push(queue.popRight());
        }
    } else if (input[i] === 'size'){
        ans.push(queue.size());
    } else if (input[i] === 'empty'){
        if(queue.size() === 0){
            ans.push('1')
        } else{
            ans.push('0')
        }
    } else if (input[i] === 'front'){
        if(queue.size() === 0){
            ans.push('-1');
        } else {
            ans.push(queue.storage[queue.front]);
        }
    } else if (input[i] === 'back'){
        if(queue.size() === 0){
            ans.push('-1');
        } else {
            ans.push(queue.storage[queue.rear]);
        }
    } else {
        let [act, num] = input[i].split(' ');
        if(act === 'push_front'){
            queue.addLeft(num);
        } else {
            queue.addRight(num);
        }
    }
}

console.log(ans.join('\n'));