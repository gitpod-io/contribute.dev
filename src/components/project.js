import React from 'react'
import styled from '@emotion/styled'
import GitHubMark from '../resources/githubmark.png'
import GitLabMark from '../resources/gitlabmark.svg'
import GitpodMark from '../resources/gitpod-mark.svg'
import { breakpoints, colors, radiuses, shadows } from '../utils/variables.js'

const Styled = styled.div`
    position: relative;
    display: flex;
    font-size: 1.6rem;
    padding: 4rem 2rem 2rem;
    border-radius: ${radiuses.normal};
    background: ${colors.white};
    box-shadow: ${shadows.normal};

    @media(max-width: ${breakpoints.md}) {
        flex-direction: column;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        padding: 3rem 2rem;
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
                max-width: 22rem;
            }
        }

        @media(max-width: ${breakpoints.md}) {
            margin-bottom: 2rem;

            .img {
                max-width: 14rem;
            }
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
        display: flex;
        align-items: center;

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
        h3 {
            transition: all .2s;
        }

        &:hover,
        &:focus {
            h3 {
                color: ${colors.link};
            }
        }
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
        display: flex;
        align-items: center;
        margin: 0;
        padding: .8rem 1.5rem;
        color: ${colors.black};
        text-decoration: none;
        text-align: right;
        transition: all .2s;
        font-size: 1.4rem;
        font-weight: 600;
        background: ${colors.white};
        border: none;
        border-radius: 1.6rem;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);

        img {
            display: block;
            height: 24px;
            width: 24px;
            margin-right: 1rem;
        }

        &:hover,
        &:focus {
            background: #f9f9f9;
        }
    }
`

const importAll = (r) => {
    let icons = {}
    r.keys().map((item) => { icons[item.replace('./', '')] = r(item) })
    return icons
}

const icons = importAll(require.context('../resources/projects/', false, /\.(png|jpe?g|svg)$/))

const Project = (props) => {
    const url = props.repo
    const platform = url.includes('github') ? 'github' : url.includes('gitlab') ? 'gitlab' : null
    const repoName = url.split('/').slice(-2).join('/')

    return (
        <Styled>
            <div className="img-container">
                <a href={url} target="_blank" rel="noopener" aria-label={`${props.title} repository`}>
                    {props.logo ? <img src={icons[props.logo]} alt={props.title} className="img" /> : null}
                </a>
            </div>
            <div className="text">
                <a href={url} target="_blank" rel="noopener" aria-label={`${props.title} repository`}>
                    <h3>{props.title}
                    </h3>
                </a>
                <p>{props.description}</p>
            </div>
            <div className="tags">
                {props.language ? <span className="tag">{props.language}</span> : null}
                <br />
                {
                    (props.tags || (platform === 'github' && [{
                        href: `${url}/graphs/contributors`,
                        src: `https://img.shields.io/github/contributors/${repoName}.svg`,
                        alt: `Contributors Count`
                    }] || [])).map((tag, i) =>
                        <a href={tag.href} key={i} aria-label={tag.alt}>
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
                    <div className="stars">
                        <img
                            src={platform === 'github' && `https://img.shields.io/github/stars/${repoName}.svg?style=social` || platform === "gitlab" && `https://img.shields.io/badge/dynamic/json?color=green&label=gitlab%20stars&query=star_count&url=https://gitlab.com/api/v4/projects/${props.gitLabId}`}
                            alt={props.title}
                            style={{ height: 20 }}
                        />
                    </div>
                </a>
                <a href={`https://gitpod.io/#${props.link ? props.link : url}`} className="open-in-gitpod" target="_blank" rel="noopener" aria-label="Open in Gitpod">
                    <img src={GitpodMark} alt="Gitpod" /> Open in Gitpod
                </a>
            </div>
        </Styled>
    )
}

export default Project