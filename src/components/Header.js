import React from 'react'
import styled from '@emotion/styled'
import { colors, breakpoints } from '../utils/variables'
import Plane from '../resources/plane.svg'
import Stream from '../resources/stream.svg'

const StyledHeader = styled.header`
    position: relative;
    height: 45vh;

    .svg {
        position: absolute;
        top: 0;
        left: 32%;
        width: 100%;

        @media(max-width: ${breakpoints.sm}) {
            left: 20px;
        }

        @media(max-width: 55.5rem) {
            left: 0;
        }

        @media(max-width: 55.5rem) {
            left: -10%;
        }

        .container {
            position: relative;
            width: 100%;
        }
    }

    .plane {
        position: absolute;
        height: 5rem;
        top: 67px;
        left: 577px;

        @media(max-width: ${breakpoints.sm}) {
            height: 4rem;
            top: 61px;
            left: 464px;
        }

        @media(max-width: 55.5rem) {
            height: 3rem;
            top: 40px;
            left: 378px;
        }
    }

    .stream {
        position: absolute;
        top: -100px;
        height: 30rem;

        @media(max-width: ${breakpoints.sm}) {
            top: -70px;
            height: 25rem;
        }

        @media(max-width: 55.5rem) {
            height: 20rem;
        }
    }

`

const Hero = styled.div`
    position: absolute;
    bottom: 0;

    p {
        width: 95%;
        font-size: 1.8rem;

        @media(min-width: ${breakpoints.sm}) {
            width: 45%;
        }

        @media(max-width: ${breakpoints.xs}) {
            font-size: 1.6rem;
        }
    }
`

const Header = () => (
    <StyledHeader role='banner'>
        <div className='row'>
            <div className="svg" aria-hidden={true}>
                <div className="container">
                    <img
                        src={Stream}
                        className='stream'
                        alt='Plance Stream'
                    />
                    <img
                        src={Plane}
                        className='plane'
                        alt='Paper Plane'
                    />
                    &nbsp;
                </div>
                &nbsp;
            </div>
            <Hero>
                    <h1>Frictionless Open-Source Contributions</h1>
                    <p className="seconed">Setting up a local dev environment can be daunting. - All the projects below have automated their dev setup with Gitpod, a free online IDE for GitHub. Now your first Open-Source contribution is just one click away.</p>
            </Hero>
        </div>
    </StyledHeader>
)

export default Header