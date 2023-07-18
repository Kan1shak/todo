import './style.css'

function Projects(){
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
    const projects = Projects();
    const projectContainer = document.querySelector('.project-container');
    const taskContainer = document.querySelector('.task-container');
    const projectAddButton = document.getElementById('add-proj');
    const taskAddButton = document.getElementById('add-task');
    const updateProject = () => {
        projectContainer.textContent = '';
        const currentProjects = projects.getProjects();
        currentProjects.forEach(project => {
            const projTitle = document.createElement('h4');
            projTitle.classList.add('proj-title');
            projTitle.textContent = project.name;
            projectContainer.appendChild(projTitle);
        });
    }

    const updateTasks = (project) => {
        taskContainer.textContent = '';
        const currentTasks = project.getTasks();
        currentTasks.forEach(task => {
            const taskTitle = document.createElement('h4');
            taskTitle.classList.add('task-title');
            taskTitle.textContent = task.title;
            taskContainer.appendChild(taskTitle);
        }); 
    }

    updateProject();
})();