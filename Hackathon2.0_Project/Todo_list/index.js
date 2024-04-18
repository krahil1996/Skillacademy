
// Function to add a new task

let inputbox = document.getElementById("input-box");
let tasklist = document.getElementById("taskList");
let emt_msg = document.getElementById("emt-msg");
let instruction = document.getElementById('p-text');
function addTask() {
    if (inputbox.value.trim() === '') {
        // alert('Please enter the task name')
        setTimeout(() => {
            emt_msg.innerText = "Please Enter The Task"
        }, 500);

    }

    else {
        let li = document.createElement("li");
        li.id = "list";
        li.innerHTML = `${inputbox.value}<div><button type=smbt class=t-btn onclick="editTask(this)">Update</button>
        <button type=smbt class=t-btn onclick="deleteTask(this)">Delete</button>
    </div>`;
        tasklist.appendChild(li);
        instruction.innerText = ""
        instruction.style.borderColor = "#463333";
        instruction.style.borderStyle = "solid";
        instruction.style.borderWidth = "2px";

    }

    inputbox.value = "";

    setInterval(() => {
        emt_msg.innerText = "";
    }, 5000);
}

function emtyMsg() {


}


deleteTask = () => {
    let tasklist = document.getElementById("taskList");

    if (tasklist.innerText === "") {
        instruction.innerText = "The list is empty";
        instruction.style.border = "none";
    }


}
