//Array class
class MyArray{
    constructor(){
      this.length = 0;
      this.data = {};
    }
    get(index){
      return this.data[index]
    }
    push(item){
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }
    pop(){
      const lastItem = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return lastItem;
    }
    poll(){
        const item = this.data[0];
        delete this.data[0]
        return item
    }
    delete(index){
      const item = this.data[index];
      this.shiftItems(index);
      return item
    }
    shiftItems(index){
      for(let i=index; i<this.length-1; i++){
        this.data[index]=this.data[index+1];
      }
      delete this.data[this.length-1];
      this.length--;
    }
  }
  
  const newArray = new MyArray();
  newArray.push('hi');
  newArray.push('Iris');
  newArray.push('!!!');
  //newArray.pop()
  newArray.poll();
  console.log(newArray);
  
