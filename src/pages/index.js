import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/variables'
import Layout from '../components/Layout'
import FindProject from '../components/FindProject'
import Feedback from '../components/Feedback'
import FileIssue from '../components/FileIssue'
import BlogPostPreview from '../resources/teaser-launch-min.jpg'
import GoogleIcon from '../resources/google.png'
import NetlifyIcon from '../resources/netlify.svg'
import Patreon from '../resources/patreon.jpg'

const SectionBlogPost = styled.section`
    display: flex;
    margin: 5rem 0;

    @media(max-width: ${breakpoints.sm}) {
            flex-direction: column;
    }

    & > div {
        padding: 2rem 3rem;
        @media(min-width: ${breakpoints.md}) {
            width: 50%;
        }
    }

    .img {
        min-height: 30rem;
        min-width: 25rem;
        background: url(${BlogPostPreview});
        background-position: center;
        background-size: cover;
    }

    h2 {
        margin-bottom: 3rem;
    }

    a {
        margin: 3rem 0 4rem;
    }
`

const SectionSponsoring = styled.section`
    .icons {
        display: flex;
        justify-content: center;
        margin: 14rem auto 5rem;

        @media(max-width: ${breakpoints.xs}) {
            flex-direction: column;
            text-align: center;
        }

        a {
            &:not(:last-child) {
                margin-right: 9rem;

                @media(max-width: ${breakpoints.md}) {
                    margin-right: 4rem;
                }
            }
        }

        img {
            height: 5rem;
            display: inline-block;

            @media(max-width: ${breakpoints.md}) {
                height: 4rem;
            }

            @media(max-width: ${breakpoints.sm}) {
                margin-bottom: 5rem;
            }
        }

        img[alt="Google Logo"] {
            height: 3.5rem;
            transform: translateY(1rem);

            @media(max-width: ${breakpoints.sm}) {
                transform: translatex(3rem);
            }
        }
    }

    .btn {

        &--patreon {
            font-weight: 500;
            color: #fff;
            text-transform: uppercase;
            background: #ff5a49;
            border-radius: 0;
            border-color: #ff5a49;
            padding-left: 4.5rem;
            padding-right: 1rem;

            &::before {
                position: absolute;
                top: 11%;
                left: 5px;
                content: '';
                background: url(${Patreon});
                display: inline-block;
                background-size: 3.5rem 3.5rem;
                width: 3.5rem;
                height: 3.5rem;
                transfrom: translateY(-50%);
            }
        }

        &:not(:last-child) {
            margin-right: 3rem;

            @media(max-width: ${breakpoints.xs}) {
                margin-bottom: 2rem;
            }
        }
    }
`

export default () => {
    return (
        <Layout>
            <FindProject />
            <FileIssue />
            <Feedback />
            <div className="row" id="about">
                <section>
                        <h2>About</h2>
                        <p>
                           Open source is great! And it lives from passionate contributors who are investing their precious free time in it. Let’s not waste that time for tedious setups.
                        </p>
                        <p>
                           By adding a Gitpod button to your GitHub repository, your contributors can start coding immediately: no more waiting for builds to run and code to compile, it’s just coding. If you would like to know more about Gitpod and how it works, have a look at the blog post below.
                        </p>
                </section>
                <SectionBlogPost>
                    <div className="img">&nbsp;</div>
                    <div>
                        <h2>Introducing Gitpod &mdash; Frictionless Coding on GitHub</h2>
                        <p>Every day developers waste millions of hours switching contexts between projects and branches, setting up development environments, or simply waiting for builds to complete.</p>
                        <a href="https://www.gitpod.io/blog/gitpod-launch/"
                        target="_blank" className="btn">Blog Post</a>
                    </div>
                </SectionBlogPost>
                <SectionSponsoring>
                    <div id="sponsor">
                        <h2>Sponsoring</h2>
                        <p>Big shout out to our sponsors who help empower the open-source community. Thanks a lot! If you’d also like to support frictionless open-source contribution financially or by providing resources, please let us know.</p>
                        <a href="mailto:contact@gitpod.io?subject=Become a Sponsor automatically?" className="btn">Become a sponsor</a>
                        <a href="https://www.patreon.com/bePatron?u=22556675" target="_blank" data-patreon-widget-type="become-patron-button" className="btn btn--patreon">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
                    </div>
                    <div className="icons">
                        <a href="https://cloud.google.com" target="_blank">
                            <img src={GoogleIcon} alt="Google Logo"/>
                        </a>
                        <a href="https://www.netlify.com/" target="_blank">
                            <img src={NetlifyIcon} alt="Netlify Logo" style={{transform: 'scale(.9)'}} />
                        </a>
                    </div>
                </SectionSponsoring>
            </div>
        </Layout>
    )
}
