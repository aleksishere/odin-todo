import { removeTask,changeTaskStatus,changePriorityStatus } from "./accessData";

let main = document.getElementById('list-items');
function drawList(tasksList) {
    main.innerText = '';
    for (let index = 0; index < tasksList.length; index++) {
        let listItem = document.createElement('div');
        listItem.classList.add('list-item')
        listItem.id = tasksList[index]['id'];
        main.appendChild(listItem);

        let sidebarWrapper = document.createElement('div');
        sidebarWrapper.classList.add('mt-4');
        listItem.appendChild(sidebarWrapper);

        let checkIcon = document.createElement('img');
        checkIcon.classList.add('w-8','taskIcon');
        if(tasksList[index]['finished'] == 'yes') {
            checkIcon.setAttribute('src','icons/check_circle_icon.svg');
        } else {
            checkIcon.setAttribute('src','icons/blank_check_circle_icon.svg');
        }
        sidebarWrapper.appendChild(checkIcon);

        let textWrapper = document.createElement('div');
        textWrapper.classList.add('flex','flex-col','flex-1');
        listItem.appendChild(textWrapper);

        let topWrapper = document.createElement('div');
        topWrapper.classList.add('topWrapper')
        textWrapper.appendChild(topWrapper);

        let titleWrapper = document.createElement('div');
        topWrapper.appendChild(titleWrapper);

        let titleParagraph = document.createElement('p');
        titleParagraph.innerText = tasksList[index]['title'];
        titleParagraph.classList.add('font-bold','text-5xl');
        titleWrapper.appendChild(titleParagraph);

        let iconsWrapper = document.createElement('div');
        iconsWrapper.classList.add('iconsWrapper');
        topWrapper.appendChild(iconsWrapper);

        let importantIcon = document.createElement('img');
        if(tasksList[index]['priority'] == 'checked') {
            importantIcon.setAttribute('src','icons/pin_angle_fill_icon.svg');
        } else {
            importantIcon.setAttribute('src','icons/push_pin_bold_icon.svg');
        }
        importantIcon.classList.add('importantIcon','h-8');
        iconsWrapper.appendChild(importantIcon);

        let trashIcon = document.createElement('img');
        trashIcon.setAttribute('src','icons/trash_sharp_icon.svg')
        trashIcon.classList.add('trash','h-8');
        iconsWrapper.appendChild(trashIcon);

        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.innerText = tasksList[index]['description'];
        textWrapper.appendChild(descriptionParagraph);

        let dueDateParagraph = document.createElement('p');
        dueDateParagraph.innerText = tasksList[index]['dueDate'];
        dueDateParagraph.classList.add('text-xl','pt-1');
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
    Array.from(document.getElementsByClassName('importantIcon')).forEach(element => {
        element.addEventListener('click', () => {
            changePriorityStatus(element, tasksList);
        })
    });
}

export {drawList};