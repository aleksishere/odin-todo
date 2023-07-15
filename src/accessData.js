function removeTask(e,tasksList) {
    document.getElementById(e.parentNode.parentNode.parentNode.parentNode.id).remove();
    tasksList.splice(e.parentNode.parentNode.parentNode.parentNode.id,1);
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

export {removeTask, changeTaskStatus};