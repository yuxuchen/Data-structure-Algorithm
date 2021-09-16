//discord
//udemy
//google

class Stack{
    constructor(){
        this.array = [];
    }
    peek(){
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
    }
    //isEmpty
}

const a = new Stack(10);
a.push("discord")
a.push("udemy")
a.push("google")

console.log(a)