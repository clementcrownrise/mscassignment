//🔹 A. Array-Based Queue (Fixed Size)
class ArrayQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.size = size;
        this.front = 0;
        this.rear = -1;
        this.length = 0;
    }

    enqueue(element) {
        if (this.length === this.size) {
            throw new Error("Queue is full");
        }
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = element;
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        const value = this.queue[this.front];
        this.front = (this.front + 1) % this.size;
        this.length--;
        return value;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.queue[this.front];
    }

    isEmpty() {
        return this.length === 0;
    }
}

//🔹 B. Linked List-Based Queue (Dynamic Size)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(element) {
        const newNode = new Node(element);

        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        const value = this.front.value;
        this.front = this.front.next;

        if (!this.front) {
            this.rear = null;
        }

        return value;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.front.value;
    }

    isEmpty() {
        return this.front === null;
    }
}


//2. Priority Queue Implementations
//A. Min-Heap-Based Priority Queue

class MinHeapPriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex] <= this.heap[index]) break;

            [this.heap[parentIndex], this.heap[index]] =
                [this.heap[index], this.heap[parentIndex]];

            index = parentIndex;
        }
    }

    extractMin() {
        if (this.isEmpty()) {
            throw new Error("Priority Queue is empty");
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }

    peekMin() {
        if (this.isEmpty()) {
            throw new Error("Priority Queue is empty");
        }
        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

// B. Ordered Array-Based Priority Queue

class OrderedArrayPriorityQueue {
    constructor() {
        this.queue = [];
    }

    insert(value) {
        // Insert while maintaining sorted order
        let i = 0;

        while (i < this.queue.length && this.queue[i] <= value) {
            i++;
        }

        this.queue.splice(i, 0, value);
    }

    extractMin() {
        if (this.isEmpty()) {
            throw new Error("Priority Queue is empty");
        }
        return this.queue.shift(); // smallest is at front
    }

    peekMin() {
        if (this.isEmpty()) {
            throw new Error("Priority Queue is empty");
        }
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}
