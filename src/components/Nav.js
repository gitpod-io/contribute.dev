import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Plane from '../resources/plane.svg'
import { colors } from '../utils/variables'

const StyledNav = styled.div`
    background: ${colors.offWhite};
    position: relative;
    z-index: 1000;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6rem 0;
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

const Nav = () => (
    <StyledNav>
        <div className="row">
            <nav>
                <Link
                    to='/'
                    className="logo"
                ><img src={Plane} alt="Plance" /> contribute.dev</Link>
                <a 
                    href="https://github.com/gitpod-io/contribute.dev/issues/new?labels=&template=add-project.md&title=Please+add+%3CRepo+URL+here%3E" 
                    target="_blank"
                    className="btn"
                >
                    Add My Project
                </a>
            </nav>
        </div>
    </StyledNav>
)

export default Nav