import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import LayoutNew from "../components/LayoutNew"

const HotelThanks = () => {
  const imageName = "toiawase_img"
  return (
    <>
      <LayoutNew imageName={imageName}>
        <h3 className="form_maintitle">ペットホテルのご予約ありがとうございました</h3>
        <p>
          ペットホテルのご予約誠にありがとうございました。
          <br />
          後ほど、担当者よりご連絡をさせていただきます。
          <br />
          今しばらくお待ちくださいますようよろしくお願い申し上げます。
        </p>
        <p>
          なお、しばらくたっても当社より返信、返答がない場合は、
          <br />
          お客様によりご入力いただいたメールアドレスに誤りがある場合がございます。
          <br />
          その際は、お手数ですが再度送信いただくか、
          <br />
          お電話（ 080-4383-7060 ）にてご連絡いただけますと幸いです。
        </p>

        <p className="center">
          <Link to="/" className="bt01">
            トップページに戻る
          </Link>
        </p>
      </LayoutNew>
    </>
  )
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://usagisan.info/hotel_thanks/#breadcrumblist",
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
          nextItem: "https://usagisan.info/hotel_thanks/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/hotel_thanks/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/hotel_thanks/",
            name: "ペットホテルのご予約ありがとうございました｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
            description: "うさぎペットホテルをお探しなら【ウサギさん】へのペットホテルのご予約ありがとうございました。うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。｜ペットホテル",
            url: "https://usagisan.info/hotel_thanks/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/hotel_thanks/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/hotel_thanks/#webpage",
      url: "https://usagisan.info/hotel_thanks/",
      name: "ペットホテルのご予約ありがとうございました｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description: "うさぎペットホテルをお探しなら【ウサギさん】へのペットホテルのご予約ありがとうございました。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/hotel_thanks/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/hotel_thanks/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/hotel_thanks/#website",
      url: "https://usagisan.info/hotel_thanks/",
      name: "ペットホテルのご予約ありがとうございました｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description: "うさぎペットホテルをお探しなら【ウサギさん】へのペットホテルのご予約ありがとうございました。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/hotel_thanks/#person",
      },
    },
  ],
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo article={true} />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export default HotelThanks
