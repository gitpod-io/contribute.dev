import React from 'react'

import Layout from '../components/layout'
import Header from '../components/header'
import FindProject from '../components/find-project'
import Feedback from '../components/feedback'
import FileIssue from '../components/file-issue'
import AboutGitpod from '../components/about-gitpod'
import BackToTop from '../components/back-to-top'

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
