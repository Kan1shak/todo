import './style.css'

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
    var selectedProj = 0;
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
            const taskTitle = document.createElement('h4');
            taskTitle.classList.add('task-title');
            taskTitle.textContent = task.title;
            const taskDesc = document.createElement('p');
            taskDesc.textContent =  task.description;
            taskContainer.appendChild(taskTitle);
            taskContainer.appendChild(taskDesc);
        }); 
    }
    const buttonHandler = (() => {
        projectAddButton.addEventListener('click', () =>{
            ProjectsList.addProject(new Project("Some title!"));
            updateProject();
        });
        taskAddButton.addEventListener('click', () => {
            ProjectsList.getProjects()[selectedProj].addTask(new Task('damn', 'kinda high', 'nice desc.'));
            updateTasks(ProjectsList.getProjects()[selectedProj]);
        });
    })();
    updateProject();
})();