const _Node = require('./node');

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertFirst(item){
        this.head = new _Node(item, this.head) 
    }

    insertLast(item){
        if(this.head === null){
            this.insertFirst(item);
        }
        else{
            let tempNode = this.head;
            while(tempNode.next !==  null){
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item){
        let currNode = this.head;

        if (!this.head) {
            return null;
        }

        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }

        return currNode;
    }

    remove(item){ 
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(item, value){
        
        if(!this.head){
            return null;
        }

        if(this.head.value === item){
            this.head = new _Node(value, this.head.next)
            return;
        }

        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = new _Node(value, currNode.next);
    }

    insertAfter(item, value){
        if(!this.head){
            return null;
        }

        if(this.head.value === item){
            this.head.next = new _Node(value, this.head.next)
            return;
        }

        let currNode = this.head;
        let nextNode = this.head;

        while ((nextNode !== null) && (currNode.value !== item)) {
            currNode = nextNode;
            nextNode = nextNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        currNode.next = new _Node(value, nextNode);
    }

    insertAt(value, position){
        let marker = 1;

        if(!this.head){
            return null;
        }

        if(marker === position){
            this.head.next = new _Node(value, this.head.next)
            return;
        }

        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (marker !== position)) {
            previousNode = currNode;
            currNode = currNode.next;
            marker++;
        }

        if (currNode === null) {
            console.log('Position not found');
            return;
        }
        previousNode.next = new _Node(value, currNode);
    }
}

function display(nodeList){
    if(!nodeList.head){
        return null;
    }
    let currNode = nodeList.head
    while(currNode !== null){
        console.log(currNode)
        currNode = currNode.next
    }
}

function size(nodeList){
    if(!nodeList.head){
        return null;
    }
    let count = 1;
    let currNode = nodeList.head
    while(currNode !== null){
        count++;
        currNode = currNode.next
    }
    return count-1;
}

function isEmpty(nodeList){
    if(!nodeList.head){
        return true;
    }
    return false;
}

function findPrevious(nodeList, item){
    if(!nodeList.head){
        return null;
    }

    if(nodeList.head.value === item){
        return null;
    }

    let currNode = nodeList.head;
    let previousNode = nodeList.head;

    while ((currNode !== null) && (currNode.value !== item)) {
        previousNode = currNode;
        currNode = currNode.next;
    }
    if (currNode === null) {
        console.log('Item not found');
        return;
    }
    return previousNode;
}

function findLast(nodeList){
    if(!nodeList.head){
        return null;
    }

    let currNode = nodeList.head;
    let previousNode = nodeList.head;

    while ((currNode !== null)) {
        previousNode = currNode;
        currNode = currNode.next;
    }
    return previousNode;
}

function reverse_iteration(nodeList){
    if(!nodeList.head){
        return null;
    }
    let finalNode = nodeList.head
    let headNode = nodeList.head;
    while(headNode.next !== null){
        nodeList.insertFirst(headNode.next.value)
        headNode = headNode.next
    }
    finalNode.next = null;
    return nodeList
}

function find_third(nodeList){
    if(!nodeList.head){
        return null;
    }

    if(nodeList.head.next === null || nodeList.head.next.next === null){
        return null;
    }

    let currNode = nodeList.head;
    let nextNextNextNode = currNode.next.next.next;

    while(nextNextNextNode !== null){
        currNode = currNode.next
        nextNextNextNode = currNode.next.next.next;
    }

    return currNode
}

function find_middle(nodeList){
    if(!nodeList.head){
        return null;
    }

    if(nodeList.head.next === null || nodeList.head.next.next === null){
        return null;
    }

    let midNode = nodeList.head;
    let fastNode = nodeList.head;
    while(fastNode !== null){
        midNode = midNode.next;
        fastNode = fastNode.next;
        if(fastNode.next === null){
            break;
        }
        fastNode = fastNode.next;
    }
    return midNode;
}

function cycle(nodeList){
    if(!nodeList.head){
        return null
    }
    let currNode = nodeList.head;
    let pastNodes = {}
    while(currNode !== null){
        if(!pastNodes[currNode.value]){
            pastNodes[currNode.value] = 1
        }else{
            return false
        }
        currNode = currNode.next
    }

    return true;
}

const SLL = new LinkedList();
SLL.insertLast('Apollo');
SLL.insertLast('Boomer');
SLL.insertLast('Helo');
SLL.insertLast('Husker');
SLL.insertLast('Starbuck');
SLL.insertLast('Tauhida');
SLL.remove('Husker');
SLL.insertBefore('Boomer', 'Athena');
SLL.insertAfter('Helo', 'Hotdog');
SLL.insertAt('Kat', 3);
SLL.remove('Tauhida');


// display(SLL);
// console.log(isEmpty(SLL));
// console.log(findPrevious(SLL, 'Helo'))
// console.log(findLast(SLL))
// display(reverse_iteration(SLL))
// console.log(find_third(SLL))
// display(SLL)
// console.log(find_middle(SLL));
console.log(cycle(SLL))
