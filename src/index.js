import { updateIDs } from "./accessData";
import './style.css';
import { drawProjects, Project,getProjectNames} from "./drawProjects";

let projects = [{"name": "All Tasks", "color": "#000"}];
let tasksList = [];
if(localStorage.getItem('tasks') === null) {
    tasksList = [];
} else {
    tasksList = JSON.parse(localStorage.getItem('tasks'));
    updateIDs(tasksList);
}
if(localStorage.getItem('projects') === null) {
    projects = [{"name": "All Tasks", "color": "#000"}];
} else {
    projects = JSON.parse(localStorage.getItem('projects'));
    updateIDs(tasksList,projects);
}
if(localStorage.theme == 'dark') {
    document.documentElement.classList.add('dark');
} else {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark');
}

drawProjects(tasksList);

const submitTask = document.getElementById('submitTask');
const section = document.getElementById('addPopout');
const projectModal = document.getElementById('addProjectModal');
const projectSave = document.getElementById('saveButtonProject');

//MANUAL THEME SETTINGS
document.getElementById('darkmode').addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light'
    } else{
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark'
    }
})

document.getElementById('addProject').addEventListener('click', () => {
    projectModal.showModal();
})
document.getElementById('closeButtonProject').addEventListener('click', () => {
    projectModal.close();
})
document.getElementById('taskAdd').addEventListener('click', () => {
    getProjectNames();
    section.showModal();
})
document.getElementById('taskClose').addEventListener('click', () => {
    section.close();
})

class Task {
    constructor(title,description,dueDate,priority,finished,project,id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.finished = finished;
        this.project = project;
        this.id = id;
    }

}

submitTask.addEventListener('click', () => {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority');
    let option = document.getElementById('projectSelect').value;
    if(priority.checked) { priority = 'checked'; } else { priority = 'unchecked';}
    if(title == '' || description == '' || dueDate == '') {
        return false;
    } else {
        let task = new Task(title,description,dueDate,priority,"no",option);
        tasksList.push(task);
        section.close();
        updateIDs(tasksList);
        console.log(task);
    }
})

projectSave.addEventListener('click', () => {
    let title = document.getElementById('projectName').value;
    if(title != '') {
        let project = new Project(title);
        projects.push(project);
        updateIDs(tasksList);
        projectModal.close();
    }
    localStorage.setItem('projects', JSON.stringify(projects));
})

export {projects};