/* ------------------------------------------------- */
/* ----- Basic Imports ----- */
/* ------------------------------------------------- */

import '../scss/main.scss'
import projects from './data'
import { renderProjectsList } from './utils'

/* ------------------------------------------------- */
/* ----- Selectors ----- */
/* ------------------------------------------------- */

const projectList = document.querySelector(".project__list");
const searchInput = document.querySelector('.filters__search');

let filteredProjects = []

searchInput.addEventListener('input', e => {
    const searchTerm = e.target.value.toLowerCase()

    filteredProjects = projects.filter(project => {
        const isSearchTextAMatch = Object.values(project).some((value) => {
            if (Array.isArray(value)) {
                return value.some(val => {
                    return val["alt"].toLowerCase().includes(searchTerm)
                })
            } else {
                return value.toLowerCase().includes(searchTerm)
            }
        })

        return isSearchTextAMatch
    })

    projectList.innerHTML = ''

    renderProjectsList(filteredProjects, projectList)
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