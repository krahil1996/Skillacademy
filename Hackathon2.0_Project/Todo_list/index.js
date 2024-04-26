window.addEventListener('load', () => {
    const form = document.querySelector('#task-form');
    const input = document.querySelector("#input-box");
    const list = document.querySelector("#taskList");

    form.addEventListener('click', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            return;
        }

        const taskList = document.createElement('LI');
        taskList.classList.add('task');
        list.appendChild(taskList);

    })

})