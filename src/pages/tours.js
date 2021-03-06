import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import AllTours from "../components/Tours/AllTours"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Tours" />
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
        <AllTours />
      </Layout>
    )
  }
}

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
