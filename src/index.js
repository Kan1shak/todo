// Importing the required styles and functions from other modules
import './style.css';
import { updateProject, updateFolders, fireEventListeners } from './displayController.js';
import { ProjectHolder } from './dataHolder.js';

// Creating a ProjectsList object using the ProjectHolder factory function
const ProjectsList = ProjectHolder();

// Calling the function to set up event listeners for buttons and forms
fireEventListeners();

// Calling the functions to update the display of projects and folders upon page load
updateProject();
updateFolders();

// Exporting the ProjectsList object to be used in other modules
export { ProjectsList };
