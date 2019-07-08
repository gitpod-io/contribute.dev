import React from 'react'
import styled from '@emotion/styled'
import GithubMark from '../resources/githubmark.png'
import Star from '../resources/star.svg'
import GitpodLogo from '../resources/gitpod.png'
import { breakpoints } from '../utils/variables.js'

const Styled = styled.div`
    position: relative;
    display: flex;
    justify-contents: space-between;
    font-size: 1.5rem;
    padding: 2rem;
    box-shadow: 0 .2rem .4rem rgba(0,0,0, .65);
    border-radius: 3px;

    @media(max-width: ${breakpoints.md}) {
        flex-direction: column;
    }

    &:not(:last-child) {
        margin-bottom: 4rem;
    }

    .img-container {
        flex: .4;
        text-align: center;
    }

    .text {
        flex: 1.6;
        padding: 0 2rem;
        @media(max-width: ${breakpoints.md}) {
            margin-bottom: 2rem;
        }
    }

    .tags {
        flex: .8;
        padding: 0 2rem;
        margin-bottom: 1rem;
    }

    .stars {
        font-size: 1.7rem;
        flex: .8;

        & img {
            height: 1.7rem;
        }
    }

    img {
        height: 6.5rem;
    }

    h3 {
        margin-bottom: 1rem;
       & img {
           height: 1.8rem;
       }
    }

    p {
        margin-bottom: 3rem;
        max-width: 40rem;
    }

    .open-with-gitpod {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 2rem;
        font-size: 1.4rem;

        img {
            height: 2.2rem;
            padding-right: .3rem;
            transform: translateY(.5rem);
        }

        a {
            padding: 1rem;
            text-decoration: none;
            color: inherit;
            font-size: 1.5rem;
            border: 1px solid;
            border-radius: 3px;
        }
    }
`

const Tag = styled.span`
    display: inline-block;
    padding: .5rem 1rem;
    border-radius: 3px;
    font-size: 1.4rem;
    color: #fff;
    background: ${props => props.backgroundColor};

    &:not(:last-child) {
        margin-right: .5rem;
        margin-bottom: .5rem;
    }
`

const importAll = (r) => {
    let icons = {}
    r.keys().map((item, index) => { icons[item.replace('./', '')] = r(item) })
    return icons
}

const icons = importAll(require.context('../resources/projects/', false, /\.(png|jpe?g|svg)$/))

const Project = (props) => {
    return (
        <Styled>
            <div className="img-container">
                <img src={icons[props.logo]} alt={props.title} />
            </div>
            <div className="text">
                <h3>{props.title} <img src={GithubMark} alt="Github Mark"/></h3>
                <p>{props.description}</p>
                <Tag backgroundColor="#716e6e">{props.language}</Tag>
            </div>
            <div className="tags">
                {
                    props.tags.map((tag, i) => <Tag backgroundColor={tag.color} key={i}>{tag.name}</Tag>)
                }
            </div>
            <div className="stars"><img src={Star} /> {props.stars}</div>
            <div className='open-with-gitpod'>
                Open with&nbsp;&nbsp;
                <a href={`https://gitpod.io/#${props.repoURL}`}>
                    <img src={GitpodLogo} alt="Gitpod"/>
                    Gitpod
                </a>
            </div>
        </Styled>
    )
}

export default Project