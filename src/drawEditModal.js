import { updateIDs } from "./accessData";
import parseISO from "date-fns/parseISO";
import isValid from 'date-fns/isValid'
import { getProjectNames } from "./drawProjects";

function drawEditModal(element, tasksList) {
    getProjectNames();
    let id = element.parentNode.parentNode.parentNode.parentNode.id;
    let titleValue = document.getElementById('title');
    let descriptionValue = document.getElementById('description');
    let dueDateValue = document.getElementById('dueDate');
    let taskModal = document.getElementById('taskModal');
    let option = document.getElementById('projectSelect');
    titleValue.value = tasksList[id]['title'];
    descriptionValue.value = tasksList[id]['description'];
    dueDateValue.value = tasksList[id]['dueDate'];
    option.value = tasksList[id]['project'];

    let taskButtons = document.getElementById('taskButtons');
    taskButtons.innerText = ''
    
    let addButton = document.createElement('button');
    addButton.id = 'editTask';
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
    taskModal.showModal();

    document.getElementById('taskClose').addEventListener('click', () => {
        taskModal.close();
    });

    document.getElementById('editTask').addEventListener('click', () => {
        if(titleValue.value != '' && descriptionValue.value != '' && isValid(parseISO(dueDateValue.value)) == true) {
            tasksList[id]['title'] = titleValue.value;
            tasksList[id]['description'] = descriptionValue.value;
            tasksList[id]['dueDate'] = dueDateValue.value;
            tasksList[id]['project'] = option.value;
            updateIDs(tasksList);
            taskModal.close();
        } else {
            return false;
        }
    })
}


export default drawEditModal;