const fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let [N, M] = input[0].split(' ').map(n => Number(n));
let locs = input[1].split(' ').map(n => Number(n));

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
    
    rotateLeft(){
        let temp = this.popleft();
        this.add(temp);
    };
    
    rotateRight(){
        let current = this.front;
        let last = this.storage[this.rear];
        let now = this.storage[current];
        let next;
        while(current < this.rear){
            let next = this.storage[current + 1]
            this.storage[current + 1] = now;
            current += 1;
            now = next;
        };
        this.storage[this.front] = last;
    }
    
    extract(value){
        if(this.storage[this.front] === value){
            this.popleft();
            return 0;
        };
        let start = this.front
        let left = 0;
        while(this.storage[start] !== value){
            start += 1;
            left += 1;
        }
        let right = this.size() - left;
        let cnt = 0;
        if(left <= right){
            while(left > 0){
             this.rotateLeft();
             left -= 1;
             cnt += 1;
            }          
            this.popleft();
        } else {
            while(right > 0){
                this.rotateRight();
                right -= 1;
                cnt += 1;
            }
            this.popleft();
        }
        return cnt;
    }
};

let queue = new Queue();
for(let i = 1; i <= N; i++){
    queue.add(i);
};

let ans = 0;
for(let i = 0; i < M; i++){
    let temp = queue.extract(locs[i]);
    ans += temp;
}

console.log(ans)
