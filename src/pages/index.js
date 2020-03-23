import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import FindProject from '../components/FindProject'
import Feedback from '../components/Feedback'
import FileIssue from '../components/FileIssue'
import Stream from '../resources/stream1.svg'
import BlogPost from '../components/BlogPost'

export default () => {
    return (
        <Layout canonical='/'>
            <img src={Stream} aria-hidden={true} className="stream-left"/>
            <Header />
            <FindProject />
            <FileIssue />
            <Feedback />
            <BlogPost />
        </Layout>
    )
}
