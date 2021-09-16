class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = {
            value: value,
            next:null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = {
            value: value,
            next:this.head
        };
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while ( currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        return array;
    }
    insert(index, value){
        //check params
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
        }
    remove(index){
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
    }
    reverse() {
        if(!this.head.next){
            return this.head;
        }
        let pre= this.head;
        this.tail = this.head;
        let cur = pre.next;
        while(cur){
            const ne = cur.next;
            cur.next = pre;
            pre = cur;
            cur = ne;
        }
        this.head.next = null;
        this.head = pre;
        return this.printList();
    }
    }


const myLinkList = new LinkedList(10);
myLinkList.append(2);
myLinkList.prepend(1);
myLinkList.insert(200, 99);
myLinkList.insert(2, 33);
myLinkList.remove(3);
//
myLinkList.reverse()
console.log(myLinkList)