document.addEventListener("DOMContentLoaded", () => {
  let taskList = document.getElementById("tasks") 
  let taskForm = document.getElementById("create-task-form")
    taskForm.addEventListener('submit', function(e) {
      e.preventDefault()
      let userInputField = e.target.querySelector("#new-task-description")
      let userInputString = userInputField.value 
      let taskListItem = document.createElement("li")
      taskListItem.textContent = userInputString
      taskList.appendChild(taskListItem)
    });
});