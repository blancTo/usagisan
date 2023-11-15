import React from "react"

import Seo from "../components/Seo"
import LayoutNew from "../components/LayoutNew"

const voice = () => {
  const imageName = "h_banner"
  return (
    <>
      <LayoutNew imageName={imageName}>
        <h3>
          <img src="/images/index_tit_voice.jpg" alt="お客様の声" />
        </h3>
        <p>
          アンケートにご協力いただいた皆様ありがとうございました。
          <br />
          これからも皆様方に安心して家族を任せることができるサービスをめざして、
          <br />
          運営していきたいと考えております。
        </p>

        <h3 className="sub_title">ペットホテルご利用のお客様の声</h3>
        <div className="hotel_precautions">
          <ul>
            <li>
              何より、うさぎにおくわしい方に大切にしていただき、感謝の一言です。
              <br />
              動画を毎日配信して下さるのは、とてもありがたかったです。
              <br />
              有難うございました。
            </li>
            <li>
              お世話になりました。
              <br />
              店員の方の動物に対する愛情を初対面の時から感じ、安心してハムスターをお任せすることができました。
              <br />
              毎日、LINEで画像を送っていただき本当にありがたかったです。
              <br />
              又、旅行の時、よろしくお願いします。
            </li>
            <li>
              今回初めて利用させて頂きました。
              <br />
              ペットホテルにチンチラを長時間あずけるのは正直心配でしたが、
              <br />
              無料で毎日動画を送ってくださるので旅行中も安心できました。
            </li>
            <li>
              私はモルモットも飼っているのですが、小動物専門なので、そこも安心できるポイントでした。
              <br />
              今回は本当にありがとうございました。
            </li>
            <li>
              今回は初めてうさぎを外泊させることで、不安(こちら側)もありましたが、
              <br />
              メールでの画像も送って下さり、安心しました。
              <br />
              また機会がありましたら、是非お願い致します。
            </li>
            <li>
              毎日動画を送って頂き、安心してデグーをお預けすることができました。
              <br />
              どうもありがとうございました。
            </li>
            <li>
              ハリネズミの飼育・生態に詳しく給餌、飼育環境について丁寧に教えてくれました。
              <br />
              本当に動物への愛情が強い方なので安心して預けることが出来ました。
            </li>
            <li>
              この度はうちのモルちゃんを預かっていただきありがとうございました!!毎日動画も送っていただき、安心して旅行が出来ました♪
              <br />
              おみやげもたくさんありがとうございました!!色々な知識もつけていただき、ますます勉強して長生きしてもらおうと思ってます!!
              <br />
              また何かあった時にはぜひお願いします!!本当にありがとうございました♪{" "}
            </li>
          </ul>
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
      "@id": "https://usagisan.info/voice/#breadcrumblist",
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
          nextItem: "https://usagisan.info/voice/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/voice/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/voice/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜お客様の声",
            description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。｜お客様の声",
            url: "https://usagisan.info/voice/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/voice/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/voice/#webpage",
      url: "https://usagisan.info/voice/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜お客様の声",
      description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/voice/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/voice/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/voice/#website",
      url: "https://usagisan.info/voice/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜お客様の声",
      description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/voice/#person",
      },
    },
  ],
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo title="お客様の声" description2="うさぎペットホテル・うさぎカフェ、チンチラ専門店をお探しなら【うさぎさん】へ。こちらのページでは、当店が運営しているうさぎカフェをご紹介しております。かわいいうさぎさんのイメージ写真も掲載しておりますのでぜひご覧ください。" article={true} />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export default voice
