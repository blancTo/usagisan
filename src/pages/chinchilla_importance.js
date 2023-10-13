import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const chinchilla_importance = ({ data }) => {
  return (
    <>
      <Layout>
        <div id="mainimage">
          <div id="mainimage-inner">
            <GatsbyImage
              image={data.h_bn.childImageSharp.gatsbyImageData}
              alt=""
            />
          </div>
        </div>
        <Navbar />

        <div id="main-content" className="flex-wrap">
          <div className="main-cont">
            <h3>
              <img
                src="/images/chinchilla_tit.png"
                width={698}
                alt="チンチラのご宿泊について重要視していること"
              />
            </h3>
            <p className="blue bold">
              当店ではご宿泊していただく子達が安心して生活出来るようパーソナルスペースの環境作りを重要視しています。
              <br />
              当店ではチンチラが安心して生活できるよう以下のことを徹底しています。
            </p>
            <div>
              <img src="/images/chi/pink.png" alt="" width="100%" />
            </div>
            <div className="list_box_ol">
              <ol>
                <li>最も重要な栄養源である繊維質（チモシー）の大量給餌</li>
                <li>
                  砂浴び（毎日交換・頻繁に排尿する子には一日最大３回交換）
                </li>
                <li>適度な運動器具を完備</li>
                <li>安心して休める部屋</li>
                <li>清潔な環境（毎日全ての器具を除菌します）</li>
              </ol>
            </div>
            <p>以上のことを徹底して行います。</p>
            <p>
              次にどのような牧草・砂・ペレットを使用しているのかについて説明します。
            </p>
            <p className="title02">牧草は４種類常備しています。</p>
            <div className="list_box_ol">
              <ol>
                <li>US産一番刈りプレミアムチモシー（シングルプレス）</li>
                <li>US産一番刈りプレミアムチモシー（ダブルプレス）</li>
                <li>US産二番刈りプレミアムチモシー（シングルプレス）</li>
                <li>アルファルファ</li>
              </ol>
            </div>
            <p className="title02">その他</p>
            <div className="box_cream">
              パパイヤリーフ・オオバコ・タンポポ・クコの葉・すいか・齧り木（時期によって種類は異なります）
            </div>
            <p>消化器、嗜好性に影響を与えない副食を用意しています。</p>
            <p>
              当店では低カロリーで高繊維質なチモシーをたっぷり食べて頂きたいと考えています。チモシーはお腹の健康維持だけではなく歯の研磨を助け不正咬合を抑制する効果が期待できます。
            </p>
            <p className="title03">チンチラの砂について・・・</p>
            <p>
              当店ではチンチラ専用の砂を使用しています。当店では超微粒子、高温殺菌した珪砂を使用しチンチラの皮脂を確り落としてくれるものです。指定の砂がある場合は持参していただきたいです。
            </p>
            <p className="title03">ペレットについて・・・</p>
            <p>
              当店で使用しているペレットは「チンチラセレクションプロ」を使用しています。
              <br />
              チンチラセレクションプロは牧草（チモシー）を主原料にしているペレットです。粗繊維も23％と多く、乳酸菌EC12株、おおばこ、たんぽぽ、ハーブ、ベータグルカン、消化酵素を配合しているものです。
              <br />
              粗繊維が豊富なため「毛球」や「食滞」予防にもなります。
              <br />
              また小麦を使わないことで消化器系の負担が少ないものを使用しています。唯一のデメリットとしてあげれるのは「嗜好性が高くない」ことです。これは最大のメリットでもありますが、嗜好性の高いペレットを常時給餌している場合は食べない可能性があるので主原料が「アルファルファ」の場合は持参して頂くようお願いしています。
            </p>
            <p>
              当然すべてご宿泊費に含まれています。その他無料サービスも多くあります。
            </p>
            <p>
              お客様のご家族が使用している器具を使用することも可能です。その際はあらかじめ教えていただけると助かります。
            </p>
          </div>

          <Sidebar />
        </div>
      </Layout>
    </>
  )
}

export default chinchilla_importance

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://usagisan.info/chinchilla_importance/#breadcrumblist",
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
          nextItem: "https://usagisan.info/chinchilla_importance/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/chinchilla_importance/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/chinchilla_importance/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜チンチラのご宿泊について重要視していること",
            description:
              "埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」｜猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。｜チンチラのご宿泊について重要視していること",
            url: "https://usagisan.info/chinchilla_importance/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/chinchilla_importance/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/chinchilla_importance/#webpage",
      url: "https://usagisan.info/chinchilla_importance/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜チンチラのご宿泊について重要視していること",
      description:
        "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/chinchilla_importance/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/chinchilla_importance/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/chinchilla_importance/#website",
      url: "https://usagisan.info/chinchilla_importance/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜チンチラのご宿泊について重要視していること",
      description:
        "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/chinchilla_importance/#person",
      },
    },
  ],
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title="チンチラのご宿泊について重要視していること"
      description="チンチラ専門店（うさぎ専門店）うさぎさん（ペットホテル＆うさカフェ（チンチラカフェ））は、JR山手線鶯谷駅から５分の場所にある、午前中からお預け可能で長期利用も可能な格安ペットホテル・チンチラカフェ・うさカフェをはじめ、純血種のうさぎ・チンチラを販売もしております。"
      article={true}
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export const query = graphql`
  query {
    h_bn: file(relativePath: { eq: "h_banner.png" }) {
      childImageSharp {
        gatsbyImageData(width: 970, layout: CONSTRAINED)
      }
    }
  }
`
