/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "うさぎペットホテル・うさぎカフェ【うさぎさん】",
    keyword: "うさぎペットホテル,うさぎ,ウサギさん,専門店,ショップ,東京,鶯谷,うさカフェ,usagi,チンチラ,チンチラカフェ,新宿,渋谷,中野,台東,千代田,北,荒川,墨田,港,神奈川",
    description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
    image: "images/usagisan_ogp.jpg",
    url: "https://usagisan.info",
    siteUrl: "https://usagisan.info",
    twitterUsername: "7463Ican",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,

    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://usagisan.info`,
        sitemap: `https://usagisan.info/sitemap-0.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://usagisan.info`,
      },
    },
  ],
}
