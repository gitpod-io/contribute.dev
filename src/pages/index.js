import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/variables'
import Layout from '../components/Layout'
import FindProject from '../components/FindProject'
import Feedback from '../components/Feedback'
import FileIssue from '../components/FileIssue'
import BlogPostPreview from '../resources/teaser-launch-min.jpg'
import GoogleIcon from '../resources/google.png'
import FirefoxIcon from '../resources/firefox.svg'
import NetlifyIcon from '../resources/netlify.svg'

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

        img {
            height: 5rem;

            &:not(:last-child) {
                margin-right: 9rem;
            }
        }
    }
`

export default () => {
    return (
        <Layout>
            <FindProject />
            <Feedback />
            <FileIssue />
            <div className="row" id="about">
                <section>
                    <div className="outline-left">
                        <h2>About</h2>
                        <p>
                           Open source is great! And it lives from passionate contributors who are investing their precious free time in it. Let’s not waste that time for tedious setups.
                        </p>
                        <p>
                           By adding a Gitpod button to your GitHub repository, your contributors can start coding immediately: no more waiting for builds to run and code to compile, it’s just coding. If you would like to know more about Gitpod and how it works, have a look at the blog post below.
                        </p>
                    </div>
                </section>
                <SectionBlogPost>
                    <div className="img">&nbsp;</div>
                    <div>
                        <h2>Introducing Gitpod &mdash; Frictionless Coding on GitHub</h2>
                        <p>Every day developers waste millions of hours switching contexts between projects and branches, setting up development environments, or simply waiting for builds to complete.</p>
                        <a href="https://www.gitpod.io/blog/gitpod-launch/" className="btn">Blog Post</a>
                    </div>
                </SectionBlogPost>
                <SectionSponsoring>
                    <div className="outline-left" id="sponsor">
                        <h2>Sponsoring</h2>
                        <p>Big shout out to our sponsors who help empower the open-source community. Thanks a lot! If you’d also like to support frictionless open-source contribution financially or by providing resources, please let us know.</p>
                        <a href="#" className="btn">Become a sponsor</a>
                    </div>
                    <div className="icons">
                        <img src={GoogleIcon} alt="Google Logo" style={{height: '3.3rem', transform: 'translateY(1rem)'}} />
                        <img src={FirefoxIcon} alt="Firefox Logo" />
                        <img src={NetlifyIcon} alt="Netlify Logo" style={{transform: 'scale(.9)'}} />
                    </div>
                </SectionSponsoring>
            </div>
        </Layout>
    )
}
