import { drawList } from "./drawObjects";

function updateIDs(tasksList) {
    let dates = []
    let sortedAsc = tasksList.sort(
        (objA, objB) => Number(objA.dueDate) - Number(objB.dueDate),
    );
    for(let index=0; index < tasksList.length; index++) {
        tasksList[index]['id'] = index;
    }
    drawList(tasksList,dates);
}

function removeTask(e,tasksList) {
    document.getElementById(e.parentNode.parentNode.parentNode.parentNode.id).remove();
    tasksList.splice(e.parentNode.parentNode.parentNode.parentNode.id,1);
    updateIDs(tasksList);
}

function changeTaskStatus(e,tasksList) {
    let node = e.parentNode.parentNode;
    if(tasksList[node.id]['finished'] == 'no') {
        tasksList[node.id]['finished'] = 'yes'
        node.getElementsByClassName('taskIcon')[0].setAttribute('src','icons/check_circle_icon.svg');
    } else {
        tasksList[node.id]['finished'] = 'no'
        node.getElementsByClassName('taskIcon')[0].setAttribute('src','icons/blank_check_circle_icon.svg');
    }
}

function changePriorityStatus(e,tasksList) {
    let node = e.parentNode.parentNode.parentNode.parentNode;
    if(tasksList[node.id]['priority'] == 'unchecked') {
        tasksList[node.id]['priority'] = 'checked'
        node.getElementsByClassName('importantIcon')[0].setAttribute('src','icons/pin_angle_fill_icon.svg');
    } else {
        tasksList[node.id]['priority'] = 'unchecked'
        node.getElementsByClassName('importantIcon')[0].setAttribute('src','icons/push_pin_bold_icon.svg');
    }
}

export {removeTask, changeTaskStatus, changePriorityStatus, updateIDs};