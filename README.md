# To-Do List V1 with Assertions

## 1. Data Model

* `tasks` (array): Stores all to-do items as strings.

* `addTask()`
  Gets the value from the input box.
  If the input is empty, it does nothing.
  Otherwise, it adds the task to the `tasks` array and clears the input.

* `deleteTask(index)`
  Removes a task from the `tasks` array using its index.

* `assert(condition, message)`
  Checks if a condition is true.
  Logs "PASS" if true and "FAIL" if false.

* `testAdd()`
  Tests that adding a task works correctly.

* `testDelete()`
  Tests that deleting a task works correctly.

* `runTests()`
  Runs all test functions.

---

## 2. Assertion Ideas

### Add Task Assertions

* `tasks.length === 1`
  → Proves the **count increases** when a task is added.

* `tasks[0] === "Homework"`
  → Proves the **correct value is stored** (structure check).

* `input.value === ""`
  → Proves the **input is cleared** after adding.

* `tasks.length === 1` (after empty input)
  → Proves an **edge case**: empty input does not add a task.

---

### Delete Task Assertions

* `tasks.length === 2`
  → Proves the **count decreases** after deletion.

* `tasks[1] === "C"`
  → Proves the **array structure updates correctly** (items shift).

* `!tasks.includes("B")`
  → Proves **non-mutation of other items** and that the correct item was removed.

---

## 3. LLM Snippet

**Prompt:**
"Help me write simple JavaScript assertions for a to-do list with add and delete buttons."

**Excerpt:**
`assert(tasks.length === 1, "task added");`

**What I changed and why:**

* I simplified the code by removing unnecessary UI rendering during tests
* I shortened the function names to make for better understanding
* I combined the assert output into one line for readability
* I added an edge case test to ensure empty input is not added

---

## 4. Orchestration Concepts
* **What I wanted:**
  A simple to-do list with clear and easy-to-understand assertions.

* **What I got:**
  A more complex version with extra functions that were harder to explain.

* **How I revised it:**
  I simplified the code by removing extra logic, keeping only what was needed for testing, and focusing on clarity so I can explain each line easily.

---
