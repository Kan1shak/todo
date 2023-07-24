import './style.css'
import {deplyToast} from './toast.js';
function ProjectHolder(){
    const projects = [];
    const getProjects = () => projects;
    const addProject = (project) => {
        projects.push(project);
    }
    const removeProject = (project) => {
        const index = projects.indexOf(project);
        projects.splice(index,1);
    }
    return {getProjects, addProject, removeProject}
};
function Project(name){
    this.name = name;
    this.tasks = [];
    this.addTask = (task) => {
        this.tasks.push(task);
    }
    this.removeTask = (task) => {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index,1);
    }
    this.getTasks = () => {
        return this.tasks;
    }
}

function Task(title,priority,description,status=false){
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
    const selectProj = (e) => {
        document.querySelectorAll('.proj-title').forEach(proj => {
            proj.classList.remove('selected');
        });
        e.target.classList.add('selected');
        selectedProj = e.target.dataset.index;
        updateTasks(ProjectsList.getProjects()[selectedProj]);
        
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
        taskContainer.textContent = '';
        const currentTasks = project.getTasks();
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
            taskDesc.textContent =  task.description;
            taskDesc.classList.add('task-desc');
            taskItem.addEventListener('click', (e) => {
                if (!e.target.classList.contains('task-status')){
                    taskDesc.classList.toggle('expanded');
                }
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
            //creating task priority
            // const taskPriority = document.createElement('span');
            // taskPriority.classList.add('task-priority');
            // taskPriority.textContent = task.priority;
            taskItem.classList.add(task.priority.toLowerCase());
            //adding all to task item
            checkStatus();
            taskItem.appendChild(taskTitle);
            taskItem.appendChild(taskDesc);
            taskItem.appendChild(taskStatus);
            taskContainer.append(taskItem);
        }); 
    }
    const openProjDialogue = () => {
        projDialogue.classList.add('form-selected');
        overlay.classList.add('active');
    }
    const closeProjDialogue = () => {
        const projTitle = document.querySelector('#proj-name');
        projDialogue.classList.remove('form-selected');
        overlay.classList.remove('active');
        projTitle.value = '';
    }
    const openTaskDialogue = () => {
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
    }
    const buttonHandler = (() => {
        projectAddButton.addEventListener('click', () =>{
            openProjDialogue();
        });
        //event listner for proj form
        const projForm = document.getElementById('proj-form');
        projForm.addEventListener('submit', (e)=>{
            //Preventing page refresh
            e.preventDefault();
            const projTitle = document.querySelector('#proj-name').value;
            ProjectsList.addProject(new Project(projTitle));
            updateProject();
            closeProjDialogue();
            const lastProject = document.querySelector(`[data-index=\"${selectedProj}\"]`);
            lastProject.classList.add('selected');
        })
        //event listner for closing proj form
        const closeProjButton = document.getElementById('close-proj');
        closeProjButton.addEventListener('click', () => closeProjDialogue());
        //event listner for closing proj when click outside form
        document.body.addEventListener('click', (e)=>{
            if(e.target.classList.contains('overlay')){
                closeProjDialogue();
                closeTaskDialogue();
            }
        });

        taskAddButton.addEventListener('click', () => {
            if (selectedProj != -1){
                // ProjectsList.getProjects()[selectedProj].addTask(new Task('damn', 'kinda high', 'nice desc.'));
                // updateTasks(ProjectsList.getProjects()[selectedProj]);
                openTaskDialogue();
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
            ProjectsList.getProjects()[selectedProj].addTask(new Task(taskTitle, taskPriority, taskDesc));
            updateTasks(ProjectsList.getProjects()[selectedProj]);
            closeTaskDialogue();
        })
        //event listner for closing task form
        const closeTaskButton = document.getElementById('close-task');
        closeTaskButton.addEventListener('click', () => closeTaskDialogue());
    })();
    updateProject();
})();