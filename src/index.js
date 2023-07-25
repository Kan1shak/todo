import './style.css'
import {deplyToast} from './toast.js';
function ProjectHolder(){
    const projects = [];
    const getFolders = () => {
        const General = [];
        const HighPriority = [];
        const Completed = [];
        getProjects().forEach(project => {
            project.getTasks().forEach(task => {
                if (task.priority === 'High' && !task.status){
                    HighPriority.push(task);
                }
                if (task.status){
                    Completed.push(task);
                } else {
                    General.push(task);
                }
            });
        });
        return {General,"High Priority":HighPriority,Completed};
    }
    const findTask = (taskName) => {
        let foundTask = null;
        let foundProject = null;
        getProjects().forEach(project => {
            project.getTasks().forEach(task => {
                if (task.title === taskName){
                    foundTask = task;
                    foundProject = project;
                }
            });
        });
        return [foundTask, foundProject];
    }
    const getProjects = () => projects;
    const addProject = (name,category='General') => {
        projects.push(new Project(name,category));
    }
    const removeProject = (project) => {
        const index = projects.indexOf(project);
        projects.splice(index,1);
    }
    return {getProjects, addProject, removeProject,getFolders, findTask}
};
function Project(name, category){
    this.name = name;
    this.category = category;
    this.tasks = [];
    this.addTask = (title,priority,description,status=false) => {
        this.tasks.push(new Task(title,priority,description,status));
    }
    this.removeTask = (task) => {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index,1);
    }
    this.getTasks = () => {
        return this.tasks;
    }
}

function Task(title,priority,description,status){
    this.title = title;
    this.priority = priority;
    this.description = description;
    this.status = status;
}

