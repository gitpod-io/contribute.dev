import React from 'react'
import styled from '@emotion/styled'
import { colors, breakpoints } from '../utils/variables'
import Path from '../resources/path-rocket-icon.svg';
import Rocket from '../resources/rocket-icon.svg';

const StyledHeader = styled.header`
    position: relative;
    height: 100vh;

    .path {
        position: absolute;
        top: 28%;
        right: 0;
        height: 46rem;

        @media(max-width: ${breakpoints.sm}) {
            display: none;
        }
    }

    .rocket {
        position: absolute;
        top: 25%;
        right: 14%;
        height: 7.6rem;

        @media(max-width: ${breakpoints.sm}) {
            display: none;
        }
    }
`

const Navigation = styled.nav`
    display: flex;
    padding: 9rem 0;

    a {
        text-decoration: none;
        color: ${colors.textPrimary};

        &:not(:last-child) {
            margin-right: 4rem;
        }
    }
`

const Hero = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-30%);

    p {
        width: 60%;
    }

    .btn {
        margin-top: 5rem;
    }
`

const Header = () => (
    <StyledHeader role='header'>
        <div className='row'>
            <Navigation role='navigation'>
                <a href='#'>Find a Project</a>
                <a href='#'>Sponsoring</a>
                <a href='#'>Help us out</a>
            </Navigation>
            <Hero>
                <div className="outline-left">
                    <h1>On a mission to frictionless open-source contribution</h1>
                    <p>Let's make open-source contribution together as convenient as possible.</p>
                    <p>Adding a gitpod button lets you contribute with one click. Have a look at the Projects that are already taking part in this journey.</p>
                </div>
                <a href="#" className="btn">Submit a repository</a>
            </Hero>
        </div>
        <img src={Rocket} className="rocket" />
        <img src={Path} className='path'/>
    </StyledHeader>
)

export default Header