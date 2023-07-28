// Import the required functions from other modules
import { deployToast } from './toast.js';
import { ProjectsList } from './index.js';
import { storeProjects } from './storage.js';
import { de } from 'date-fns/locale';

// DOM elements
const projectContainer = document.querySelector('.project-container');
const taskContainer = document.querySelector('.task-container');
const projectAddButton = document.getElementById('add-proj');
const taskAddButton = document.getElementById('add-task');
const projDialogue = document.querySelector('.add-proj-content');
const taskDialogue = document.querySelector('.add-task-content');
const overlay = document.querySelector('#overlay');
const taskHeading = document.querySelector('.task-heading h2');
const taskHeadingDesc = document.querySelector('.proj-description');

// Variables to keep track of selected project, task, folder, and item type (project or folder)
let selectedProj = -1;
let selectedTask = null;
let selectedFolder = null;
let selectedItemType = 'project';

// Event handler to select a project or folder
const selectProj = (e) => {
    // de-selecting the previously selected project
    document.querySelectorAll('.selected').forEach(proj => {
        if (proj.classList.contains('selected')){
            proj.classList.remove('selected');
            return;
        }
    });
    //  Check if there are any projects
    if (ProjectsList.getProjects()[0] != undefined){
        e.target.parentElement.classList.add('selected');
    }
    
    //  Check if the selected element is a folder or a project and update the tasks for the selected item type
    if (e.target.classList.contains('folder-title') || e.target.classList.contains('folder-title-span') || e.target.classList.contains('material-symbols-outlined')){
        selectedItemType = 'folder';
        if (e.target.classList.contains('folder-title-span')){
            selectedFolder = e.target.textContent;        
        }
        else {
            if (e.target.classList.contains('folder-title')){
                selectedFolder = e.target.querySelector('.folder-title-span').textContent;
            } else {
                selectedFolder = e.target.parentElement.querySelector('.folder-title-span').textContent;
            }
        }
        
        e.target.classList.add('selected');
        updateTasks(ProjectsList.getFolders()[selectedFolder]);
    }
    else {
        selectedItemType = 'project';
        selectedProj = e.target.dataset.index;
        updateTasks(ProjectsList.getProjects()[selectedProj]);
    }
}

// Event handler to delete a task
const deleteTask = (e) => {
    let task,project;
    [task,project] = ProjectsList.findTask(e.target.parentElement.parentElement.firstChild.firstChild.textContent);
    project.removeTask(task);
    //  Update the tasks display for the current project or folder
    updateTasks(getCurrentProj());
}

const createIcon = (name) => {
    const icon = document.createElement('span');
    icon.classList.add('material-symbols-outlined');
    icon.textContent = name;
    return icon;
}

// Function to update the projects list display
const updateProject = () => {
    projectContainer.textContent = '';
    const currentProjects = ProjectsList.getProjects();
    currentProjects.forEach((project,index) => {
        // creating project item
        const projItem = document.createElement('div');
        projItem.classList.add('proj-item');
        projItem.addEventListener('click', (e) => {
            if (e.target.classList.contains('proj-title')){
                selectProj(e)
            }
            else {
                selectProj({target:e.target.firstChild})
            }

        });
        // creating project title
        const projTitle = document.createElement('h4');
        projTitle.classList.add('proj-title');
        projTitle.textContent = project.name;
        projTitle.dataset.index = index;
        // create project delete button
        const projDeleteButton = document.createElement('button');
        projDeleteButton.classList.add('proj-delete');
        projDeleteButton.appendChild(createIcon('delete'));
        projDeleteButton.title = 'Delete Project';
        projDeleteButton.addEventListener('click', (e)=> {
            e.stopPropagation();
            ProjectsList.removeProject(project);
            storeProjects();
            updateProject();
            if (ProjectsList.getProjects().length === 0){
                taskContainer.textContent = '';
            }
            selectProj({target: document.querySelector(`[data-index="${selectedProj}"]`)});
            deployToast('Project deleted!','success');
        });
        // adding all to project item
        projItem.appendChild(projTitle);
        projItem.appendChild(projDeleteButton);
        // adding project item to project container
        projectContainer.appendChild(projItem);
        // Set the selected project index and update tasks for the first project by default
        selectedProj = index;
        updateTasks(ProjectsList.getProjects()[selectedProj]);
    });
    selectProj({target: document.querySelector(`[data-index="${selectedProj}"]`)});
}

