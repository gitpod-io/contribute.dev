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
        margin: 2rem 0;
    }
`

const Sheild = styled.span`
    display: inline-block;
    padding: .5rem 1.5rem;
    color: #fff;
    background-color: ${ (props) => props.color && props.color };
`

const FileIssue = () => (
    <Styled>
        <div>
            <h2>Would you like your repository to be listed here?</h2>
            <p>That's great! Please file an issue with a link to your repo here so we can add your repository. If you'd like to visualize your contributor friendly repository, add the following sheild.</p>
            <div class="sheild">
                <Sheild color="#595858">contributor</Sheild>
                <Sheild color="#00f300">friendly</Sheild>
            </div>
            <div style={{textAlign: 'center'}}>
                <a href="#" className="btn">File issue</a>
            </div>
        </div>
    </Styled>
)

export default FileIssue