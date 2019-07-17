import React from 'react'
import styled from '@emotion/styled'
import projectsData from '../data/github-projects.json'
import Project from '../components/Project'
import LoadMore from '../resources/load-more.svg'

const SectionFind = styled.section`
    .filters {
        margin: 4rem 0;
        color: red;
    }

    button, select {
        display: inline-block;
        padding: 5px 10px;
        font-family: inherit;
        border: 1px solid;
        background: inherit;

        &:not(:last-child) {
            margin-right: 2rem;
        }
    }

    .showing {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;

        .bold {
            font-weight: bold;
        }
    }

    .load-more {
        display: block;
        border: none;
        margin: 5rem auto;

        & img {
            height: 6rem;
        }
    }
`

class FindProject extends React.Component {

    state = {
        projects: projectsData.projects || []
    }

    render() {
        return (
            <SectionFind>
                <div className='row'>
                    <div className='outline-left'>
                        <h2>Find a Project</h2>
                        <p>Look through the projects, filter them, find your favorite project and click on ‚open in Gitpod‘ to enjoy the one-click experience.</p>
                    </div>
                    <div className="filters">
                        <button>
                            Filter by tag &nbsp; &nbsp; &nbsp;&rarr;
                        </button>
                        <button>
                            Filter by stars
                        </button>
                    </div>
                    <div className="showing">
                        <span>48 results</span>
                        <span>Show&nbsp;<span className="bold">10</span>&nbsp;| 50 | 100</span>
                    </div>
                    <div>
                        {
                            this.state.projects.map(project => <Project key={project.id} {...project}/>)
                        }
                    </div>
                    <div>
                        <button className="load-more">
                            <img src={LoadMore} alt="Load More Projects button"/>
                        </button>
                    </div>
                </div>
            </SectionFind>
        )
    }
}

export default FindProject