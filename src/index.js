import { updateIDs } from "./accessData";
import './style.css';
import parseISO from "date-fns/parseISO";

const tasksList = [];
const addButton = document.getElementById('addButton');
const closeButton = document.getElementById('closeButton');
const submitButton = document.getElementById('submit');
const section = document.getElementById('addPopout');

addButton.addEventListener('click', () => {
    section.showModal();
})
closeButton.addEventListener('click', () => {
    section.close();
})



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
    let dueDate = parseISO(document.getElementById('dueDate').value);
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
        section.close();
        updateIDs(tasksList);
    }
}