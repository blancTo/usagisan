import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const hotel = ({ data }) => {
  return (
    <>
      <Layout>
        <div id="mainimage">
          <div id="mainimage-inner">
            <GatsbyImage
              image={data.hotel_head.childImageSharp.gatsbyImageData}
              alt=""
            />
          </div>
        </div>
        <Navbar />

        <div id="main-content" className="flex-wrap">
          <div className="main-cont">
            <h2>
              <img src="/images/hotel_tit.jpg" alt="ペットホテル" />
            </h2>
            <p>
              <img src="/images/hotel_01.jpg" alt="安心・安全・満足" />
            </p>
            <h3>
              <img src="/images/hotel_tit_02.jpg" alt="お泊まりの環境" />
            </h3>
            <p>
              <img src="/images/hotel_02.jpg" alt="" />
            </p>
            <p>
              <img src="/images/hotel_03.jpg" alt="" />
            </p>
            <p>
              <img src="/images/hotel_04.jpg" alt="" />
            </p>
            <p>
              <img src="/images/hotel_05.jpg" alt="" />
            </p>
            <p>
              <img src="/images/hotel_06.jpg" alt="" />
            </p>
            <div>
              <img
                src="/images/hotel_tit_04.jpg"
                width={698}
                height={95}
                alt="完全予約制・小動物専門ホテル"
              />
            </div>
            <div className="hotel_precautions">
              <ul>
                <li>
                  当店は小動物がゆったりのびのび過ごせるペットホテルです。
                  お預かり可能動物はうさぎ・チンチラ・モルモット・デグー・ハリネズミ・ハムスタージリス・シマリスとなっております。
                </li>
                <li>
                  当ホテルでは、滞在中のご家族が食事を摂ることが出来ているのか否か把握する為、排便数を数え食欲の有無と胃のぜん動運動が正常か否かを確認します。排尿を毎日チェックし体調に異変がないか確認します。
                </li>
                <li>
                  小動物は警戒心から物陰を好み、安心して眠れる場所、隠れて休息できる場所を求めます。その為、当ホテルではご宿泊するご家族がゆっくり過ごせるよう、普段使用している用品の持ち込みを可能としています。
                </li>
                <li>
                  またチンチラ・デグー・シマリス・ハリネズミは運動量の多い動物です。運動不足にならないようケージ内に回し車を完備しております。※ハリネズミの回し車のみご用意がございませんのでご持参ください。※うさぎは部屋の中を散歩させていただきます。また、動物が緊張している場合は控えさせていただきます。
                </li>
                <li>
                  小動物は聴覚が優れている為、音に敏感です。大きな音は小動物に過度なストレスを与えます。当ホテルは騒音の少ない閑静な住宅地に店舗を構えており小動物をストレスからお守りします。
                </li>
                <li>
                  ご宿泊中の家族が出来るだけ振動や物音によるストレスを感じないよう完全予約制とし、施設内に立ち入る人を最小限に抑えます。
                </li>
                <li>
                  犬・猫等の肉食動物と接触すると、小動物はとてもストレスを感じます。当ホテルは小動物専門の為、そのような心配はございません。
                </li>
                <li>
                  小動物は暑すぎるのも寒すぎるのも苦手です。当ホテルでは、温度を一定に保つため24時間エアコンを使用し昼夜の温度差を最小限に抑えます。
                </li>
                <li>
                  小動物は湿度が高いとストレスを感じます。また、ダニ・カビが発生しやすくなるため、当ホテルでは梅雨の時期でも除湿機を使用し30%を保ちます。
                </li>
                <li>
                  小動物は嗅覚が優れている為、徹底的に清掃を行い悪臭がない環境でお預かりします。また芳香剤などにも敏感な為、施設内で使用しません。
                </li>
                <li>
                  当ホテルを信用し大切なご家族のお世話を任せていただいているというご厚意に報いるべく報恩謝徳の思いをもって大切なご家族が穏やかに過ごせるようつとめさせていただきます。
                </li>
              </ul>
              <p className="center">
                <Link to="mailto:info@usagisan.info" className="contact_btn">
                  お問い合わせ・ご予約希望の方は
                </Link>
                <br className="smp" />
                info@usagisan.info
              </p>
              <p className="center">
                <Link to="tel:080-4383-7060" className="contact_btn">
                  お電話でのお問い合わせはこちら
                </Link>
                <br className="smp" />
                080-4383-7060
              </p>
            </div>

            <p>
              <img src="/images/hotel_07.jpg" alt="ライン" />
            </p>
          </div>

          <Sidebar />
        </div>
      </Layout>
    </>
  )
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://usagisan.info/hotel/#breadcrumblist",
      itemListElement: [
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/#listItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】",
            description:
              "埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」にお任せ下さい。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
            url: "https://usagisan.info/",
          },
          nextItem: "https://usagisan.info/hotel/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/hotel/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/hotel/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
            description:
              "埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」｜猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。｜ペットホテル",
            url: "https://usagisan.info/hotel/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/hotel/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/hotel/#webpage",
      url: "https://usagisan.info/hotel/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description:
        "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/hotel/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/hotel/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/hotel/#website",
      url: "https://usagisan.info/hotel/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description:
        "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/hotel/#person",
      },
    },
  ],
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title="ペットホテル"
      description="うさぎペットホテル、うさぎカフェ、チンチラ専門店をお探しなら【ウサギさん】へ。午前中からのお預けや、長期利用も可能なペットホテルです。お預かり可能動物はチンチラ・ジリス・モルモット・ハムスター・ハリネズミ・うさぎ"
      article={true}
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export default hotel

export const query = graphql`
  query {
    hotel_head: file(relativePath: { eq: "hotel_header.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
