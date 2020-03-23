import React from 'react'
import styled from '@emotion/styled'
import GithubMark from '../resources/githubmark.png'
import GitpodLogo from '../resources/gitpod.png'
import GitpodButton from '../resources/open-in-gitpod.svg'
import { breakpoints, colors } from '../utils/variables.js'

const Styled = styled.div`
    position: relative;
    display: flex;
    justify-contents: space-between;
    font-size: 1.6rem;
    padding: 3rem 2rem 1rem;
    box-shadow: 0 .2rem .4rem rgba(0,0,0, .65);
    border-radius: 3px;

    @media(max-width: ${breakpoints.md}) {
        flex-direction: column;
    }

    @media(max-width: ${breakpoints.sm}) {
        padding: 1rem;
    }

    &:not(:last-child) {
        margin-bottom: 4rem;
    }

    img {
        object-fit: contain;
    }

    .img-container {
        flex: .4;
        text-align: center;

        .img {
            max-width: 100%;
            height: 7rem;
            
            @media(max-width: ${breakpoints.sm}) {
                max-width: 20rem;
            }
        }

        @media(max-width: ${breakpoints.md}) {
            margin-bottom: 2rem;
        }

        @media(max-width: ${breakpoints.sm}) {
            margin-top: 2rem;
        }
    }

    .text {
        flex: 1.6;
        padding: 0 2rem;
        @media(max-width: ${breakpoints.md}) {
            margin-bottom: 2rem;
        }

        @media(max-width: ${breakpoints.sm}) {
            margin-bottom: 1rem;
        }
    }

    .tags {
        flex: 1.2;
        padding: 0 2rem;
        margin-bottom: 1rem;
    }

    .tag {
        &__img {
            height: 20px;
            max-width: 100%;
            margin-right: 5px;
        }
    }

    .tag {
        display: inline-block;
        padding: .4rem .8rem;
        margin-bottom: 2rem;
        font-size: 1.3rem;
        background: #dfdfdf;
        color: ${colors.textPrimary};
        border-radius: .3rem;
    }

    .stars {
        flex: .8;
    }

    h3 {
        margin-bottom: 2rem;

        & img {
            height: 1.8rem;
        }
    }

    p {
        margin-bottom: 3rem;
        max-width: 40rem;

        @media(max-width: ${breakpoints.sm}) {
            margin-bottom: 1rem;
        }
    }

    a {
        text-decoration: none;
        color: ${colors.textPrimary};
    }

    .call-to-action {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media(max-width: ${breakpoints.md}) {
            flex-direction: row;
            padding: 0 2rem;
            margin-top: 4rem;
        }

        @media(max-width: ${breakpoints.xs}) {
            flex-direction: column;
            margin-top: 1rem;

            & > * {
                &:not(:last-child) {
                    margin-bottom: 3rem;
                }
            }
        }
    }

    .stars {
        font-size: 1.6rem;
        text-align: right;

         @media(max-width: ${breakpoints.md}) {
            display: flex;
            align-items: center;
            text-align: left;
        }
    }

    .open-in-gitpod {
        border: none;
        padding: 0;
        margin: 0;
        text-align: right;
        transition: all .2s;

        img {
            display: block;
            height: 32px;
        }

        &:hover,
        &:focus {
            transform: translateY(-.3rem);
            box-shadow: 0 .5rem 1rem rgba(0,0,0, .25);
        }

        &:active {
            transform: translateY(-.1rem);
        }
    }
`

const importAll = (r) => {
    let icons = {}
    r.keys().map((item, index) => { icons[item.replace('./', '')] = r(item) })
    return icons
}

const icons = importAll(require.context('../resources/projects/', false, /\.(png|jpe?g|svg)$/))

const Project = (props) => {
    const url = `https://github.com/${props.repoName}`
    return (
        <Styled>
            <div className="img-container">
                <a href={url} target="_blank" rel="noopener" aria-label={`${props.title} repository`}>
                    { props.logo ? <img src={icons[props.logo]} alt={props.title} className="img" /> : null }
                </a>
            </div>
            <div className="text">
                <a href={url} target="_blank" rel="noopener" aria-label={`${props.title} repository`}>
                    <h3>{props.title}&nbsp;<img src={GithubMark} alt="Github Mark" /></h3>
                </a>
                <p>{props.description}</p>
            </div>
            <div className="tags">
                { props.language ? <span className="tag">{props.language}</span> : null}
                <br />
                {
                    (props.tags || [{
                        href: `https://github.com/${props.repoName}/graphs/contributors`,
                        src: `https://img.shields.io/github/contributors/${props.repoName}.svg?style=flat-square`,
                        alt: `Contributors Count`
                    }]).map((tag, i) =>
                            <a href={tag.href} key={i}  aria-label={tag.alt}>
                                <img
                                    className="tag__img"
                                    src={tag.src}
                                    alt={tag.alt}
                                />
                            </a>
                        )
                }
            </div>
            <div className="call-to-action">
                <a href={url} target="_blank" rel="noopener">
                    <div className="stars"><img src={`https://img.shields.io/github/stars/${props.repoName}.svg?style=social`} alt={props.title} style={{height: 20}} /></div>
                </a>
                <a href={`https://gitpod.io/#${url}`} target="_blank" rel="noopener">
                    <button className="open-in-gitpod" aria-label="Open in Gitpod">
                        <img src={GitpodButton} alt="Open in Gitpod"/>
                    </button>
                </a>
            </div>
        </Styled>
    )
}

export default Project