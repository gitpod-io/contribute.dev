import React from 'react'

import Layout from '../components/Layout'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Error404 from '../resources/error404.svg'
import { breakpoints } from '../utils/variables'

const StyledNotFoundPage = styled.div`
    position: relative;
    height: 110vh;
    display: flex;
    justify-contents: center;
    align-items: center;

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
        height: 95rem;
        top: -44%;

        @media(max-width: 1080px) {
            display: none;
        }
    }

    .text {
        max-width: 60rem;
        margin: auto;
        font-size: 105%;
    }
`

const NotFoundPage = () => (
    <Layout>
        <StyledNotFoundPage>
            <div className="row">
                <img src={Error404} aria-hidden="true"/>
                <div className="text">
                    <h1>Oops</h1>
                    <p>Error 404: We can't find the page you're looking for.</p>
                    <Link to="/" >Go Back &nbsp;&rarr;</Link>
                </div>
            </div>
        </StyledNotFoundPage>
    </Layout>
)

export default NotFoundPage