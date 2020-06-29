import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import FindProject from '../components/FindProject'
import Feedback from '../components/Feedback'
import FileIssue from '../components/FileIssue'
import BlogPost from '../components/BlogPost'
import BackToTop from '../components/BackToTop'

export default () => {
    return (
        <Layout canonical='/'>
            <Header />
            <FindProject />
            <FileIssue />
            <Feedback />
            <BlogPost />
            <BackToTop />
        </Layout>
    )
}
