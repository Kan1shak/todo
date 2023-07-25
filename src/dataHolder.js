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
export { ProjectHolder, Project, Task };