// Function to update the tasks display for a project or folder
const updateTasks = (project) => {
    const where = selectedItemType;
    taskContainer.textContent = '';
    let currentTasks;
    if (where === 'folder'){
        currentTasks = project;
        // Display a toast message if there are no tasks in the folder
        if (currentTasks[0] === undefined) {
            deployToast('No tasks in this folder!','info');
        }
        // Set the task heading to the folder name
        taskHeading.textContent = selectedFolder;
        // Set the task category to task heading description
        taskHeadingDesc.textContent = 'Folder';
    }
    if (where === 'project'){
        currentTasks = project.getTasks();
        // Set the task heading to the project name
        taskHeading.textContent = project.name;
        // Set the task category to task heading description
        taskHeadingDesc.textContent = project.category;
    }
    currentTasks.forEach(task => {
        // creating task item
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.dataset.index = currentTasks.indexOf(task);
        // creating div that holds task title and due date
        const taskTitleDueDate = document.createElement('div');
        taskTitleDueDate.classList.add('task-title-due-date');
        // creating task title
        const taskTitle = document.createElement('h4');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = task.title;
        // creating task due date
        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        taskDueDate.textContent = task.dueDate === '' ? "No due date provided." : `Due: ${task.dueDate}`;
        // adding title and due date to task item
        taskTitleDueDate.appendChild(taskTitle);
        taskTitleDueDate.appendChild(taskDueDate);
        // creating task description
        const taskDesc = document.createElement('p');
        taskDesc.textContent =  task.description  === '' ? "No description provided." : task.description;
        taskDesc.classList.add('task-desc');
        taskItem.addEventListener('click', (e) => {
            if (!e.target.classList.contains('task-status')){
                taskDesc.classList.toggle('expanded');
                taskItem.classList.toggle('expanded');
                taskButtons.classList.toggle('unhidden');
            }
        });
        // add creation date after the description
        const taskCreationDate = document.createElement('p');
        taskCreationDate.classList.add('task-creation-date');
        taskCreationDate.textContent = `Created on: ${task.createdDate}`; 
        // div for task buttons
        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');
        // creating task edit button
        const taskEditButton = document.createElement('button');
        taskEditButton.classList.add('task-edit');
        taskEditButton.appendChild(createIcon('edit'));
        taskEditButton.title = 'Edit Task';
        taskEditButton.addEventListener('click', (e) => {
            e.stopPropagation();
            openTaskDialogue(ProjectsList.findTask(taskTitle.textContent)[0]);
        });
        // create task delete button
        const taskDeleteButton = document.createElement('button');
        taskDeleteButton.classList.add('task-delete');
        taskDeleteButton.appendChild(createIcon('delete'));
        taskDeleteButton.title = 'Delete Task';
        taskDeleteButton.addEventListener('click', (e)=> {
            e.stopPropagation();
            deleteTask(e);
            deployToast('Task deleted!','success');
        });
        // creating task status checkbox
        const taskStatus = document.createElement('input');
        taskStatus.type = 'checkbox';
        taskStatus.classList.add('task-status');
        //creating label for task status checkbox
        const taskStatusLabel = document.createElement('label');
        taskStatusLabel.classList.add('task-status-label');
        //creating span for custom checkbox
        const taskStatusSpan = document.createElement('span');
        taskStatusSpan.classList.add('checkbox-custom');
        taskStatusLabel.appendChild(taskStatus);
        taskStatusLabel.appendChild(taskStatusSpan);
        if (task.status){
            taskStatus.checked = true;
            taskStatus.classList.add('done');
        }
        else {
            taskStatus.checked = false;
            taskStatus.classList.add('not-done');
        }
        // adding task event listener to switch status
        taskStatus.addEventListener('click', (e) => {
            task.status = !task.status;
            taskTitle.classList.toggle('done');
            taskDesc.classList.toggle('done');
            taskItem.classList.toggle('done');
            updateTasks(getCurrentProj());
        });
        const checkStatus = () => {
            if (task.status){
                taskStatus.checked = true;
                taskTitle.classList.add('done');
                taskDesc.classList.add('done');
                taskItem.classList.add('done');
            }
            else {
                taskStatus.checked = false;
                taskTitle.classList.remove('done');
                taskDesc.classList.remove('done');
                taskItem.classList.remove('done');
            }
        }
        // setting task priority
        taskItem.classList.add(task.priority.toLowerCase());
        // adding all to task item
        checkStatus();
        taskItem.appendChild(taskTitleDueDate);
        taskItem.appendChild(taskDesc);
        taskItem.appendChild(taskStatusLabel);
        taskButtons.appendChild(taskEditButton);
        taskButtons.appendChild(taskDeleteButton);
        taskButtons.appendChild(taskCreationDate)
        taskItem.appendChild(taskButtons);
        taskContainer.append(taskItem);
    })
    storeProjects();
}

