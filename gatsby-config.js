/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "うさぎのペットホテル＆うさぎカフェ | 安心・安全・快適な宿泊環境を提供【JR山手線鶯谷駅徒歩5分】",
    description:
      "JR山手線鶯谷駅からわずか５分！うさぎさんの安心・安全・快適な宿泊環境を提供する、うさぎのペットホテルです。初めての方も安心してご利用いただけます。併設のうさぎカフェで、愛らしいうさぎさんたちと触れ合いながら癒やされてみませんか？",
    image: "images/usagisan_ogp.jpg",
    url: "https://usagisan.info/",
    twitterUsername: "7463Ican",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    
  ],
}
