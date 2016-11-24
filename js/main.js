/**
 * Created by Marina on 21.11.2016.
 */
var counter = 0;
function todoList() {
    var item = document.getElementById('todoInput').value;
    var text = document.createTextNode(item);
    var li = document.createElement('li');
    var p = document.createElement('p');
    var buttonDelete = document.createElement('button');

    buttonDelete.className = "button-delete";
    li.appendChild(p);
    p.appendChild(text);
    li.appendChild(buttonDelete);
    if (item) {
        document.getElementById('todoList').appendChild(li);
    }
    p.addEventListener('click', checkTask, false);
    buttonDelete.addEventListener('click', deleteTask, true);
    countTasks();
}

function deleteTask() {
    var allTasks = document.getElementsByTagName('li');
    for (var i = 0; i < allTasks.length; i++) {
        this.parentNode.classList.add('delete-task');
    }
    countTasks();
}

function checkTask(task) {
    task.target.classList.toggle('checked');
    countTasks();
}

function countTasks() {
    var allTasks = document.getElementsByTagName('li');
    var checkedTasks = document.getElementsByClassName('checked');
    var deletedTasks = document.getElementsByClassName('delete-task');
    var count = checkedTasks.length;
    for (var i = 0; i < deletedTasks.length; i++) {
        if (deletedTasks[i].firstChild.className == 'checked') {
            count--;
        }
    }
    document.getElementById("countOfDone").textContent = count;
    document.getElementById("countOfAll").textContent = allTasks.length - deletedTasks.length;
    document.getElementById("countOfNotDone").textContent = allTasks.length - deletedTasks.length - count;
}