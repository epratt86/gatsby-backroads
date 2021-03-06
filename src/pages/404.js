import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import styles from "../css/error.module.css"
import SEO from "../components/SEO"

const error = () => {
  return (
    <Layout>
      <SEO title="Page Not Found" />
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
