import React from 'react'

import styled from '@emotion/styled'
import ArrowUp from '../resources/arrow-up.svg'
import { Link } from 'gatsby'
import { colors } from '../utils/variables'

const StyledBackToTop = styled(Link)`
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.5rem;
    width: 5.5rem;
    background: ${colors.purple};
    border-radius: 50%;
    box-shadow: 0 .5rem 1rem rgba(0,0,0, .2);

    img {
        height: 4rem;
    }
`

const BackToTop = () => {
    return (
        <StyledBackToTop to="#top" title="Back to Top">
            <img src={ArrowUp} alt="Back to Top"/>
        </StyledBackToTop>
    )
}

export default BackToTop