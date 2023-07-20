import { updateIDs } from "./accessData";
import './style.css';
import { drawProjects,getProjectNames} from "./drawProjects";

let projects = ['All Tasks'];
let tasksList = [];
if(localStorage.getItem('tasks') === null) {
    tasksList = [];
} else {
    tasksList = JSON.parse(localStorage.getItem('tasks'));
    updateIDs(tasksList);
}
if(localStorage.getItem('projects') === null) {
    projects = ['All Tasks'];
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

const taskModal = document.getElementById('taskModal');
const projectModal = document.getElementById('projectModal');

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
    let projectButtons = document.getElementById('projectButtons');
    projectButtons.innerText = ''

    let addButton = document.createElement('button');
    addButton.id = 'saveButtonProject';
    addButton.innerText = 'Save';
    addButton.setAttribute('type','button');
    addButton.classList.add('text-2xl','hover:text-3xl','ease-in','duration-300','dark:text-white');
    projectButtons.appendChild(addButton);

    let deleteButton = document.createElement('button');
    deleteButton.id = 'closeButtonProject';
    deleteButton.innerText = 'Close';
    deleteButton.setAttribute('type','button');
    deleteButton.classList.add('text-2xl','hover:text-3xl','ease-in','duration-300','dark:text-white');
    projectButtons.appendChild(deleteButton);

    buttonsclick("addProject");
    projectModal.showModal();
})

document.getElementById('taskAdd').addEventListener('click', () => {
    let taskButtons = document.getElementById('taskButtons');
    taskButtons.innerText = '';

    let addButton = document.createElement('button');
    addButton.id = 'submitTask';
    addButton.innerText = 'Save';
    addButton.setAttribute('type','button');
    addButton.classList.add('text-2xl','hover:text-3xl','ease-in','duration-300','dark:text-white');
    taskButtons.appendChild(addButton);

    let deleteButton = document.createElement('button');
    deleteButton.id = 'taskClose';
    deleteButton.innerText = 'Close';
    deleteButton.setAttribute('type','button');
    deleteButton.classList.add('text-2xl','hover:text-3xl','ease-in','duration-300','dark:text-white');
    taskButtons.appendChild(deleteButton);

    buttonsclick('addTask');
    getProjectNames();
    taskModal.showModal();
})

class Task {
    constructor(title,description,dueDate,finished,project,id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = 'unchecked';
        this.finished = finished;
        this.project = project;
        this.id = id;
    }
}

function buttonsclick(action,id) {
    if(action == 'addProject') {
        document.getElementById('saveButtonProject').addEventListener('click', () => {
            let title = document.getElementById('projectName').value;
            if(title != '' && projects.includes(title) == false) {
                projects.push(title);
                updateIDs(tasksList);
                projectModal.close();
            } else {
                alert("Project already exists!");
            }
            localStorage.setItem('projects', JSON.stringify(projects));
        })
        document.getElementById('closeButtonProject').addEventListener('click', () => {
            projectModal.close();
        })
    } 
    if(action == 'editProject') {
        document.getElementById('editButtonProject').addEventListener('click', (el) => {
            let title = document.getElementById('projectName').value;
            if(title != '' && projects.includes(title) == false) {
                projects[projects.indexOf(id)] = title;
                updateIDs(tasksList);
                projectModal.close();
            } else {
                alert("Project already exists!");
            }
            localStorage.setItem('projects', JSON.stringify(projects));
        })
        document.getElementById('closeButtonProject').addEventListener('click', () => {
            projectModal.close();
        })
    }
    if(action == 'addTask') {
        document.getElementById('submitTask').addEventListener('click', () => {
            let title = document.getElementById('title').value;
            let description = document.getElementById('description').value;
            let dueDate = document.getElementById('dueDate').value;
            let option = document.getElementById('projectSelect').value;
            if(title == '' || description == '' || dueDate == '') {
                return false;
            } else {
                let task = new Task(title,description,dueDate,"no",option);
                tasksList.push(task);
                taskModal.close();
                updateIDs(tasksList);
            }
        })
        document.getElementById('taskClose').addEventListener('click', () => {
            taskModal.close();
        })
    }
}

export {projects,buttonsclick};