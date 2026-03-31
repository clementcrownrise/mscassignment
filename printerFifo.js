//Step 1: Queue Implementation

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item); // add to rear
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift(); // remove from front
    }
    return null;
  }

  peek() {
    return this.isEmpty() ? null : this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

//Step 2: Print Job & Printer Queue
class PrintJob {
  constructor(name, pages) {
    this.name = name;
    this.pages = pages;
  }

  toString() {
    return `${this.name} (${this.pages} pages)`;
  }
}

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addJob(name, pages) {
    const job = new PrintJob(name, pages);
    this.queue.enqueue(job);
    console.log(`Added: ${job.toString()}`);
  }

  processJob() {
    if (this.queue.isEmpty()) {
      console.log("No jobs to process.");
    } else {
      const job = this.queue.dequeue();
      console.log(`Processing: ${job.toString()}`);
    }
  }

  showQueue() {
    if (this.queue.isEmpty()) {
      console.log("Queue is empty.");
    } else {
      console.log("Current Queue:");
      this.queue.items.forEach(job => {
        console.log(` - ${job.toString()}`);
      });
    }
  }
}

//Step 3: Test the Solution
const printer = new PrinterQueue();

// Add jobs
printer.addJob("Alice", 10);
printer.addJob("Bob", 5);
printer.addJob("Charlie", 20);

console.log("\n--- Queue Status ---");
printer.showQueue();

// Process jobs
console.log("\n--- Processing Jobs ---");
printer.processJob();
printer.processJob();

console.log("\n--- Queue After Processing ---");
printer.showQueue();

// Add another job
printer.addJob("David", 15);

console.log("\n--- Final Queue ---");
printer.showQueue();