const DisplayController = (() => {
    const ProjectsList = ProjectHolder();
    const projectContainer = document.querySelector('.project-container');
    const taskContainer = document.querySelector('.task-container');
    const projectAddButton = document.getElementById('add-proj');
    const taskAddButton = document.getElementById('add-task');
    const projDialogue = document.querySelector('.add-proj-content');
    const taskDialogue = document.querySelector('.add-task-content');
    const overlay = document.querySelector('#overlay');
    let selectedProj = -1;
    let selectedTask = null;
    let selectedFolder = null;
    let selectedItemType = 'project';
    const selectProj = (e) => {
        document.querySelectorAll('.selected').forEach(proj => {
            proj.classList.remove('selected');
        });
        if (ProjectsList.getProjects()[0] != undefined){
            e.target.classList.add('selected');
        }
        if (e.target.classList.contains('folder-title')){
            selectedItemType = 'folder';
            selectedFolder = e.target.textContent;
            updateTasks(ProjectsList.getFolders()[selectedFolder]);
        }
        else {
            selectedItemType = 'project';
            selectedProj = e.target.dataset.index;
            updateTasks(ProjectsList.getProjects()[selectedProj]);
        }
        // if (selectedProj != -1 && selectedProj != undefined){
        //     projTitle.addEventListener('click', selectProj);
        // }
    }
    const deleteTask = (e) => {
        let task,project;
        [task,project] = ProjectsList.findTask(e.target.parentElement.parentElement.firstChild.textContent);
        project.removeTask(task);
        if (selectedItemType === 'project'){
            updateTasks(getCurrentProj());
        }
        else {
            updateTasks(getCurrentProj());
        }
    }
    const updateProject = () => {
        projectContainer.textContent = '';
        const currentProjects = ProjectsList.getProjects();
        currentProjects.forEach((project,index) => {
            const projTitle = document.createElement('h4');
            projTitle.classList.add('proj-title');
            projTitle.textContent = project.name;
            projTitle.addEventListener('click', selectProj);
            projTitle.dataset.index = index;
            projectContainer.appendChild(projTitle);
            selectedProj = index;
            updateTasks(ProjectsList.getProjects()[selectedProj]);
        });
    }
    const updateTasks = (project) => {
        const where = selectedItemType;
        taskContainer.textContent = '';
        let currentTasks;
        if (where === 'folder'){
            currentTasks = project;
            if (currentTasks[0] === undefined) {
                deplyToast('No tasks in this folder!','info');
            }
        }
        if (where === 'project'){
            currentTasks = project.getTasks();
        }
        currentTasks.forEach(task => {
            //creating task item
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
            taskItem.dataset.index = currentTasks.indexOf(task);
            //creating task title
            const taskTitle = document.createElement('h4');
            taskTitle.classList.add('task-title');
            taskTitle.textContent = task.title;
            //creating task description
            const taskDesc = document.createElement('p');
            taskDesc.textContent =  task.description  === '' ? "No description provided." : task.description;
            taskDesc.classList.add('task-desc');
            taskItem.addEventListener('click', (e) => {
                if (!e.target.classList.contains('task-status')){
                    taskDesc.classList.toggle('expanded');
                    taskButtons.classList.toggle('unhidden');
                }
            });
            //div for task buttons
            const taskButtons = document.createElement('div');
            taskButtons.classList.add('task-buttons');
            //creating task edit button
            const taskEditButton = document.createElement('button');
            taskEditButton.classList.add('task-edit');
            taskEditButton.textContent = 'Edit';
            taskEditButton.addEventListener('click', (e) => {
                e.stopPropagation();
                openTaskDialogue(ProjectsList.findTask(taskTitle.textContent)[0]);
            });
            //create task delete button
            const taskDeleteButton = document.createElement('button');
            taskDeleteButton.classList.add('task-delete');
            taskDeleteButton.textContent = 'Delete';
            taskDeleteButton.addEventListener('click', (e)=> {
                e.stopPropagation();
                deleteTask(e);
            });
            //creating task status checkbox
            const taskStatus = document.createElement('input');
            taskStatus.type = 'checkbox';
            taskStatus.classList.add('task-status');
            if (task.status){
                taskStatus.checked = true;
                taskStatus.classList.add('done');
            }
            else {
                taskStatus.checked = false;
                taskStatus.classList.add('not-done');
            }
            //adding task event listener to switch status
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
            //setting task priority
            taskItem.classList.add(task.priority.toLowerCase());
            //adding all to task item
            checkStatus();
            taskItem.appendChild(taskTitle);
            taskItem.appendChild(taskDesc);
            taskItem.appendChild(taskStatus);
            taskButtons.appendChild(taskEditButton);
            taskButtons.appendChild(taskDeleteButton);
            taskItem.appendChild(taskButtons);
            taskContainer.append(taskItem);
        })
    }
    const openProjDialogue = () => {
        projDialogue.classList.add('form-selected');
        overlay.classList.add('active');
    }
    const closeProjDialogue = () => {
        const projTitle = document.querySelector('#proj-name');
        const projCategory = document.querySelector('#proj-category');
        projDialogue.classList.remove('form-selected');
        overlay.classList.remove('active');
        projTitle.value = '';
        projCategory.value = '';
    }
    const openTaskDialogue = (task) => {
        if (task){
            const taskTitle = document.querySelector('#task-name');
            const taskPriority = document.querySelector('#task-priority');
            const taskDesc = document.querySelector('#task-description');
            const addTaskButton = document.querySelector('#add-task-btn');

            taskTitle.value = task.title;
            taskPriority.value = task.priority;
            taskDesc.value = task.description;
            addTaskButton.textContent = 'Edit Task';
            selectedTask = task;
        }
        taskDialogue.classList.add('form-selected');
        overlay.classList.add('active');
    }
    const closeTaskDialogue = () => {
        const taskTitle = document.querySelector('#task-name');
        const taskPriority = document.querySelector('#task-priority');
        const taskDesc = document.querySelector('#task-description');
        taskDialogue.classList.remove('form-selected');
        overlay.classList.remove('active');
        taskTitle.value = '';
        taskPriority.value = 'Medium';
        taskDesc.value = '';
        selectedTask = null;
    }
    const getCurrentProj = () => {
        let proj;
        if (selectedItemType === 'project'){
            proj = ProjectsList.getProjects()[selectedProj];
        } if (selectedItemType === 'folder') {
            proj = ProjectsList.getFolders()[selectedFolder];
        }
        return proj;
    }
    const buttonHandler = (() => {
        projectAddButton.addEventListener('click', () =>{
            openProjDialogue();
            selectedItemType = 'project';
        });
        //event listner for proj form
        const projForm = document.getElementById('proj-form');
        projForm.addEventListener('submit', (e)=>{
            //Preventing page refresh
            e.preventDefault();
            const projTitle = document.querySelector('#proj-name').value;
            const projCategory = document.querySelector('#proj-category').value;
            ProjectsList.addProject(projTitle, projCategory === '' ? 'General' : projCategory);
            updateProject();
            closeProjDialogue();
            const lastProject = document.querySelector(`[data-index=\"${selectedProj}\"]`);
            lastProject.classList.add('selected');
            deplyToast('Project added!','success');
            selectProj({target:lastProject});
        })
        //event listner for closing proj form
        const closeProjButton = document.getElementById('close-proj');
        closeProjButton.addEventListener('click', () => closeProjDialogue());
        //event listner for closing forms when click outside form
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
                    deplyToast('You can only add tasks in a project!','error');
                }
            }
            else {
                deplyToast('You need to make a project first!','error');
            }
        });
        //event listener for task form
        const taskForm =  document.getElementById('task-form');
        taskForm.addEventListener('submit', (e)=> {
            e.preventDefault();
            const taskTitle = document.querySelector('#task-name').value;
            const taskPriority = document.querySelector('#task-priority').value;
            const taskDesc = document.querySelector('#task-description').value;
            if (selectedTask){
                selectedTask.title = taskTitle;
                selectedTask.priority = taskPriority;
                selectedTask.description = taskDesc;
                updateTasks(getCurrentProj());
                closeTaskDialogue();
                deplyToast('Task edited!','success');
                selectedTask = null;
            }
            else {
                ProjectsList.getProjects()[selectedProj].addTask(taskTitle, taskPriority, taskDesc);
                updateTasks(ProjectsList.getProjects()[selectedProj]);
                closeTaskDialogue();
                deplyToast('Task added!','success');  
            }
        })
        //event listner for closing task form
        const closeTaskButton = document.getElementById('close-task');
        closeTaskButton.addEventListener('click', () => closeTaskDialogue());
    })();
    const updateFolders = () => {
        const folders = ProjectsList.getFolders();
        const folderContainer = document.querySelector('.folder-container');
        folderContainer.textContent = '';
        for (const folder in folders) {
            const folderItem = document.createElement('div');
            folderItem.classList.add('folder-item');
            const folderTitle = document.createElement('h4');
            folderTitle.classList.add('folder-title');
            folderTitle.textContent = folder;
            folderTitle.addEventListener('click', selectProj);
            folderItem.appendChild(folderTitle);
            folderContainer.appendChild(folderItem);
        }
    };
    updateProject();
    updateFolders();
})();