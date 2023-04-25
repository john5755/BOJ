const fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let T = parseInt(input.shift());

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

let answer = [];
for(let i = 0; i < T; i++){
    let[N, M] = input[2 * i].split(' ').map(n => Number(n));
    let ranks = input[2 * i + 1].split(' ').map(n => Number(n));
    let queue = new Queue();
    let ans = 0;
    for(let i = 0; i < N; i++){
        queue.add(ranks[i]);
    }
    ranks.sort(function(a, b){
        return b - a;
    });
    let idx = 0;
    while(idx < N){
        let now = ranks[idx];
        while(true){
            let start = queue.front;
            let temp = queue.popleft()
            if(temp === now){
                ans += 1;
                if(start === M) idx = N;
                break;
            } else {
                queue.add(temp);
                if(start === M){
                    M = queue.rear;
                }
            }
        }
        idx += 1;
    }
    answer.push(ans);
}

console.log(answer.join('\n'));