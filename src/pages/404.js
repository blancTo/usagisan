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

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://usagisan.info/404/#breadcrumblist",
      "itemListElement":[
        {
          "@type":"ListItem",
          "@id":"https://usagisan.info/#listItem",
          "position":1,
          "item":{
            "@type":"WebPage",
            "@id":"https://usagisan.info/",
            "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】",
            "description":"埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」にお任せ下さい。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
            "url":"https://usagisan.info/"
          },
          "nextItem":"https://usagisan.info/404/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://usagisan.info/404/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://usagisan.info/404/",
            "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜ページが見つかりません",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」｜猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。｜ページが見つかりません",
            "url":"https://usagisan.info/404/"
          },
          "previousItem":"https://usagisan.info/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://usagisan.info/404/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://usagisan.info/404/#webpage",
      "url":"https://usagisan.info/404/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜ページが見つかりません",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://usagisan.info/404/#website"
      },
      "breadcrumb":{
        "@id":"https://usagisan.info/404/#breadcrumblist"
      },
      "datePublished":"2022-09-21T22:55:53+09:00",
      "dateModified":"2023-01-17T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://usagisan.info/404/#website",
      "url":"https://usagisan.info/404/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜ページが見つかりません",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://usagisan.info/404/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export const query = graphql`
query {
    h_bn: file(relativePath: {eq: "h_banner.png"}) {
        childImageSharp {
          gatsbyImageData(width: 970, layout: CONSTRAINED)
        }
    }
}
`