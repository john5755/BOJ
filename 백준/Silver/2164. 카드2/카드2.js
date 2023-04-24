const fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim();

let N = input * 1;

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

let cards = new Queue();
for(let i = 1; i <= N; i++){
    cards.add(i);
}

while(cards.size() !== 1){
    let garbage = cards.popleft();
    let temp = cards.popleft();
    cards.add(temp);
}

let ans = cards.popleft();
console.log(ans);