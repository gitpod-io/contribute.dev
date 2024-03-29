import React from 'react'
import styled from '@emotion/styled'
import GithubMark from '../resources/githubmark.png'

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 0 auto 0;
    padding: 4rem 0 6rem;
    text-align: center;

    & img {
        height: 2rem;
    }
`

const Footer = () => (
    <StyledFooter>
        <p><a href="https://github.com/gitpod-io/contribute.dev" target="_blank" rel="noopener" title="contribute.dev repository" aria-label="contribute.dev repository"><img src={GithubMark} alt="Github Mark" /></a></p>
        <p>© {(new Date()).getFullYear()} by <a href="https://www.gitpod.io/" target="_blank" rel="noopener">Gitpod</a></p>
    </StyledFooter>
)

export default Footer
