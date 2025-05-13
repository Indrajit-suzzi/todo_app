document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => renderTask(task));

  addTaskButton.addEventListener("click", () => {
    let taskText = todoInput.value.trim();
    if (taskText == "") return;

    const newTAsk = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTAsk);
    saveTask();
    todoInput.value = ""; //clear input
  });

  function renderTask(task){
    console.log(task)
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
})