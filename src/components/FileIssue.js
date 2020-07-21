import React from 'react'
import styled from '@emotion/styled'
import { colors, breakpoints } from '../utils/variables'

const Styled = styled.section`
    background: ${colors.offWhite};

    .card {
        width: 95%;
        max-width: 62rem;
        margin: 0 auto;
        padding: 4rem;
        background: ${colors.white};
        border: 2px solid ${colors.offWhite2};
        border-radius: 3px;

         & > div {
            @media(min-width: calc(${breakpoints.md} +1px)) {
                width: 70%;
            }
            margin: 2rem auto;
        }
    }

    h2 {
        text-align: center;
        margin-bottom: 3.5rem;
    }

    a {
        margin: 2rem auto 0 auto;
    }

    .sheild {
        display: inline-block;
        padding: .4rem 1.2rem;
        color: #fff;

        &--1 {
            background-color: #595858;
            border-top-left-radius: .3rem;
            border-bottom-left-radius: .3rem;
        }

        &--2 {
            background-color: #00f300;
            border-top-right-radius: .3rem;
            border-bottom-right-radius: .3rem;
        }
    }
`
const FileIssue = () => (
    <Styled id="add-my-project">
        <div className="card">
            <h2>Add My Project</h2>
            <p><strong>Do you want to streamline the experience for your contributors? </strong>
            </p>
            <p>
               We’re happy to help automate your project’s dev environment. Please file an issue with a link to your repository and we’ll help you set it up. Once the experience is great we’re happy to add your project to the list.
            </p>
            <div style={{ textAlign: 'center' }}>
                <a href="https://github.com/gitpod-io/contribute.dev/issues/new?labels=&template=add-project.md&title=Please+add+%3CRepo+URL+here%3E" target="_blank" rel="noopener" className="btn">File Issue</a>
            </div>
        </div>
    </Styled>
)

export default FileIssue
