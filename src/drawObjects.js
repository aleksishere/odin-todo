import { removeTask,changeTaskStatus } from "./accessData";

const section = document.getElementById('addPopout');
const overlay = document.getElementById('overlay');
let main = document.getElementById('list-items');
function drawList(tasksList) {
    main.innerText = '';
    for (let index = 0; index < tasksList.length; index++) {
        let listItem = document.createElement('div');
        listItem.classList.add('list-item')
        listItem.id = tasksList[index]['id'];
        main.appendChild(listItem);

        let sidebarWrapper = document.createElement('div');
        sidebarWrapper.style = 'margin-top: 8px;'
        listItem.appendChild(sidebarWrapper);

        let checkIcon = document.createElement('img');
        checkIcon.setAttribute('src','icons/blank_check_circle_icon.svg');
        checkIcon.classList.add('taskIcon');
        sidebarWrapper.appendChild(checkIcon);

        let textWrapper = document.createElement('div');
        textWrapper.style = 'display: flex; flex-direction: column; flex: 1;'
        listItem.appendChild(textWrapper);

        let topWrapper = document.createElement('div');
        topWrapper.classList.add('topWrapper')
        textWrapper.appendChild(topWrapper);

        let titleWrapper = document.createElement('div');
        topWrapper.appendChild(titleWrapper);

        let titleParagraph = document.createElement('p');
        titleParagraph.innerText = tasksList[index]['title'];
        titleParagraph.style = 'font-weight: 700; font-size: 45px;'
        titleWrapper.appendChild(titleParagraph);

        let iconsWrapper = document.createElement('div');
        iconsWrapper.classList.add('iconsWrapper');
        topWrapper.appendChild(iconsWrapper);

        let trashIcon = document.createElement('img');
        trashIcon.setAttribute('src','icons/trash_sharp_icon.svg')
        trashIcon.classList.add('trash');
        trashIcon.style = 'height: 30px;'
        iconsWrapper.appendChild(trashIcon);

        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.innerText = tasksList[index]['description'];
        textWrapper.appendChild(descriptionParagraph);

        let dueDateParagraph = document.createElement('p');
        dueDateParagraph.innerText = tasksList[index]['dueDate'];
        dueDateParagraph.style = 'font-size: 13px; padding-top: 3px;'
        textWrapper.appendChild(dueDateParagraph);
    }
    Array.from(document.getElementsByClassName('trash')).forEach(element => {
        element.addEventListener('click', () => {
            removeTask(element, tasksList);
        });
    });
    Array.from(document.getElementsByClassName('taskIcon')).forEach(element => {
        element.addEventListener('click', () => {
            changeTaskStatus(element, tasksList);
        });
    });
}

function addClasses() {
    section.classList.add('active');
    overlay.classList.add('active');
}

function removeClasses() {
    event.preventDefault();
    section.classList.remove('active');
    overlay.classList.remove('active');
}

export {drawList,addClasses,removeClasses};