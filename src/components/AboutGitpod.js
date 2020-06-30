import React from 'react'

import styled from '@emotion/styled'
import { breakpoints, colors } from '../utils/variables'
import BlogPostPreview from '../resources/teaser-launch-min.jpg'

const SectionAboutGitpod = styled.section`
    background: ${colors.offWhite};

    .contents {
        display: flex;
        justify-content: space-between;
        max-width: 105rem;
        padding: 4rem 3rem;
        margin: 0 auto;
        background: ${colors.white};
        border: 2px solid ${colors.offWhite2};
        border-radius: 3px;

        @media(max-width: ${breakpoints.md}) {
            flex-direction: column;
            max-width: 75rem;
        }
    }

    .img {
        flex: 0 0 50%;
        min-height: 30rem;
        min-width: 25rem;
        background: url(${BlogPostPreview});
        background-position: center;
        background-size: cover;
    }

    .text {
        flex: 0 0 45%;
        padding: 5rem 0;
    }

   h3 {
       margin-bottom: 3rem;
   }
`

const AboutGitpod = () => (
    <SectionAboutGitpod>
        <div className="row">
            <h2>About Gitpod</h2>
            <div className="contents">
                <div className="img">&nbsp;</div>
                <div className="text">
                    <h3>Introducing Gitpod — Frictionless Coding on GitLab, GitHub & Bitbucket</h3>
                    <p>Every day developers waste millions of hours switching contexts between projects and branches, setting up development environments, or simply waiting for builds to complete.</p>
                    <a
                        href="https://www.gitpod.io/blog/gitpod-launch/"
                        target="_blank"
                        rel="noopener"
                        className="btn"
                    >
                        Learn more about Gitpod
                </a>
                </div>
            </div>
        </div>
    </SectionAboutGitpod>
)

export default AboutGitpod