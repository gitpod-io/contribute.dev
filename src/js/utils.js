import SVGs from '../resources/projects/*.svg'
import PNGs from '../resources/projects/*.png'
import JPGs from '../resources/projects/*.jpg'
import JPEGs from '../resources/projects/*.jpeg'
import SadFace from '../resources/icon-smiley.svg'
import GithubMark from '../resources/githubmark.png'

const images = { ...SVGs, ...PNGs, ...JPGs, ...JPEGs }

/* ----- Filter Projects ----- */

export const filterProjects = (projects, searchTerm) => {
    searchTerm = searchTerm.toLowerCase()
    return projects.filter(project => {
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
}

/* ----- Render Project List ----- */

export const renderProjectsList = (projects, projectList) => {
    projects.forEach(({
        title,
        logo,
        description,
        repoName,
        repoURL,
        language,
        tags
    }) => {

        const project = document.createElement('div')
        project.className = 'project'

        const colors = generateColorForTheTags(language)

        const markup = `
            <div class="project__img-container">
               <a href="${repoURL}" target="_blank">
                <img
                    src="${images[logo.split('.')[0]]}" 
                    alt="${title} Logo" 
                    class="project__img"
                    loading="lazy" 
                >
               </a>
            </div>
            <div class="project__text">
                <a href="${repoURL}" target="_blank">
                    <h3>
                        ${title}
                        <img
                            src="${GithubMark}" 
                            alt="Github Mark"
                            class="project__github-icon"
                        >
                    </h3>
                </a>
                <p>${description}</p>
            </div>
            <div class="project__tags">
                ${language ? `<span class="project__tag" style="background: ${colors.background}; color: ${colors.color}">${language}</span>` : ''}
                <br>
                ${tags ? generateHTMLForTags(tags) : generateHTMLForTags([{ href: `https://github.com/${repoName}/graphs/contributors`, src: `https://img.shields.io/github/contributors/${repoName}.svg?style=flat-square`, alt: `Contributors Count` }])}
            </div>
            <div class="project__cta">
                <a href="${repoURL}" target="_blank">
                    <img
                        src="https://img.shields.io/github/stars/${repoName}.svg?style=social"
                        alt="${title}"
                    >
                </a>
                <a href="https://gitpod.io#${repoURL}" class="btn btn--gitpod">
                    Open in Gitpod
                </a>
            </div>
        `

        project.innerHTML = markup

        projectList.appendChild(project)
    })
}

export const renderNotFoundState = (projectList, searchInput, projects) => {

    const notFound = document.createElement('div')
    notFound.className = 'not-found'

    const buttons = document.createElement('p')

    buttons.textContent = 'Try '

    const strings = ['help wanted', 'PRs welcome', 'first timers only']

    strings.forEach((string, i) => {
        const button = document.createElement('button')
        const whitespace = document.createTextNode(i > 0 ? ', ' : '')

        button.textContent = string
        button.className = "not-found__button"
        button.addEventListener('click', () => {
            projectList.innerHTML = ''
            searchInput.value = string
            renderProjectsList(filterProjects(projects, string), projectList)
        })

        buttons.appendChild(whitespace)
        buttons.appendChild(button)
    })

    const markup = `
        <img
            src=${SadFace} 
            alt="Sad Face Emoji"
            class="not-found__img"
        >
        <h3>Sorry, we can't find any projects matching your search</h3>
    `

    notFound.innerHTML = markup
    notFound.appendChild(buttons)

    projectList.appendChild(notFound)
}

const generateHTMLForTags = (tags) => tags.map(tag => `
        <a href="${tag.href}" target="_blank">
            <img 
                src="${tag.src}"
                alt="${tag.alt}"
            >
        </a>
    `).join('')

const generateColorForTheTags = (lang) => {
    switch (lang.toLowerCase()) {
        case 'javascript':
            return { background: '#fdf058', color: '#567' }
        case 'typescript':
            return { background: '#027dc6', color: '#fff' }
        case 'python':
            return { background: '#4480b1', color: '#fff' }
        case 'ruby':
            return { background: '#e45443', color: '#fff' }
        default:
            return { background: '#eee', color: '#333' }
    }
}
