import React from 'react';

import styled from '@emotion/styled';
import Illustration from '../resources/illustration-grid.jpg';
import IllustrationSmall from '../resources/illustration-small.jpg';
import { breakpoints, colors, shadows } from '../utils/variables';

const StyledGetStarted = styled.section`
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f9f9f9;
        border-radius: 6.4rem;
        box-shadow: ${shadows.normal};

        @media(max-width: 860px) {
            flex-direction: column;
            text-align: center;
            max-width: 500px;
            margin: 0 auto;
        }
    }

    .text {
        flex: 0 0 45%;
        padding: 5rem 2rem 2rem 7rem;
        
        @media(max-width: 860px) {
            padding: 5rem 0 7rem;
            max-width: 400px;
        }

        @media(max-width: ${breakpoints.sm}) {
            padding: 5rem 0 7rem 5rem;
        }
    }

    .img-container {
        flex: 1;
        
        @media(max-width: 860px) {
            padding: 0 5rem 5rem;
        }
    }

    h2 {
       @media(min-width: 861px) {
        text-align: left;

        &::after {
            display: none;
        }
       }
    }

    img {
        display: block;
        object-fit: contain;
        max-width: 100%;
        
        @media(min-width: 861px) {
            border-top-right-radius: 6.4rem;
            border-bottom-right-radius: 6.4rem;
        }
    }
`;

const GetStarted = () => (
    <div className="row">
        <StyledGetStarted>
            <div className="container">
                <div className="text">
                    <h2>Get Started with Gitpod</h2>
                    <p>Spin up fresh, automated dev environments for each task, in the cloud, in seconds.</p>
                    <a href="https://www.gitpod.io/#get-started" className="btn">Try Now</a>
                </div>
                <div className="img-container">
                    <picture>
                        <source srcSet={IllustrationSmall} media="(max-width: 860px)" />
                        <img src={Illustration} alt="Gitpod in a Nutshell" />
                    </picture>
                </div>
            </div>
        </StyledGetStarted>
    </div>
)

export default GetStarted