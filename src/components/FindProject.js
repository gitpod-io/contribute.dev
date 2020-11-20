import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/variables'
import projectsData from '../data/projects.json'
import Project from '../components/Project'
import IconSmiley from '../resources/icon-smiley.svg'
import SearchIcon from '../resources/search.svg'

const SectionFind = styled.section`
    padding: 4rem 0 12rem;

    .filters {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4rem 0;

        input {
            padding: 0.7rem 1.6rem;
            background: ${colors.offWhite};
            border: none;
            border-radius: 10rem;
            transition: all .2s;

            &:focus,
            &:hover {
            }
        }

        img {
            height: 1.5rem;
            transform: translateX(-2.5rem);
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
        text-align: center;

        img {
            display: inline-block;
            width: 15rem;
            margin-bottom: 6rem;
        }

        h4 {
            font-size: 2rem;
            margin-bottom: 3rem;
        }

        button {
            padding: 0;
            font-size: 1.6rem;
            margin-right: .5rem;
            text-decoration: underline;
            border: none;
        }
    }
`

class FindProject extends React.Component {

    state = {
        projects: projectsData.projects || [],
        searchTerm: '',
        filteredProjects: [],
        toggle: false
    }

    componentDidMount() {
        this.handleSearch()
    }

    handleSearch = (term = '') => {
        const searchTerm = term.toLowerCase()
        this.setState(() => ({ searchTerm }))
        const filteredProjects = this.state.projects.filter((project) => {
            const isSearchTextMatch = Object.values(project).some((value) => {
                if (Array.isArray(value)) {
                    return value.some(val => {
                        return val["alt"].toLowerCase().includes(searchTerm)
                    })
                } else {
                    if (!(typeof value === "number")) {
                        return value.toLowerCase().includes(searchTerm)
                    }
                }
            })
            return isSearchTextMatch
        })
        this.setState({ filteredProjects })
    }

    render() {
        return (
            <SectionFind>
                <div className='row' id="find">
                    <div className="filters">
                        <input
                            placeholder="Search"
                            aria-label="Search"
                            value={this.state.searchTerm}
                            onChange={(e) => {
                                this.handleSearch(e.target.value)
                                this.setState({ toggle: true })
                            }}
                        />
                        <img src={SearchIcon} alt="Search" />
                    </div>
                    <div>
                        {
                            this.state.filteredProjects.length &&
                            this.state.filteredProjects.map(project => <Project key={project.repoName} {...project} />) || this.state.toggle &&
                            <div className="nothing-found">
                                <img src={IconSmiley} alt="" aria-hidden={true} />
                                <h4>Sorry, we can't find any projects matching your search</h4>
                                <p>Try&nbsp;
                                    <button
                                        onClick={() => this.handleSearch('help wanted')}
                                    >
                                        help wanted
                                    </button>
                                    ,&nbsp;
                                    <button
                                        onClick={() => this.handleSearch('Prs welcome')}
                                    >
                                        PRs welcome
                                    </button>
                                    , &nbsp;
                                    <button
                                        onClick={() => this.handleSearch('first timers only')}
                                    >
                                        first-timers-only
                                    </button>
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </SectionFind>
        )
    }
}

export default FindProject