let tasks = [];

// Add
function addTask() {
  let input = document.getElementById("taskInput");
  let value = input.value;

  if (value === "") return;

  tasks.push(value);
  input.value = "";
  renderList(); 
}

// Delete 
function deleteTask(index) {
  tasks.splice(index, 1);
  renderList(); 
}


// Display 
function renderList() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;

    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => deleteTask(index);

    li.appendChild(btn);
    list.appendChild(li);
  });
}

// Assert
function assert(condition, message) {
  console.log((condition ? "PASS: " : "FAIL: ") + message);
}

// Add my tests
function testAdd() {
  tasks = [];
  renderList();

  document.getElementById("taskInput").value = "Homework";
  addTask();

  assert(tasks.length === 1, "task added");
  assert(tasks[0] === "Homework", "correct value");
  assert(document.getElementById("taskInput").value === "", "input cleared");

  // edge case
  document.getElementById("taskInput").value = "";
  addTask();

  assert(tasks.length === 1, "empty not added");
}

// Delete my tests
function testDelete() {
  tasks = ["A", "B", "C"];
  renderList();

  deleteTask(1);

  assert(tasks.length === 2, "task removed");
  assert(tasks[1] === "C", "items shift correctly");
  assert(!tasks.includes("B"), "deleted item gone");
}

// Run all my tasks
function runTests() {
  console.clear();

  let savedTasks = [...tasks];
  testAdd();
  testDelete();

  tasks = savedTasks;
  renderList(); 
}
