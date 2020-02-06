import SVGs from '../resources/projects/*.svg'
import PNGs from '../resources/projects/*.png'
import JPGs from '../resources/projects/*.jpg'
import JPEGs from '../resources/projects/*.jpeg'


const images = { ...SVGs, ...PNGs, ...JPGs, ...JPEGs }

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
        project.classList.add('project')

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
                    <h3>${title}</h3>
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
        case 'ruby' || 'rust':
            return { background: '#e45443', color: '#fff' }
        default:
            return { background: '#eee', color: '#333' }
    }
}