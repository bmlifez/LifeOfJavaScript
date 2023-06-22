class Heap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.getLeftChildFromParent(index) < this.heap.length;
  }

  getLeftChildFromParent(parentIndex) {
    return this.heap[parentIndex * 2 + 1];
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  getRightChildFromParent(parentIndex) {
    return this.heap[parentIndex * 2 + 2];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne]; // get index variable
    this.heap[indexOne] = this.heap[indexTwo]; // swap elements
    this.heap[indexTwo] = temp; // assign value to other index
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap[0];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let largerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        largerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] > this.heap[largerChildIndex]) {
        break;
      } else {
        this.swap(index, largerChildIndex);
      }
      index = largerChildIndex;
    }
  }
}
