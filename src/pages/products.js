import React from "react"

import { Link } from "gatsby"

import Seo from "../components/Seo"
import LayoutNew from "../components/LayoutNew"

const products = () => {
  const imageName = "products_header"
  return (
    <>
      <LayoutNew imageName={imageName}>
        <h2>
          <img src="/images/index_tit_sn.jpg" alt="うさぎ・チンチラ販売ベビー" />
        </h2>
        <p>
          <img src="/images/chinchilla_bn01.png" alt="" />
        </p>
        <div className="products_sn">
          <div className="products01_sn">
            <img src="/images/products/img_8077.jpg" width="100%" alt="" />
          </div>
          <div className="products02_sn">
            <span>
              現在お迎え可能な子は今年生まれたオランダ産の男の子です。
              <br />
              当店は直接ご来店いただけたお客様のみお迎えにかかる費用をお伝えしています。
            </span>
          </div>
        </div>
        <div className="products_sn">
          <div className="products01_sn">
            <img src="/images/products/img_8076.jpg" width="100%" alt="" />
          </div>
          <div className="products02_sn">
            <span>
              現在お迎え可能な子は今年生まれたオランダ産の男の子です。
              <br />
              当店は直接ご来店いただけたお客様のみお迎えにかかる費用をお伝えしています。
            </span>
          </div>
        </div>
        <div className="products_sn">
          <div className="products01_sn">
            <img src="/images/products/4f94d1fb-a001-450e-9eed-1a5941c2ab76.jpg" width="100%" height="auto" alt="" />
          </div>
          <div className="products02_sn">
            <span>
              現在お迎え可能な子は今年生まれ、ホワイトの女の子です。
              <br />
              当店は直接ご来店いただけたお客様のみお迎えにかかる費用をお伝えしています。
            </span>
          </div>
        </div>
        <div className="products_sn">
          <div className="products01_sn">
            <img src="/images/products/7b4f6f15-9a5c-4037-a912-7a5fc254310d.jpg" width="100%" height="auto" alt="" />
          </div>
          <div className="products02_sn">
            <span>
              今年産まれホワイトの男の子が新しい家族のお迎えをまっています。
              <br />
              当店は直接ご来店いただけたお客様のみお迎えにかかる費用をお伝えしています。
            </span>
          </div>
        </div>
        <div className="products_sn">
          <div className="products01_sn">
            <img src="/images/products/86480a00-789b-4b0f-8c81-30797b97d6e5.jpg" width="100%" height="auto" alt="" />
          </div>
          <div className="products02_sn">
            <span>
              現在お迎え可能なチンチラは今年産まれのバイオレットの男の子が新しい家族のお迎えをまっています。
              <br />
              当店は直接ご来店いただけたお客様のみお迎えにかかる費用をお伝えしています。
            </span>
          </div>
        </div>
        <div className="products_sn">
          <div className="products01_sn">
            <img src="/images/products/5ae636da-0d19-41f1-aa52-99255497fe4d.jpg" width="100%" height="auto" alt="" />
          </div>
          <div className="products02_sn">
            <span>今年生まれのピュアホワイト、アルビノなどのホワイト系のチンチラのご予約承ります。雌雄の希望がある場合はお問い合わせ時にお伝えください。</span>
          </div>
        </div>
        <div className="products_sn">
          <div className="products01_sn">
            <img src="/images/products/20150523110020.jpg" width="100%" height="auto" alt="" />
          </div>
          <div className="products02_sn">
            <span>
              現在お迎え可能なチンチラは今年産まれのスタンダードグレーの女の子が新しい家族のお迎えをまっています。
              <br />
              当店は直接ご来店いただけたお客様のみお迎えにかかる費用をお伝えしています。
            </span>
          </div>
        </div>
        <div className="products_sn">
          <div className="products01_sn">
            <img src="/images/products/20150523104142.jpg" width="100%" height="auto" alt="" />
          </div>
          <div className="products02_sn">
            <span>今年生まれのピュアホワイト、アルビノなどのホワイト系のチンチラのご予約承ります。雌雄の希望がある場合はお問い合わせ時にお伝えください。</span>
          </div>
        </div>
        <div>
          <Link to="/chi/">
            <img src="/images/chi/chi_b.png" alt="" />
          </Link>
        </div>
      </LayoutNew>
    </>
  )
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://usagisan.info/products/#breadcrumblist",
      itemListElement: [
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/#listItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】",
            description: "うさぎのペットホテル＆うさぎカフェは、JR山手線鶯谷駅から徒歩5分の場所にあります。愛されるうさぎさんたちの安心・安全・快適な宿泊環境を提供しています。併設のうさぎカフェでは、愛らしいうさぎさんたちと触れ合いながら、お茶やスイーツを楽しむことができます。",
            url: "https://usagisan.info/",
          },
          nextItem: "https://usagisan.info/products/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/products/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/products/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜販売ベビー",
            description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。｜販売ベビー",
            url: "https://usagisan.info/products/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/products/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/products/#webpage",
      url: "https://usagisan.info/products/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜販売ベビー",
      description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。｜販売ベビー",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/products/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/products/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/products/#website",
      url: "https://usagisan.info/products/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜販売ベビー",
      description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。｜販売ベビー",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/products/#person",
      },
    },
  ],
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo title="販売ベビー" description2="うさぎペットホテル、うさぎカフェ、チンチラ専門店をお探しなら【ウサギさん】へ。午前中からのお預けや、長期利用も可能なペットホテルです。お預かり可能動物はチンチラ・ジリス・モルモット等の小動物です。最大割引50％OFFの1080円?また毎週月曜日14時から営業しております。" article={true} />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export default products
