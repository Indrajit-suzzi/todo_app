const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = [];

addTaskButton.addEventListener("click", () => {
  let taskText = todoInput.value.trim();
  if (taskText == "") return;

  const newTAsk = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(newTAsk);
  todoInput.value = ""; //clear input
});
