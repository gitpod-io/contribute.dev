import React, { useState, useEffect } from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Plane from '../resources/plane.svg'
import { colors } from '../utils/variables'

const StyledNav = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1000;
    background: hsl(0 5% 96% / 85%);
    backdrop-filter: saturate(0.5) blur(5px);
    border-bottom: 1px solid transparent;
    transition: all .2s;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 0;
    }

    .logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: inherit;
    }

    img {
        display: inline-block;
        height: 3rem;
        margin-right: 1rem;
    }
`

const Nav = () => {
    const [scrolledOut, setScrolledOut] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setScrolledOut(true)
            } else {
                setScrolledOut(false)
            }
        })
    })

    return (
        <StyledNav style={scrolledOut ? { borderBottom: `1px solid ${colors.offWhite2}` } : {}}>
            <div className="row">
                <nav>
                    <Link
                        to='/'
                        className="logo"
                    ><img src={Plane} alt="Plance" /> contribute.dev</Link>
                    <a
                        href="#add-my-project"
                        className="btn"
                    >
                        Add My Project
                    </a>
                </nav>
            </div>
        </StyledNav>
    )
}

export default Nav