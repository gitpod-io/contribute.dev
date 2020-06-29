import React from 'react'
import styled from '@emotion/styled'
import { colors, breakpoints } from '../utils/variables'

const StyledHeader = styled.header`
    background: ${colors.offWhite};
    padding: 8rem 0;
    text-align: center;
`

const Hero = styled.div`
    p {
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
                <p>All projects below have automated their dev setup with <a href="https://www.gitpod.io" target="_blank">Gitpod</a>.</p>
            </Hero>
        </div>
    </StyledHeader>
)

export default Header