import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import LayoutNew from "../components/LayoutNew"

const NotFound = () => {
  const imageName = "h_banner"
  return (
    <>
      <LayoutNew imageName={imageName}>
        <h2 className="title404">404 お探しの記事は見つかりませんでした。</h2>
        <p className="center">
          うさぎペットホテル・うさぎカフェ【うさぎさん】のWEBサイトを
          <br />
          ご覧頂きありがとうございます。
          <br />
          大変申し訳ないのですが、あなたがアクセスしようとしたページは
          <br />
          削除されたかURLが変更されています。
          <br />
          お手数をおかけしますが、以下の方法からもう一度目的のページをお探し下さい。
        </p>
        <p className="center">
          <Link to="/" className="bt01">
            トップページへ戻る
          </Link>
        </p>
      </LayoutNew>
    </>
  )
}

export default NotFound

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://usagisan.info/404/#breadcrumblist",
      itemListElement: [
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/#listItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】",
            description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
            url: "https://usagisan.info/",
          },
          nextItem: "https://usagisan.info/404/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/404/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/404/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜ページが見つかりません",
            description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。｜ページが見つかりません",
            url: "https://usagisan.info/404/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/404/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/404/#webpage",
      url: "https://usagisan.info/404/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜ページが見つかりません",
      description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/404/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/404/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/404/#website",
      url: "https://usagisan.info/404/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜ページが見つかりません",
      description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/404/#person",
      },
    },
  ],
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo title="ページが見つかりません" description2="お探しのページは、移動または削除された可能性があります。" article="true" />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)
