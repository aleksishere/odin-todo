import { removeTask,changeTaskStatus,changePriorityStatus } from "./accessData";
import drawEditModal from "./drawEditModal";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { currentProject} from "./drawProjects";

let main = document.getElementById('list-items');
function drawList(tasksList) {
    main.innerText = '';
    for (let index = 0; index < tasksList.length; index++) {
        if(currentProject == "All Tasks" || currentProject == tasksList[index]['project']) {
            let listItem = document.createElement('div');
            listItem.classList.add('list-item','border-b-2','border-black/20','dark:border-white/80')
            listItem.id = tasksList[index]['id'];
            main.appendChild(listItem);
    
            let sidebarWrapper = document.createElement('div');
            sidebarWrapper.classList.add('mt-4','shrink-0');
            listItem.appendChild(sidebarWrapper);
    
            let checkIcon = document.createElement('img');
            checkIcon.classList.add('w-8','taskIcon','dark:invert','hover:cursor-pointer');
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
    
            let titleParagraph = document.createElement('div');
            titleParagraph.innerText = tasksList[index]['title'];
            titleParagraph.classList.add('font-bold','text-5xl');
            titleWrapper.appendChild(titleParagraph);
    
            let iconsWrapper = document.createElement('div');
            iconsWrapper.classList.add('iconsWrapper','shrink-0');
            topWrapper.appendChild(iconsWrapper);
    
            let editIcon = document.createElement('img');
            editIcon.setAttribute('src', 'icons/pen-to-square-regular.svg')
            editIcon.classList.add('editIcon','h-7','hover:h-8','ease-in','duration-200','dark:invert','hover:cursor-pointer');
            iconsWrapper.appendChild(editIcon);
    
            let importantIcon = document.createElement('img');
            if(tasksList[index]['priority'] == 'checked') {
                importantIcon.setAttribute('src','icons/pin_angle_fill_icon.svg');
            } else {
                importantIcon.setAttribute('src','icons/push_pin_bold_icon.svg');
            }
            importantIcon.classList.add('importantIcon','h-8','hover:h-9','ease-in','duration-200','dark:invert','hover:cursor-pointer');
            iconsWrapper.appendChild(importantIcon);
    
            let trashIcon = document.createElement('img');
            trashIcon.setAttribute('src','icons/trash_sharp_icon.svg')
            trashIcon.classList.add('trash','h-8','hover:h-9','ease-in','duration-200','dark:invert','hover:cursor-pointer');
            iconsWrapper.appendChild(trashIcon);
    
            let descriptionParagraph = document.createElement('div');
            descriptionParagraph.innerText = tasksList[index]['description'];
            textWrapper.appendChild(descriptionParagraph);
    
            let dueDateParagraph = document.createElement('p');
            dueDateParagraph.innerText = format((parseISO(tasksList[index]['dueDate'])), 'p PPPP');
            dueDateParagraph.classList.add('text-xl','pt-1');
            textWrapper.appendChild(dueDateParagraph);
        }
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
    Array.from(document.getElementsByClassName('editIcon')).forEach(element => {
        element.addEventListener('click', () => {
            drawEditModal(element, tasksList);
        });
    })
}

export {drawList};