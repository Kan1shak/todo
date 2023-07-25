import './style.css'
import { updateProject, updateFolders, fireEventListeners } from './displayController.js';
import { ProjectHolder} from './dataHolder.js';

const ProjectsList = ProjectHolder();

fireEventListeners();
updateProject();
updateFolders();

export {ProjectsList};