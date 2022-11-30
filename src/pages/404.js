import React from 'react'

import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Seo from './components/Seo'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";

const NotFound = ({ data }) => {
  return (
      <>
      <Seo title="ページが見つかりません" description="お探しのページは、移動または削除された可能性があります。" article="true" />
      <Layout>
        <div id="mainimage">
                <div id="mainimage-inner">
                    <GatsbyImage image={data.h_bn.childImageSharp.gatsbyImageData} alt="" />
                </div>
        </div>
        <Navbar />
        
        <div id="main-content" className="flex-wrap">
          
          <div className="main-cont">
            <h2>404</h2>
            <p>Sorry, thats page doesn't exist</p>
          </div>

          <Sidebar />

        </div>
      </Layout>
    </>
  )
}

export default NotFound

export const query = graphql`
query {
    h_bn: file(relativePath: {eq: "h_banner.png"}) {
        childImageSharp {
          gatsbyImageData(width: 970, layout: CONSTRAINED)
        }
    }
}
`