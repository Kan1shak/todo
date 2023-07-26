import { ProjectsList } from './index.js';
import { Project, Task } from './dataHolder.js';
const storeProjects = () => {
    localStorage.setItem('projects', JSON.stringify(ProjectsList.getProjects()));
}

//retrieve projects from local storage and store it in the project holder
function retrieveProjects(){
    const projects = JSON.parse(localStorage.getItem('projects'));
    if (projects) {
        projects.forEach(project => {
            const newProject = new Project(project.name, project.category);
            //add tasks to this project
            project.tasks.forEach(task => {
                const newTask = new Task(task.title, task.priority, task.description, task.status, task.dueDate, task.createdDate);
                newProject.addTaskLocalStorage(newTask);
            });
            ProjectsList.addProjectLocalStorage(newProject);
        });
    }
}

export { storeProjects, retrieveProjects };