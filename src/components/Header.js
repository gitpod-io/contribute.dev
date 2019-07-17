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
        width: 95%;

        @media(min-width: ${breakpoints.sm}) {
            width: 50%;

            &.seconed {
                width: 40%;
                margin-top: 50px;

                span {
                    font-weight: bold;
                }
            }
        }
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
                    <h1>Frictionless open-source contribution</h1>
                    <p>Let’s leverage open-source projects by making contributions as simple as possible.</p>
                    <p className="seconed">You can contribute to all repositories listed below with one click. No need to install dependencies, go through long README files or compile code for hours. <span>Just ‚open in Gitpod‘ and start coding.</span></p>
                </div>
            </Hero>
        </div>
        <img src={Rocket} className="rocket" />
        <img src={Path} className='path'/>
    </StyledHeader>
)

export default Header