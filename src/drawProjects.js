import { updateIDs } from "./accessData";
import { projects, buttonsclick } from ".";

let currentProject = 'All Tasks';

function drawProjects(tasksList) {
    let projectWrapper = document.getElementById('taskProjects');
    projectWrapper.innerText = '';
    for (let index = 0; index < projects.length; index++) {
        let projectDiv = document.createElement('div');
        projectWrapper.appendChild(projectDiv);
        projectDiv.classList.add('text-3xl','py-2','my-1','border-b-2','border-black/20','dark:border-white/80','flex','justify-between');

        let projectTitle = document.createElement('p')
        projectTitle.innerText = projects[index];
        projectTitle.classList.add('projectTitle','hover:cursor-pointer','hover:underline','underline-offset-2');
        projectDiv.appendChild(projectTitle);

        let iconWrapper = document.createElement('div');
        iconWrapper.classList.add('flex')
        projectDiv.appendChild(iconWrapper);

        let editProject = document.createElement('img');
        editProject.setAttribute('src','icons/pen-to-square-regular.svg');
        editProject.classList.add('editProject','h-7','hover:h-8','ease-in','duration-200','dark:invert','hover:cursor-pointer')
        iconWrapper.appendChild(editProject);

        let deleteProject = document.createElement('img');
        deleteProject.setAttribute('src','icons/trash_sharp_icon.svg');
        deleteProject.classList.add('deleteProject','h-7','hover:h-8','ease-in','duration-200','dark:invert','hover:cursor-pointer')
        iconWrapper.appendChild(deleteProject);
    }
    Array.from(document.getElementsByClassName('projectTitle')).forEach(element => {
        element.addEventListener('click', (el) => {
            currentProject = el.target.innerText;
            updateIDs(tasksList);
        })
    });
    Array.from(document.getElementsByClassName('deleteProject')).forEach(element => {
        element.addEventListener('click', (el) => {
            projects.splice(projects.indexOf(el.target.parentNode.innerText),1);
            localStorage.setItem('projects', JSON.stringify(projects));
            updateIDs(tasksList);
        })
    })
    Array.from(document.getElementsByClassName('editProject')).forEach(element => {
        element.addEventListener('click', (el) => {
            let id = el.target.parentNode.parentNode.getElementsByClassName('projectTitle')[0].innerText;
            let projectButtons = document.getElementById('projectButtons');
            projectButtons.innerText = ''

            let editButton = document.createElement('button');
            editButton.id = 'editButtonProject';
            editButton.innerText = 'Save';
            editButton.setAttribute('type','button');
            editButton.classList.add('text-2xl','hover:text-3xl','ease-in','duration-300','dark:text-white');
            projectButtons.appendChild(editButton);

            let deleteButton = document.createElement('button');
            deleteButton.id = 'closeButtonProject';
            deleteButton.innerText = 'Close';
            deleteButton.setAttribute('type','button');
            deleteButton.classList.add('text-2xl','hover:text-3xl','ease-in','duration-300','dark:text-white');
            projectButtons.appendChild(deleteButton);

            buttonsclick('editProject',id);

            document.getElementById('projectModal').showModal();
        })
    })
}

function getProjectNames() {
    let select = document.getElementById('projectSelect');
    select.innerText = ''
    for (let index = 0; index < projects.length; index++) {
        let option = document.createElement('option')
        option.innerText = projects[index];
        select.appendChild(option);
    }
}

export {drawProjects, currentProject, getProjectNames};