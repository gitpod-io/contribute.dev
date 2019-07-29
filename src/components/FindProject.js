import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/variables'
import projectsData from '../data/github-projects.json'
import Project from '../components/Project'
import LoadMore from '../resources/load-more.svg'
import IconSmiley from '../resources/icon-smiley.svg'

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
                box-shadow: 0 .5rem 1rem rgba(0,0,0, .2);

                & + span {
                    transform: translateY(-.3rem);
                    color: ${colors.purple};
                }
            }
        }

        & > span {
            position: absolute;
            top: 3px;
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
        filteredProjects: '',
    }

    componentDidMount() {
        this.handleSearch()
    }

    handleSearch = (term = '') => {
        const searchTerm = term.toLowerCase()
        this.setState(() => ({searchTerm}))
        const filteredProjects = this.state.projects.filter((project) => {
            const isSearchTextMatch = Object.values(project).some((value) => {
                if (Array.isArray(value)) {
                    return value.some(val => {
                         return val["alt"].toLowerCase().includes(searchTerm)
                    })
                } else {
                    if(!(typeof value === "number")) {
                        return value.toLowerCase().includes(searchTerm)
                    }
                }
            })
            return isSearchTextMatch
        })
        this.setState({filteredProjects})
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
                            onChange={(e) => this.handleSearch(e.target.value)}
                        />
                        <span>&rarr;</span>
                    </div>
                    <div>
                        {
                            this.state.filteredProjects.length &&
                            this.state.filteredProjects.map(project => <Project key={project.id} {...project}/>) ||
                            <div className="nothing-found">
                                <img src={IconSmiley} alt="" aria-hidden={true}/>
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