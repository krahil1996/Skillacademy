window.addEventListener('load', () => {
    const form = document.querySelector('#task-form');
    const Taskadd = document.querySelector('#smtbtn')
    const input = document.querySelector("#input-box");
    const list = document.querySelector("#taskList");
    const emptyWarn = document.getElementById('emt-msg');
    var emptymsg = document.querySelector('#p-text');
    Taskadd.addEventListener('click', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            setTimeout(() => {
                emptyWarn.innerText = 'Please enter a task';

            }, 1000);
            setInterval(() => {
                emptyWarn.innerText = '';
            }, 5000);
        }
        else {
            // to remove ' the list is empty message is
            emptymsg.innerText = "";
            //add some style
            emptymsg.style.borderColor = "rgb(17 25 56)";
            emptymsg.style.borderStyle = "solid";
            emptymsg.style.borderWidth = "1px";

            // Create LI element and append it in 'ol'
            const TaskList = document.createElement('li');
            const tasklistDiv = document.createElement('div');
            inputtext = document.createTextNode(input.value)
            list.appendChild(TaskList);
            TaskList.appendChild(tasklistDiv);
            tasklistDiv.appendChild(inputtext);

            // create div for action button
            const action_buttonDiv = document.createElement('Div');
            TaskList.appendChild(action_buttonDiv);

            // Edit button Create
            const task_edit_button = document.createElement("button");
            task_edit_button.classList.add("t-btn");
            task_edit_button.innerHTML = "Edit";
            // Delete button Create
            const task_delete_button = document.createElement("button");
            task_delete_button.classList.add("t-btn");
            task_delete_button.innerHTML = "Delete";
            //append button in Div 
            action_buttonDiv.appendChild(task_edit_button);
            action_buttonDiv.appendChild(task_delete_button);

            // Edit button functionality

            task_edit_button.addEventListener('click', () => {

                if (task_edit_button.innerText == "Edit") {
                    taskinput = document.createElement("input");
                    taskinput.type = "text";
                    taskinput.value = 'tasklistDiv'
                    console.log(taskinput);
                    tasklistDiv.appendChild(taskinput);
                    taskinput.classList.add('update-input')
                    taskinput.value = "";
                    taskinput.setAttribute('Placeholder', 'Type text for Edit')
                    taskinput.focus();
                    task_edit_button.innerText = "Save";
                    console.log(tasklistDiv.innerText);

                } else {
                    if (taskinput.value === "") {
                        alert("Please Enter the Task")
                    } else {
                        tasklistDiv.innerText = taskinput.value;
                        task_edit_button.innerText = "Edit";
                    }

                }
            });

            // Delete button functionallity
            task_delete_button.addEventListener('click', () => {
                if (confirm("Are you sure you want to delete this task?")) {
                    list.removeChild(TaskList);
                }
                if (document.getElementById('taskList').innerHTML == 0) {
                    emptymsg.innerHTML = "The list is empty"
                    emptymsg.style.border = "none";
                }

            })
        }

        input.value = "";
    })

})
