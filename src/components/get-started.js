import React from 'react';

import styled from '@emotion/styled';
import Illustration from '../resources/illustration-grid.jpg';

const StyledGetStarted = styled.section`
    & > div {
        display: flex;
    }
`;

const GetStarted = () => (
    <div className="row">
        <StyledGetStarted>
            <div>
                <div>
                    <h2>Get Started</h2>
                    <p>Spin up fresh, automated dev environments for each task, in the cloud, in seconds.</p>
                    <a href="https://www.gitpod.io/" className="btn">Try Now</a>
                </div>
                <div>
                    <img src={Illustration} alt="Gitpod in a Nutshell" />
                </div>
            </div>
        </StyledGetStarted>
    </div>
)

export default GetStarted