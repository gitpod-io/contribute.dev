import SVGs from '../resources/projects/*.svg'
import PNGs from '../resources/projects/*.png'
import JPGs from '../resources/projects/*.jpg'

const images = { ...SVGs, ...PNGs, ...JPGs }

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


        const markup = `
            <div class="project__img">
               <a href="${repoURL}" target="_blank">
                 <img
                    src="${images[logo.split('.')[0]]}" 
                    alt="${title} Logo" 
                    class="project__img"
                    loading="lazy" 
                    height="100"
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
                ${language ? `<span>${language}</span>` : ''}
                ${tags ?
                generateHTMLForTags(tags)
                :
                generateHTMLForTags([{
                    href: `https://github.com/${repoName}/graphs/contributors`,
                    src: `https://img.shields.io/github/contributors/${repoName}.svg?style=flat-square`,
                    alt: `Contributors Count`
                }])}
            </div>
            <div class="project__cta>
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
