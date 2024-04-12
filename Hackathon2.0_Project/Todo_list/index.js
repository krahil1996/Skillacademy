// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
    if (taskText === "") return; // Don't add empty tasks
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = taskText + '<button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(li);
    input.value = ""; // Clear input field
}

// Function to edit a task
function editTask(button) {
    var li = button.parentNode;
    var newText = prompt("Edit task:", li.firstChild.textContent);
    if (newText !== null) {
        li.firstChild.textContent = newText;
    }
}

// Function to delete a task
function deleteTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}
