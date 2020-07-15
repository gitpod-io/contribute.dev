import React, { useState, useEffect } from 'react'

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
    background: ${colors.offWhite3};
    border-radius: 50%;
    box-shadow: 0 .5rem 1rem rgba(0,0,0, .2);
    transition: transform .4s, opacity .4s, box-shadow .2s, color .2s;

    &:hover {    
        box-shadow: 0 .3rem .6rem rgba(0,0,0, .3);
        background: ${colors.purple};
    }

    img {
        height: 4rem;
    }
`

const BackToTop = () => {
    const [isRendered, setIsRendered] = useState(false)

    const scroll = () => 
        window.scrollY > 600 ? setIsRendered(true) : setIsRendered(false)

    useEffect(() => {
        window.addEventListener('scroll', scroll)

        return () => {
            window.removeEventListener('scroll', scroll)
        }
    })

    return (
        <StyledBackToTop 
            to="#top" 
            title="Back to Top" 
            style={{
                visibility: isRendered ? 'visible' : 'none',
                transform: isRendered ? 'scale(1)' : 'scale(0)',
                opacity: isRendered ? 1 : 0
            }}
        >
            <img src={ArrowUp} alt="Back to Top"/>
        </StyledBackToTop>
    )
}

export default BackToTop