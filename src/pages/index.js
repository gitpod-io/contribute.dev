import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/variables'
import Layout from '../components/Layout'
import Header from '../components/Header'
import FindProject from '../components/FindProject'
import Feedback from '../components/Feedback'
import FileIssue from '../components/FileIssue'
import BlogPostPreview from '../resources/teaser-launch-min.jpg'
import Stream from '../resources/stream1.svg'

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

export default () => {
    return (
        <Layout canonical='/'>
            <img src={Stream} aria-hidden={true} className="stream-left"/>
            <Header />
            <FindProject />
            <FileIssue />
            <Feedback />
            <div className="row" id="about">
                <SectionBlogPost>
                    <div className="img">&nbsp;</div>
                    <div>
                        <h2>Frictionless Coding on GitHub</h2>
                        <p>Every day developers waste millions of hours switching contexts between projects and branches, setting up development environments, or simply waiting for builds to complete.</p>
                        <a href="https://www.gitpod.io/blog/gitpod-launch/"
                            target="_blank" rel="noopener" className="btn">Learn more about Gitpod</a>
                    </div>
                </SectionBlogPost>

            </div>
        </Layout>
    )
}
