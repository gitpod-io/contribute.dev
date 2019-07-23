import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/variables'

const Styled = styled.section`
    width: 70%;
    max-width: 90rem;
    margin: 10rem auto;
    padding: 5rem 0;
    border: 3px solid ${colors.purple};

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
            <h2>Get your repo listed</h2>
            <p>That's great! Please file an issue with a link to your repository so we can help you set up the one-click experience with Gitpod. Afterwards we'll add your repository to the list and you can add the &nbsp;
            <span className="sheilds">
                <span className="sheild sheild--1">contributor&nbsp;</span>
                <span className="sheild sheild--2">friendly</span>
            </span> tag if you like.</p>
            <div style={{textAlign: 'center'}}>
                <a href="https://github.com/gitpod-io/contribute.dev/issues/new?title=Please+add+my+project" target="_blank" className="btn">File issue</a>
            </div>
        </div>
    </Styled>
)

export default FileIssue