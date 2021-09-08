import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/use-site-metadata"
import Favicon from "../resources/paper-plane.svg"
import Favicon196 from "../resources/paper-plane-196x196.png"
import AppleTouchIcon from "../resources/apple-touch-icon.png"
import Footer from "./footer"
import Nav from "./nav"
import BaseStyles from "../styles/base-styles"

const Layout = ({ children, canonical }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <BaseStyles />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical ? (
          <link rel="canonical" href={`https://contribute.dev${canonical}`} />
        ) : null}
        <link rel="stylesheet" href="/fonts.css" as="style" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href={AppleTouchIcon}
          sizes="180x180"
        />
        <link rel="icon" type="image/png" href={Favicon196} sizes="196x196" />
        <link rel="icon" type="image/svg+xml" href={Favicon} sizes="any" />
      </Helmet>
      <Nav />
      <main role="main">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
