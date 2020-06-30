import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import FindProject from '../components/FindProject'
import Feedback from '../components/Feedback'
import FileIssue from '../components/FileIssue'
import AboutGitpod from '../components/AboutGitpod'
import BackToTop from '../components/BackToTop'

export default () => {
    return (
        <Layout canonical='/'>
            <Header />
            <FindProject />
            <FileIssue />
            <Feedback />
            <AboutGitpod />
            <BackToTop />
        </Layout>
    )
}
