import React from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto 10rem;
    padding-top: 4rem;
    border-top: 1px solid;
    text-align: center;

`

const Footer = () => (
    <StyledFooter>
            <p>Copyright 2019 Typefox | All Rights Reserved | Imprint | Privacy | Terms</p>
    </StyledFooter>
)

export default Footer