// Function to open the project dialogue
const openProjDialogue = () => {
    projDialogue.classList.add('form-selected');
    overlay.classList.add('active');
}

// Function to close the project dialogue
const closeProjDialogue = () => {
    const projTitle = document.querySelector('#proj-name');
    const projCategory = document.querySelector('#proj-category');
    projDialogue.classList.remove('form-selected');
    overlay.classList.remove('active');
    projTitle.value = '';
    projCategory.value = '';
}

// Function to open the task dialogue
const openTaskDialogue = (task) => {
    const addTaskButton = document.querySelector('#add-task-btn');
    if (task){
        const taskTitle = document.querySelector('#task-name');
        const taskPriority = document.querySelector('#task-priority');
        const taskDesc = document.querySelector('#task-description');
        const taskDueDate = document.querySelector('#task-date');
        taskTitle.value = task.title;
        taskPriority.value = task.priority;
        taskDesc.value = task.description;
        addTaskButton.textContent = 'Edit Task';
        taskDueDate.value = task.dueDate;
        selectedTask = task;
    } else {
        addTaskButton.textContent = 'Add Task';
    }   
    taskDialogue.classList.add('form-selected');
    overlay.classList.add('active');
}

// Function to close the task dialogue
const closeTaskDialogue = () => {
    const taskTitle = document.querySelector('#task-name');
    const taskPriority = document.querySelector('#task-priority');
    const taskDesc = document.querySelector('#task-description');
    const taskDueDate = document.querySelector('#task-date');
    taskDialogue.classList.remove('form-selected');
    overlay.classList.remove('active');
    taskTitle.value = '';
    taskPriority.value = 'Medium';
    taskDesc.value = '';
    taskDueDate.value = '';
    selectedTask = null;
}

// Function to get the current project or folder based on the selected item type
const getCurrentProj = () => {
    let proj;
    if (selectedItemType === 'project'){
        proj = ProjectsList.getProjects()[selectedProj];
    } if (selectedItemType === 'folder') {
        proj = ProjectsList.getFolders()[selectedFolder];
    }
    return proj;
}
// Function to update the folders list display
const updateFolders = () => {
    const folders = ProjectsList.getFolders();
    const folderContainer = document.querySelector('.folder-container');
    folderContainer.textContent = '';
    for (const folder in folders) {
        const folderItem = document.createElement('div');
        folderItem.classList.add('folder-item');
        const folderTitle = document.createElement('h4');
        folderTitle.classList.add('folder-title');
        //create folder title span 
        const folderTitleSpan = document.createElement('span');
        folderTitleSpan.classList.add('folder-title-span');
        folderTitleSpan.textContent = folder;
        //create icon for folder
        const folderIcon = document.createElement('span');
        folderIcon.classList.add('material-symbols-outlined');
        switch(folder){
            case 'General':
                folderIcon.textContent = 'format_list_bulleted';
                break;
            case 'High Priority':
                folderIcon.textContent = 'priority_high';
                break;
            case 'Completed':
                folderIcon.textContent = 'task_alt';
                break;
            case 'Today':
                folderIcon.textContent = 'today';
                break;
            case 'Upcoming':
                folderIcon.textContent = 'event_upcoming';
                break;
            case 'Overdue':
                folderIcon.textContent = 'event_busy';
                break;
        }
        folderTitle.appendChild(folderIcon);
        folderTitle.appendChild(folderTitleSpan);
        folderTitle.addEventListener('click', selectProj);
        folderItem.appendChild(folderTitle);
        folderContainer.appendChild(folderItem);
    }
};

