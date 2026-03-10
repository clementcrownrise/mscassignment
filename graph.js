class Graph {
  constructor(isDirected = false) {
    this.adjacencyList = new Map();
    this.isDirected = isDirected;
  }

  // Add a new vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge between two vertices
  addEdge(src, dest) {
    if (!this.adjacencyList.has(src)) this.addVertex(src);
    if (!this.adjacencyList.has(dest)) this.addVertex(dest);

    this.adjacencyList.get(src).push(dest);
    if (!this.isDirected) {
      this.adjacencyList.get(dest).push(src);
    }
  }

  // Remove an edge
  removeEdge(src, dest) {
    this.adjacencyList.set(
      src,
      this.adjacencyList.get(src).filter(v => v !== dest)
    );
    if (!this.isDirected) {
      this.adjacencyList.set(
        dest,
        this.adjacencyList.get(dest).filter(v => v !== src)
      );
    }
  }

  // Print the graph structure
  printGraph() {
    for (let [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    }
  }

  // Breadth-First Search (BFS)
  bfs(startNode) {
    const visited = new Set();
    const queue = [startNode];
    const result = [];

    visited.add(startNode);

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    console.log("BFS Order:", result.join(" -> "));
  }

  // Depth-First Search (DFS)
  dfs(startNode) {
    const visited = new Set();
    const result = [];

    const traverse = (vertex) => {
      if (!vertex || visited.has(vertex)) return;

      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)) {
        traverse(neighbor);
      }
    };

    traverse(startNode);
    console.log("DFS Order:", result.join(" -> "));
  }
}