import { updateIDs } from "./accessData";
import { projects } from ".";

let currentProject = 'All Tasks';

class Project {
    constructor(name) {
        this.name = name;
    }
}


function drawProjects(tasksList) {
    let projectWrapper = document.getElementById('taskProjects');
    projectWrapper.innerText = '';
    for (let index = 0; index < projects.length; index++) {
       let projectDiv = document.createElement('div');
       projectWrapper.appendChild(projectDiv);
       projectDiv.innerText = projects[index]['name'];
       projectDiv.classList.add('projectItem','text-3xl','py-2','my-1','border-b-2','border-black/20','dark:border-white/80');
    }
    Array.from(document.getElementsByClassName('projectItem')).forEach(element => {
        element.addEventListener('click', (el) => {
            currentProject = el.target.innerText;
            updateIDs(tasksList);
        })
    });
}

function getProjectNames() {
    let projectSelect = document.getElementById('projectSelect');
    projectSelect.innerText = '';
    for (let index = 0; index < projects.length; index++) {
        let option = document.createElement('option')
        option.innerText = projects[index]['name'];
        projectSelect.appendChild(option);
    }
}

export {drawProjects, Project, currentProject, getProjectNames};