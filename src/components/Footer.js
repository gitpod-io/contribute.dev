import React from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto 6rem;
    padding-top: 4rem;
    text-align: center;
`

const Footer = () => (
    <StyledFooter>
            <p>© 2019 by <a href="https://typefox.io" target="_blank" rel="noopener">TypeFox</a></p>
    </StyledFooter>
)

export default Footer