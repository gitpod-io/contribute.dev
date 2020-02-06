/* ------------------------------------------------- */
/* ----- Basic Imports ----- */
/* ------------------------------------------------- */

import '../scss/main.scss'
import projects from './data'
import { renderProjectsList, renderNotFoundState, filterProjects } from './utils'

/* ------------------------------------------------- */
/* ----- Selectors ----- */
/* ------------------------------------------------- */

const projectList = document.querySelector(".project__list");
let searchInput = document.querySelector('.filters__search');

let filteredProjects = []

searchInput.addEventListener('input', e => {
    const searchTerm = e.target.value
    filteredProjects = filterProjects(projects, searchTerm)
    projectList.innerHTML = ''

    filteredProjects.length ? renderProjectsList(filteredProjects, projectList) : renderNotFoundState(projectList, searchInput, projects)
})

renderProjectsList(projects, projectList)

/* ------------------------------------------------- */
/* ----- Fallbacks ----- */
/* ------------------------------------------------- */

// if ('loading' in HTMLImageElement.prototype) {
//     // 😃 Native lazy loading supported
//     const images = document.querySelectorAll('img[loading="lazy"]');
//     images.forEach(img => {
//         img.src = img.dataset.src;
//     });
// } else {
//     // 😟 Not Supported
//     // Dynamically import the LazySizes library
//     const script = document.createElement('script');
//     script.src =
//         'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
//     document.body.appendChild(script);
// }