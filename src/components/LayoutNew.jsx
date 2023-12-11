import React from "react"

import Header from "./Header"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

import "../styles/main.scss"
import Footer from "./Footer"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const LayoutNew = ({ children, imageName }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          name
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)
  const imageNode = data.allFile.nodes.find(node => node.name === imageName)

  if (!imageNode) {
    console.error(`Image ${imageName} not found`)
    return null
  }

  const image = getImage(imageNode)
  return (
    <>
      <Header />

      <div id="content">
        <div id="mainimage">
          <div id="mainimage-inner">
            <GatsbyImage image={image} alt="Example" />
          </div>
        </div>
        <Navbar />
        <div id="main-content" className="flex-wrap">
          <div className="main-cont">{children}</div>
          <Sidebar />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default LayoutNew
