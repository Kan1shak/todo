/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable default-case */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { ProjectsList } from './index';
import { Project, Task } from './dataHolder';
import defaultProjects from './default';

const storeProjects = () => {
  localStorage.setItem('projects', JSON.stringify(ProjectsList.getProjects()));
};
// variable to check if the website is opened for the first time
let isOpenFirstTime = false;
// getters and setters for isOpenFirstTime
const getIsOpenFirstTime = () => isOpenFirstTime;
const setIsOpenFirstTime = (index) => {
  isOpenFirstTime = index;
};
// retrieve projects from local storage and store it in the project holder
function retrieveProjects() {
  const setProjects = (projectHolder) => {
    projectHolder.forEach((project) => {
      const newProject = new Project(project.name, project.category);
      // add tasks to this project
      project.tasks.forEach((task) => {
        const newTask = new Task(
          task.title,
          task.priority,
          task.description,
          task.status,
          task.dueDate,
          task.createdDate,
        );
        newProject.addTaskLocalStorage(newTask);
      });
      ProjectsList.addProjectLocalStorage(newProject);
    });
  };
  const projects = JSON.parse(localStorage.getItem('projects'));
  if (projects) {
    setProjects(projects);
  } else {
    // if there are no projects in local storage, store the default projects
    setProjects(defaultProjects);
    // set isOpenFirstTime to true
    isOpenFirstTime = true;
  }
}

export {
  storeProjects, retrieveProjects, getIsOpenFirstTime, setIsOpenFirstTime,
};
