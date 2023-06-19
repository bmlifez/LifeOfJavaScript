class Heap {
    constructor(){
        this.heap = [];
    }

    getParentIndex(childIndex){
        return Math.floor((childIndex - 1)/2);
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    getLeftChildFromParent(parentIndex){
        return this.heap[parentIndex*2+1];
    }

    getRightChildFromParent(parentIndex){
        return this.heap[parentIndex*2+2];
    }

    swapIndex(indexOne, indexTwo){
        const temp = this.heap[indexOne]; // get index variable
        this.heap[indexOne] = this.heap[indexTwo]; // swap elements
        this.heap[indexTwo] = temp; // assign value to other index
    }

    peek(){
        if(this.heap.length === 0){
            return null;
        }

        return this.heap[0];
    }
}