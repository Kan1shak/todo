import { format } from "date-fns";
// A factory function that creates a ProjectHolder object to manage projects and tasks
function ProjectHolder(){
    const projects = [];

    // Function to get tasks categorized into "General", "High Priority", and "Completed"
    const getFolders = () => {
        const General = [];
        const HighPriority = [];
        const Completed = [];

        // Loop through all projects and their tasks to categorize them
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

        // Return an object containing categorized tasks
        return { General, "High Priority": HighPriority, Completed };
    }

    // Function to find a task by its title and return both the task and its parent project
    const findTask = (taskName) => {
        let foundTask = null;
        let foundProject = null;
        // 0 means not found, 1 means found, 2 means found more than once
        let count = 0;
        let multiple = false;
        // Loop through all projects and their tasks to find the matching task
        getProjects().forEach(project => {
            project.getTasks().forEach(task => {
                if (task.title === taskName){
                    foundTask = task;
                    foundProject = project;
                    count++;
                }
            });
        });

        // a boolean value indicating if multiple tasks were found
        if (count >= 2) {
            multiple =  true;
        }
        // Return an array containing the found task and its parent project, and the boolean value
        return [foundTask, foundProject,multiple];
    }

    // Function to get the list of projects
    const getProjects = () => projects;

    // Function to add a new project to the projects list
    const addProject = (name, category = 'General') => {
        projects.push(new Project(name, category));
    }

    // Function to remove a project from the projects list
    const removeProject = (project) => {
        const index = projects.indexOf(project);
        projects.splice(index, 1);
    }

    const addProjectLocalStorage = (project) => {
        projects.push(project);
    }

    // Return an object with the available functions and data
    return { getProjects, addProject, removeProject, getFolders, findTask, addProjectLocalStorage };
};

// Constructor function to create Project objects
function Project(name, category){
    this.name = name;
    this.category = category;
    this.tasks = [];

    // Function to add a task to the project
    this.addTask = (title, priority, description, status = false, dueDate='') => {
        this.tasks.push(new Task(title, priority, description, status,dueDate));
    }

    // Function to remove a task from the project
    this.removeTask = (task) => {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }

    // Function to get the list of tasks in the project
    this.getTasks = () => {
        return this.tasks;
    }
    
    this.addTaskLocalStorage = (task) => {
        this.tasks.push(task);
    }
}

// Constructor function to create Task objects
function Task(title, priority, description, status,date){
    this.title = title;
    this.priority = priority;
    this.description = description;
    this.status = status;
    this.dueDate = date;
    this.createdDate = format(new Date(), 'yyyy-MM-dd');
}

// Export the ProjectHolder, Project, and Task functions to be used in other modules
export { ProjectHolder, Project, Task };