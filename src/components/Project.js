import React from 'react'
import styled from '@emotion/styled'
import GithubMark from '../resources/githubmark.png'
import Star from '../resources/star.svg'
import GitpodLogo from '../resources/gitpod.png'
import GitpodButton from '../resources/open-in-gitpod.svg'
import { breakpoints, colors } from '../utils/variables.js'

const Styled = styled.div`
    position: relative;
    display: flex;
    justify-contents: space-between;
    font-size: 1.6rem;
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
        flex: 1.2;
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

    .call-to-action {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media(max-width: ${breakpoints.md}) {
            flex-direction: row;
            margin-top: 4rem;
        }
    }

    .stars {
        font-size: 1.6rem;
        text-align: right;
        img {
            height: 16px;
        }

         @media(max-width: ${breakpoints.md}) {
            text-align: left;
        }
    }

    .open-in-gitpod {
        border: none;
        padding: 0;
        margin: 0;
        text-align: right;
        img {
            height: 32px;
        }
    }
`

const StyledTag = styled.span`
    display: inline-block;
    border-radius: 3px;
    font-size: 1.3rem;
    color: #fff;

    &:not(:last-child) {
        margin-right: .5rem;
        margin-bottom: 1rem;
    }
`

const Tag = (props) => (
    <StyledTag {...props}>
        {
            props.content.split(' ').map(
                (entity, i) => {
                    if (i == 1) {
                        return (
                            <span
                                style={{
                                    padding: '.4rem .8rem',
                                    background: `${props.color}`,
                                    borderTopRightRadius: 3,
                                    borderBottomRightRadius: 3
                                }}>
                                {entity}
                            </span>
                        )
                    }
                    return (
                        <span
                            style={{
                                padding: '.4rem .8rem',
                                background: '#595858' ,
                                borderTopLeftRadius: 3,
                                borderBottomLeftRadius: 3
                            }}
                        >
                            {entity}
                        </span>
                    )
                }
            )
        }
    </StyledTag>
)

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
                <h3>{props.title} <img src={GithubMark} alt="Github Mark" /></h3>
                <p>{props.description}</p>
            </div>
            <div className="tags">
                <span
                    style={{
                        display: 'inline-block',
                        padding: '.4rem .8rem',
                        marginBottom: '1rem',
                        fontSize: '1.3rem',
                        backgroundColor: '#dfdfdf',
                        color: `${colors.textPrimary}`,
                        borderRadius: '.3rem',
                    }}
                >
                    {props.language}
                </span>
                <br />
                {
                    props.tags.map((tag, i) => <Tag color={tag.color} content={tag.name} key={i} />)
                }
            </div>
            <div className="call-to-action">
                <div className="stars"><img src={Star} />&nbsp;&nbsp;{props.stars}</div>
                <button className="open-in-gitpod">
                    <img src={GitpodButton} alt="Open in Gitpod" />
                </button>
            </div>
        </Styled>
    )
}

export default Project