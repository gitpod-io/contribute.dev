import React from 'react'
import styled from '@emotion/styled'
import projectsData from '../data/github-projects.json'
import Project from '../components/Project'

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
        justify-content: flex-end;
        margin-top: 4rem;

        span {
            font-weight: bold;
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
                        <p>These projects are already a part of the frictionless open-source contribution. Find a fitting one and start contribution immideiately with Gitpod.</p>
                    </div>
                    <div className="filters">
                        <button>
                            Filter by tag &nbsp; &nbsp; &nbsp;&rarr;
                        </button>
                        <select>
                            <option>Filter by</option>
                            <option>Stars</option>
                            <option>Tag</option>
                        </select>
                    </div>
                    <div>
                        {
                            this.state.projects.map(project => <Project key={project.id} {...project}/>)
                        }
                    </div>
                    <div className="showing">
                        Show&nbsp;<span>10</span>&nbsp;| 50 | 100
                    </div>
                </div>
            </SectionFind>
        )
    }
}

export default FindProject