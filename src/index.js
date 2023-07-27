// Importing the required styles and functions from other modules
import './style.css';
import { updateProject, updateFolders, fireEventListeners, selectProj } from './displayController.js';
import { ProjectHolder } from './dataHolder.js';
import { retrieveProjects } from './storage.js';
import {  getIsOpenFirstTime, setIsOpenFirstTime } from './storage.js';

// Creating a ProjectsList object using the ProjectHolder factory function
const ProjectsList = ProjectHolder();

// Calling the function to set up event listeners for buttons and forms
fireEventListeners();

// Calling the function to retrieve projects from local storage
retrieveProjects();

// Calling the functions to update the display of projects and folders upon page load
updateProject();
updateFolders();

// if the website is opened for the first time, select the default project
if (getIsOpenFirstTime()){
    console.log(getIsOpenFirstTime())
    selectProj({target: document.querySelector('[data-index="1"]')})
    setIsOpenFirstTime(false);
}

// Exporting the ProjectsList object to be used in other modules
export { ProjectsList };
