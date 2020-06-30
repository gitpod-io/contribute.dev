import React from 'react'

import Layout from '../components/Layout'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Error404 from '../resources/error404.svg'
import { breakpoints, colors } from '../utils/variables'

const StyledNotFoundPage = styled.div`
    height: 110vh;
    display: flex;
    align-items: center;
    background: ${colors.offWhite};

    @media(max-width: 1080px) {
        height: 70vh;
    }    

    h1 {
        font-size: 7rem;

        @media(max-width: 1080px) {
            font-size: 6rem;
        }
    }

    img {
        position: absolute;
        height: 105rem;
        bottom: -18.5rem;
        left: -24rem;

        @media(max-width: 1080px) {
            display: none;
        }
    }

    .text {
        position: relative;
        max-width: 60rem;
        margin: auto;
        font-size: 105%;
    }
`

const NotFoundPage = () => (
    <Layout>
        <StyledNotFoundPage>
            <div className="row">
                <div className="text">
                    <img src={Error404} aria-hidden="true"/>
                    <h1>Oops</h1>
                    <p>Error 404: We can't find the page you're looking for.</p>
                    <Link to="/" className="btn">Back to Home &nbsp;&rarr;</Link>
                </div>
            </div>
        </StyledNotFoundPage>
    </Layout>
)

export default NotFoundPage