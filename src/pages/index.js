import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/variables'
import Layout from '../components/Layout'
import FindProject from '../components/FindProject'
import Feedback from '../components/Feedback'
import FileIssue from '../components/FileIssue'
import BlogPostPreview from '../resources/teaser-gitpodify.jpg'
import GoogleIcon from '../resources/google.png'
import FirefoxIcon from '../resources/firefox.svg'

const SectionBlogPost = styled.section`
    display: flex;
    border-top: 1px solid;
    border-bottom: 1px solid;
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
        margin: 14rem auto 9rem;

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
            <div className="row">
                <section>
                    <div className="outline-left">
                        <h2>Help us out</h2>
                        <p>
                            Would you like to know how to simplify contributions on Github repository? Take a look at gitpodified projects, this might help you to get a feeling for it. If you need more detailed descriptions, have a look at the blog post underneath.</p>
                        <p>
                            If you get stuck feel free to reach out to @dgjdgh, @gedge @hjdg or @hjgd.
                    </p>
                    </div>
                </section>
                <SectionBlogPost>
                    <div class="img">&nbsp;</div>
                    <div>
                        <h2>How to fully automate your dev enviroments on Github?</h2>
                        <p>If you'd like add the one click experience to a Github repository, have a look at Jan's blog post "Gitpodify - The Ultimate Guide". He explains you how to get a repository smoothly running in Gitpod.</p>
                        <a href="#" className="btn">Blog Post</a>
                    </div>
                </SectionBlogPost>
                <SectionSponsoring>
                    <div className="outline-left">
                        <h2>Sponsoring</h2>
                        <p>Big shout out to our sponsors who make it possible for us to support the open-source community! Thanks a lot!. If you'd also like to support us financially or by giving us resources, please let us know.</p>
                        <a href="#" className="btn">Become a sponsor</a>
                    </div>
                    <div className="icons">
                        <img src={GoogleIcon} alt="Google" style={{height: '3.3rem', transform: 'translateY(1rem)'}} />
                        <img src={FirefoxIcon} alt="Firefox" />
                    </div>
                </SectionSponsoring>
            </div>
        </Layout>
    )
}
