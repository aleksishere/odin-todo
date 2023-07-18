import { updateIDs } from "./accessData";
import parseISO from "date-fns/parseISO";
import isValid from 'date-fns/isValid'

function drawEditModal(element, tasksList) {
    let id = element.parentNode.parentNode.parentNode.parentNode.id;
    let titleValue = document.getElementById('titleEdit');
    let descriptionValue = document.getElementById('descriptionEdit');
    let dueDateValue = document.getElementById('dueDateEdit');
    let editPopout = document.getElementById('editPopout');
    let saveButton = document.getElementById('saveButtonEdit');
    let closeButton = document.getElementById('closeButtonEdit');

    titleValue.value = tasksList[id]['title'];
    descriptionValue.value = tasksList[id]['description'];
    dueDateValue.value = parseISO(tasksList[id]['dueDate']);
    editPopout.showModal();

    closeButton.addEventListener('click', () => {
        editPopout.close();
    });
    saveButton.addEventListener('click', () => {
        if(titleValue.value != '' && descriptionValue.value != '' && isValid(parseISO(dueDateValue.value)) == true) {
            tasksList[id]['title'] = titleValue.value;
            tasksList[id]['description'] = descriptionValue.value;
            tasksList[id]['dueDate'] = parseISO(dueDateValue.value);
            updateIDs(tasksList);
            editPopout.close();
        } else {
            return false;
        }
    })
}


export default drawEditModal;