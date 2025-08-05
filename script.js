function addTask() {
    const taskText = document.getElementById("taskInput").value.trim();
    const taskTime = document.getElementById("taskDateTime").value;
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${taskText}</strong><br/>
      <small>⏰ ${taskTime ? new Date(taskTime).toLocaleString() : "No time set"}</small>
      <div class="task-buttons">
        <button onclick="markDone(this)">✔ Done</button>
        <button onclick="editTask(this)">✏ Edit</button>
        <button class="delete" onclick="deleteTask(this)">🗑 Delete</button>
      </div>
    `;
  
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDateTime").value = "";
  }
  
  function markDone(btn) {
    btn.closest("li").classList.toggle("completed");
  }
  
  function deleteTask(btn) {
    btn.closest("li").remove();
  }
  
  function editTask(btn) {
    const li = btn.closest("li");
    const taskText = prompt("Edit your task:", li.querySelector("strong").innerText);
    if (taskText !== null && taskText.trim() !== "") {
      li.querySelector("strong").innerText = taskText;
    }
  }