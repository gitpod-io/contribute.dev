import React from 'react'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/use-site-metadata'
import { fontSizes, colors, grid, breakpoints } from '../utils/variables'
import Favicon from '../resources/paper-plane.svg'
import Favicon196 from '../resources/paper-plane-196x196.png'
import AppleTouchIcon from '../resources/apple-touch-icon.png'
import Footer from '../components/Footer'
import Nav from './Nav'

const Layout = ({ children, canonical }) => {
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
                        font-size: 59.5%;
                    }

                    @media(max-width: ${breakpoints.sm}) {
                        font-size: 54.5%;
                    }

                    @media(max-width: 310px) {
                        font-size: 50%;
                    }

                    // Compatibility for blank pages with black background
                    background-color: ${colors.white};
                }

                body {
                    position: relative;
                    font-size: ${fontSizes.default};
                    color: ${colors.textPrimary};
                    font-family: 'Lato', sans-serif;
                    line-height: 1.4;
                    overflow-x: hidden;
                    box-sizing: border-box;
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
                    padding: 8rem 0;

                    @media(max-width: ${breakpoints.md}) {
                        padding: 6rem 0;
                    }
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
                    line-height: 1.1;
                }

                h1 {
                    font-size: 3.6rem;
                    margin-bottom: 3rem;
                    font-weight: 400;

                    @media(max-width: ${breakpoints.xs}) {
                        font-size: 2.8rem;
                    }
                }

                h2 {
                    font-size: ${fontSizes.large};
                    margin-bottom: 1.2rem;
                    text-align: center;

                    &::after {
                        content: "";
                        display: block;
                        height: 5px;
                        width: 10rem;
                        margin: 2.5rem auto 4rem;
                        border-radius: 5px;
                        background: ${colors.offWhite2};
                    }
                }

                h3 {
                    font-size: 2.1rem;
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

                    @media(max-width: 310px) {
                        width: 96%;
                    }
                }

                /* --------------------------------------------- */
                /* ----- Buttons ----- */
                /* --------------------------------------------- */

                .btn {
                    position: relative;
                    display: inline-block;
                    padding: 1rem 3.2rem;
                    text-decoration: none;
                    color: ${colors.white};
                    border-radius: 10rem;
                    transition: all .2s ease-in;
                    background: ${colors.purple};

                    @media(max-width: ${breakpoints.sm}) {
                        padding: 1rem 1.5rem;
                        font-size: 1.3rem;
                    }

                    @media(max-width: 280px) {
                        padding: 1rem 1.2rem;
                        font-size: 1.2rem;
                    }

                    &:hover,
                    &:focus {
                        box-shadow: 0 .5rem 1rem rgba(0,0,0, .25);
                    }

                    &:active {
                        box-shadow: 0 .3rem .7rem rgba(0,0,0, .25);
                    }
                }
            `} />
            <Helmet>
                <html lang='en' />
                <title>{title}</title>
                <meta name='description' content={description} />
                {
                    canonical ? <link rel="canonical" href={`https://contribute.dev${canonical}`} /> : null
                }
                <link rel="apple-touch-icon" type="image/png" href={AppleTouchIcon} sizes="180x180" />
                <link rel="icon" type="image/png" href={Favicon196} sizes="196x196" />
                <link rel="icon" type="image/svg+xml" href={Favicon} sizes="any" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" /> 
            </Helmet>
            <Nav />
            <main role="main">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
