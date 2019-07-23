import React from 'react'
import styled from '@emotion/styled'
import { colors, breakpoints } from '../utils/variables'
import Path from '../resources/path-rocket.svg'
import Rocket from '../resources/rocket-icon.svg'

const StyledHeader = styled.header`
    position: relative;
    height: 100vh;

    .path {
        position: absolute;
        top: 190px;
        right: 0;
        height: 46rem;

        @media(max-width: ${breakpoints.sm}) {
            display: none;
        }
    }

    .rocket {
        position: absolute;
        top: 150px;
        right: 150px;
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
        position: relative;
        text-decoration: none;
        color: ${colors.textPrimary};
        padding-bottom: .8rem;

        &:not(:last-child) {
            margin-right: 4rem;
        }

        &::after {
            content: '';
            position: absolute;
            border-bottom: 2px solid ${colors.purple};
            right: 100%;
            bottom: 0;
            left: 0;
            transition: right .4s cubic-bezier(0,.5,0, 1);
        }

        &:hover,
        &:focus {
            &::after {
                right: 0;
            }
        }
    }
`

const Hero = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-30%);

    p {
        width: 95%;

        &.seconed {
            & span {
                font-weight: bolder;
            }
        }

        @media(min-width: ${breakpoints.sm}) {
            width: 50%;

            &.seconed {
                width: 40%;
                margin-top: 50px;
            }
        }
    }
`

const Header = () => (
    <StyledHeader role='header'>
        <div className='row'>
            <Navigation role='navigation'>
                <a href='#find'>Find a Project</a>
                <a href='#about'>About</a>
                <a href='#sponsor'>Sponsoring</a>
            </Navigation>
            <Hero>
                <div className="outline-left">
                    <h1>Frictionless open-source contribution</h1>
                    <p>Let’s empower open-source projects by making contributions as simple as possible.</p>
                    <p className="seconed">You can contribute to all repositories listed below with one click. No need to install dependencies, go through long README files or compile code for hours.<span> Just ‚open in Gitpod‘ and start coding.</span></p>
                </div>
            </Hero>
        </div>
        <img src={Rocket} className="rocket" />
        <img src={Path} className='path'/>
    </StyledHeader>
)

export default Header