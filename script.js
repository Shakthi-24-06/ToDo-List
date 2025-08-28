function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button class="delete" onclick="deleteTask(this)">X</button>
  `;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
  let li = button.parentElement;
  li.style.opacity = "0";
  setTimeout(() => li.remove(), 300);
}
