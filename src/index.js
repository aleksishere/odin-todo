import { addClasses,removeClasses } from "./drawObjects";
import { updateIDs } from "./accessData";

const tasksList = [];
let counter = 0;
const addButton = document.getElementById('addButton');
const closeButton = document.getElementById('closeButton');
const submitButton = document.getElementById('submit');
addButton.addEventListener('click', addClasses)
closeButton.addEventListener('click', removeClasses)

class Task {
    constructor(title,description,dueDate,priority,finished,id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.finished = finished;
        this.id = id;
    }

}

submitButton.addEventListener('click', () => {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    dueDate = dueDate.replace('T',' ');
    let priority = document.getElementById('priority');
    if(priority.checked) { priority = 'checked'; } else { priority = 'unchecked';}
    verifyData(title,description,dueDate,priority);
})

function verifyData(title,description,dueDate,priority) {
    if(title == '' || description == '' || dueDate == '') {
        return false;
    } else {
        let task = new Task(title,description,dueDate,priority,"no");
        tasksList.push(task);
        removeClasses();
        updateIDs(tasksList);
    }
}