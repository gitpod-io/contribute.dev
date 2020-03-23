import React from 'react'
import styled from '@emotion/styled'
import GithubMark from '../resources/githubmark.png'

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 0 auto 6rem;
    padding-top: 4rem;
    text-align: center;

    & img {
        height: 2rem;
    }
`

const Footer = () => (
    <StyledFooter>
        <p><a href="https://github.com/gitpod-io/contribute.dev" target="_blank" rel="noopener" title="contribute.dev repository" aria-label="contribute.dev repository"><img src={GithubMark} alt="Github Mark" /></a></p>
        <p>© 2019 by <a href="https://www.typefox.io/" target="_blank" rel="noopener">TypeFox</a></p>
    </StyledFooter>
)

export default Footer