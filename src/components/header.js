import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/variables'

const StyledHeader = styled.header`
    padding: 8rem 0;
    text-align: center;
`

const Hero = styled.div`
    p {
        max-width: 70rem;
        margin: 0 auto;
        font-size: 1.8rem;
        @media(max-width: ${breakpoints.xs}) {
            font-size: 1.6rem;
        }
    }
`

const Header = () => (
    <StyledHeader role='banner' id="top">
        <div className='row'>
            <Hero>
                <h1><strong>Frictionless</strong> Open-Source Contributions</h1>
                <p>Setting up a local dev environment can be daunting. All projects below describe their dev environment as code with <a href="https://www.gitpod.io" target="_blank">Gitpod</a>. Now you can start contributing with a single click.</p>
            </Hero>
        </div>
    </StyledHeader>
)

export default Header