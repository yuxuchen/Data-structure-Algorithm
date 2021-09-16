class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        }else{
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(!current.left){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }else{
                    if(!current.right){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    lookup(value){
        if(!this.root){
            return false;
        }
        let current = this.root;
        while(current){
            if(value < current.value){
                current = current.left
            }else if(value > current.value){
                current = current.right;
            }else if(value === current.value){
                return current;
            }
        }
        return false;
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
console.log(tree.lookup(20))
//JSON.stringify(traverse(tree.root))