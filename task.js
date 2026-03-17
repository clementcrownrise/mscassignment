class Task {
  constructor(name, start, end, priority) {
    this.name = name;
    this.start = start;   // number (e.g., timestamp or hour)
    this.end = end;
    this.priority = priority; // "High", "Medium", "Low"
  }
}


function sortTasksByStart(tasks) {
  return tasks.sort((a, b) => a.start - b.start);
}

function groupByPriority(tasks) {
  const groups = {};

  for (let task of tasks) {
    if (!groups[task.priority]) {
      groups[task.priority] = [];
    }
    groups[task.priority].push(task);
  }

  return groups;
}


function findOverlappingTasks(tasks) {
  const sorted = sortTasksByStart([...tasks]); // avoid modifying original
  const overlaps = [];

  for (let i = 0; i < sorted.length - 1; i++) {
    let current = sorted[i];
    let next = sorted[i + 1];

    if (current.end > next.start) {
      overlaps.push([current, next]);
    }
  }

  return overlaps;
}



