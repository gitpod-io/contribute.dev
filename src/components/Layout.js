import React from 'react'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/use-site-metadata'
import { fontSizes, colors, grid, breakpoints } from '../utils/variables'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Stream from '../resources/stream1.svg'

const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata()
    return (
        <>
            <Global styles={css`

                /* --------------------------------------------- */
                /* ----- Basic Setup ----- */
                /* --------------------------------------------- */

                *,
                *::before,
                *::after {
                    margin: 0;
                    padding: 0;
                    box-sizing: inherit;
                }

                html {
                    font-size: 62.5%;

                    @media(max-width: ${breakpoints.md}) {
                        font-size: 60.5%;
                    }

                    @media(max-width: ${breakpoints.sm}) {
                        font-size: 59.5%;
                    }
                }

                body {
                    position: relative;
                    font-size: ${fontSizes.default};
                    color: ${colors.textPrimary};
                    font-family: 'Nunito', sans-serif;
                    line-height: 1.4;
                    overflow-x: hidden;
                }

                .stream-left {
                    position: absolute;
                    height: 70vh;
                    top: 10vh;
                    left: -40vh;
                    
                    @media(max-width: ${breakpoints.md}) {
                        display: none;
                    }
                }

                section {
                    padding: 6rem 0;
                }

                a,
                button {
                    cursor: pointer;
                    outline: none;
                }

                button,
                input {
                    font-family: inherit;
                    outline: none;
                }


                /* --------------------------------------------- */
                /* ----- Headlines and Paragraphs ----- */
                /* --------------------------------------------- */

                h1,
                h2,
                h3,
                h4 {
                    font-family: 'Playfair Display', serif;
                    line-height: 1.1;
                }

                h1 {
                    font-size: 3.2rem;
                    margin-bottom: 2.5rem;
                }

                h2 {
                    font-size: ${fontSizes.large};
                    margin-bottom: 1.2rem;
                }

                h3 {
                    font-size: 2.3rem;
                }

                p {
                    &:not(:last-child) {
                        margin-bottom: 2rem;
                    }
                }

                /* --------------------------------------------- */
                /* ----- Layout Helpers ----- */
                /* --------------------------------------------- */

                .row {
                    margin: 0 auto;
                    width: 90%;
                    max-width: ${grid.maxWidth};
                }

                /* --------------------------------------------- */
                /* ----- Buttons ----- */
                /* --------------------------------------------- */

                .btn {
                    position: relative;
                    display: inline-block;
                    padding: 1.2rem 3.2rem;
                    border: 1px solid;
                    text-decoration: none;
                    color: ${colors.textPrimary};
                    border-radius: 3px;
                    transition: all .2s ease-in;

                    &:hover,
                    &:focus {
                        transform: translateY(-.3rem);
                        box-shadow: 0 1rem 2rem rgba(0,0,0, .25);
                    }

                    &:active {
                        transform: translateY(-.1rem);
                        box-shadow: 0 .5rem 1rem rgba(0,0,0, .25);
                    }
                }
            `} />
            <Helmet>
                <html lang='en' />
                <title>{title}</title>
                <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Nunito:400,900&display=swap" rel="stylesheet" />
                <meta name='description' content={description} />
            </Helmet>
            <img src={Stream} aria-hidden={true} className="stream-left"/>
            <Header />
            <main role="main">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout