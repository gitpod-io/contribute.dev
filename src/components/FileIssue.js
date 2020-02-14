import React from 'react'
import styled from '@emotion/styled'
import { colors, breakpoints } from '../utils/variables'

const Styled = styled.section`
    width: 70%;
    max-width: 90rem;
    margin: 10rem auto;
    padding: 4rem 0;
    border: 3px solid ${colors.purple};
    font-size: 1.8rem;

    @media(max-width: ${breakpoints.sm}) {
        width: 90%;
    }

    & > div {
        width: 75%;
        margin: 2rem auto;
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
    <Styled>
        <div>
            <h2>Adding Your Project</h2>
            <p><strong>You want to streamline the experience for your contributors?</strong> We're happy to help automate your project's dev environment.
            Please file an issue with a link to your repository and we'll help you set it up. Once the experience is great we're happy to add your project to the list.</p>
            <div style={{textAlign: 'center'}}>
                <a href="https://github.com/gitpod-open-source/contribute.dev/issues/new?labels=&template=add-project.md&title=Please+add+%3CRepo+URL+here%3E" target="_blank" rel="noopener" className="btn">Add my project 🚀</a>
            </div>
        </div>
    </Styled>
)

export default FileIssue
