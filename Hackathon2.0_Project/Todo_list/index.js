


let input = document.getElementById("input-box");
let tasklist = document.getElementById("taskList");
let emt_msg = document.getElementById("emt-msg");
let instruction = document.getElementById('p-text');

// Create Function to add a new task
function addTask() {
    if (input.value.trim() === '') {
        // alert('Please enter the task name')
        setTimeout(() => {
            emt_msg.innerText = "Please Enter The Task"
        }, 500);

        setInterval(() => {
            emt_msg.innerText = "";
        }, 5000);
    }

    else {
        var li = document.createElement("li");
        li.id = "list";
        li.innerHTML = `${input.value}<div><button type=smbt class=t-btn onclick="editTask(this)"><span>Edit</span></button>
        <button type=smbt class=t-btn "><span>Delete</span></button>
    </div>`;
        tasklist.appendChild(li);
        instruction.innerText = ""
        instruction.style.borderColor = "#463333";
        instruction.style.borderStyle = "solid";
        instruction.style.borderWidth = "2px";
        emt_msg.innerText = "";
        input.value = "";
        li.querySelector("span").addEventListener("click", deleteTask);
        function deleteTask() {
            li.remove(li);
            // if (tasklist.innerText === "") {
            //     instruction.innerText = "The list is empty";
            //     instruction.style.border = "none";
            // }

        }
    }

}



// deleteTask = () => {
//     let li = document.getElementById("list");
//     li.remove(li);




//     let tasklist = document.getElementById("tasklist");
//     let list = document.getElementById("list");
//     tasklist.list.remove(list.parentNode);
//     if (tasklist.innerText === "") {
//         instruction.innerText = "The list is empty";
//         instruction.style.border = "none";
//     }


// }

function editTask(list, newText) {
    // Find the task element by its ID
    let taskElement = document.getElementById("list");


    // Check if the task element exists
    if (taskElement) {
        //new input text
        let newText = prompt("newText");

        // Update the text content of the task element
        taskElement.innerHTML = `${newText} <div><button type=smbt class=t-btn onclick="editTask(this)">Edit</button>
        <button type=smbt class=t-btn onclick="deleteTask(this)">Delete</button>
    </div>`;
        alert("Task edited successfully!");
    } else {
        console.error("Task not found!");
    }
}