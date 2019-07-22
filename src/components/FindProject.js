import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/variables'
import projectsData from '../data/github-projects.json'
import Project from '../components/Project'
import LoadMore from '../resources/load-more.svg'

const SectionFind = styled.section`
    .filters {
        position: relative;
        margin: 4rem 0;

        input {
            max-width: 15rem;
            border: 2px solid rgba(0,0,0, .4);
            padding: 0.5rem 1.5rem;
            transition: all .2s;

            &:focus,
            &:hover {
                border: 2px solid ${colors.purple};
                transform: translateY(-.3rem);
                box-shadow: 0 1rem 2rem rgba(0,0,0, .2);

                & + span {
                    transform: translateY(-.3rem);
                    color: ${colors.purple};
                }
            }
        }

        & > span {
            position: absolute;
            top: 2px;
            left: 153px;
            font-size: 2rem;
            transition: all .2s;
        }
    }

    button {
        display: inline-block;
        padding: 5px 10px;
        font-family: inherit;
        border: 1px solid;
        background: inherit;

        &:not(:last-child) {
            margin-right: 2rem;
        }
    }

    .load-more {
        display: block;
        border: none;
        margin: 5rem auto;
        transition: all .2s;

        &:hover,
        &:focus {
            transform: translateY(.3rem);
        }

        & img {
            height: 6rem;
        }
    }

    .nothing-found {
        margin: 10rem 0;
        font-size: 2rem;
        text-align: center;

        div {
            font-size: 5rem;
            margin-bottom: 2.5rem;
        }
    }
`

class FindProject extends React.Component {

    state = {
        projects: projectsData.projects || [],
        filteredProjects: [],
        searchTerm: '',
    }

    componentDidMount () {
        this.handleSearchByTag()
    }

    handleSearchByTag = (searchTerm = '') => {
        this.setState(() => ({searchTerm}))
        const filteredProjects = this.state.projects.filter((project) => {
            const isSearchTextMatch = project.tags.some(({name}) => name.toLowerCase().includes(searchTerm.toLowerCase()))
            return isSearchTextMatch
        })
        this.setState(() => ({filteredProjects}))
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
                        <input
                            placeholder="Search by Tag"
                            aria-label="Search by Tag"
                            value={this.state.searchTerm}
                            onChange={(e) => this.handleSearchByTag(e.target.value)}
                        />
                        <span>&rarr;</span>
                    </div>
                    <div>
                        {
                            this.state.filteredProjects.length &&
                            this.state.filteredProjects.map(project => <Project key={project.id} {...project}/>) ||
                            <div className="nothing-found">
                                <div>🙁</div>
                                <p>No Projects Found....</p>
                            </div>
                        }
                    </div>
                    <div>
                        <button className="load-more">
                            <img src={LoadMore} alt="Load more projects"/>
                        </button>
                    </div>
                </div>
            </SectionFind>
        )
    }
}

export default FindProject