// Function to handle all the event listeners
const fireEventListeners = () => {
    projectAddButton.addEventListener('click', () =>{
        openProjDialogue();
        selectedItemType = 'project';
    });
    // event listner for proj form
    const projForm = document.getElementById('proj-form');
    projForm.addEventListener('submit', (e)=>{
        // Preventing page refresh
        e.preventDefault();
        const projTitle = document.querySelector('#proj-name').value;
        const projCategory = document.querySelector('#proj-category').value;
        ProjectsList.addProject(projTitle, projCategory === '' ? 'General' : projCategory);
        updateProject();
        closeProjDialogue();
        const lastProject = document.querySelector(`[data-index=\"${selectedProj}\"]`);
        lastProject.classList.add('selected');
        deployToast('Project added!','success');
        selectProj({target:lastProject});
    })
    // event listner for closing proj form
    const closeProjButton = document.getElementById('close-proj');
    closeProjButton.addEventListener('click', () => closeProjDialogue());
    // event listner for closing forms when click outside form
    document.body.addEventListener('click', (e)=>{
        if(e.target.classList.contains('overlay')){
            closeProjDialogue();
            closeTaskDialogue();
        }
    });

    taskAddButton.addEventListener('click', () => {
        if (selectedProj != -1 && selectedProj != undefined){
            if (selectedItemType === 'project'){
                openTaskDialogue();
            }
            else {
                deployToast('You can only add tasks in a project!','error');
            }
        }
        else {
            deployToast('You need to make a project first!','error');
        }
    });
    // event listener for task form
    const taskForm =  document.getElementById('task-form');
    taskForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        const taskTitle = document.querySelector('#task-name').value;
        const taskPriority = document.querySelector('#task-priority').value;
        const taskDesc = document.querySelector('#task-description').value;
        const taskDueDate = document.querySelector('#task-date').value;
        // check if task with same title already exists
        if (ProjectsList.findTask(taskTitle)[0] && !selectedTask){
            deployToast('Task with same title already exists!','error');
            return;
        }

        if (selectedTask){
            // check if task with the new title already exists, if it does, revert the changes
            // ProjectsList.findTask(taskTitle)[2] is true if there are more than 1 tasks with the same title
            const oldTitle = selectedTask.title;
            selectedTask.title = taskTitle;
            if (ProjectsList.findTask(taskTitle)[2]){
                deployToast('Task with same title already exists!','error');
                selectedTask.title = oldTitle;
                return;
            }
            selectedTask.priority = taskPriority;
            selectedTask.description = taskDesc;
            selectedTask.dueDate = taskDueDate;
            updateTasks(getCurrentProj());
            closeTaskDialogue();
            deployToast('Task edited!','success');
            selectedTask = null;
        }
        else {
            ProjectsList.getProjects()[selectedProj].addTask(taskTitle, taskPriority, taskDesc, false, taskDueDate);
            updateTasks(ProjectsList.getProjects()[selectedProj]);
            closeTaskDialogue();
            deployToast('Task added!','success');  
        }
    })
    // event listner for closing task form
    const closeTaskButton = document.getElementById('close-task');
    closeTaskButton.addEventListener('click', () => closeTaskDialogue());
}
// Export the necessary functions to be used in the index.js
export {  updateProject, updateFolders, fireEventListeners, selectProj };