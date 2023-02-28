import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import PropTypes from "prop-types"

const SEO = ({ title, description, image, article,children }) => {
    const { site } = useStaticQuery(query)
    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername,
    } = site.siteMetadata
    const { pathname } = useLocation()
  
    const seo = {
        title: title ? `${defaultTitle}｜${title}` : defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    }    

    return (
      <>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content="うさぎペットホテル,うさぎ,ウサギさん,専門店,ショップ,東京,鶯谷,うさカフェ,usagi,チンチラ,チンチラカフェ,新宿,渋谷,中野,台東,千代田,北,荒川,墨田,港,神奈川"></meta>
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(article ? true : null) && <meta property="og:type" content="article" />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
        <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
        <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
        {children}
      </>
    )
  }
  
export default SEO

export const query = graphql`
query {
  site {
    siteMetadata {
      defaultTitle: title
      defaultDescription: description
      siteUrl: url
      defaultImage: image
      twitterUsername
    }
  }
}
`
SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}