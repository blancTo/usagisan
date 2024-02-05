import React from "react"
import { Link } from "gatsby"

import Seo from "../components/Seo"
import LayoutNew from "../components/LayoutNew"

const shop = () => {
  const imageName = "shop_img"
  return (
    <>
      <LayoutNew imageName={imageName}>
        <h3>
          <img src="/images/shop_tit.jpg" alt="" />
        </h3>

        <div className="flex-wrap">
          <div className="shop_Locations_box_l">
            <p>
              <img src="/images/shop_img01.jpg" width={271} height={183} alt="" />
            </p>
          </div>
          <div className="shop_Locations_box_r">
            <div className="shop_box">
              〒110-0003 東京都台東区根岸3-5-4根岸ビル1階
              <br />
              鶯谷駅から徒歩５分
              <br />
              入谷駅から徒歩７分
            </div>
            <div className="shop_box">
              店舗近くにコインパーキングあり
              <br />
              <Link to="http://coinpa.jp/" target="_blank">
                http://coinpa.jp/
              </Link>
              <br />
              上記の情報サイトからお探しください。
            </div>
            <div className="shop_box">
              電話番号 080-4383-7060
              <br />
              メールアドレス info@usagisan.info
              <br />
              <span className="red">大変ご不便をおかけしますが、基本固定電話対応は行なっておりません。すべてのお問い合わせは、上記メールアドレス、携帯電話、またはお問い合わせページからお願いいたします</span>
              <br />
              ご協力のほどよろしくお願い申し上げます。
            </div>
          </div>
        </div>

        <div className="shop_box">
          <p>
            <span className="marker-blue">営業時間</span>
          </p>

          <p>
            ペットショップ・ペットホテル年中無休
            <br />
            午前8時～午後20時
            <br />
            アルマジロ・チンチラ・うさぎカフェ
            <br />
            毎週土曜日13時～20時
            <br />
            毎週日曜日13時～20時
            <br />
            （完全予約制）当店は時間制です。また店舗の都合上ご予約時間の3分前から入場可能です。
          </p>
        </div>

        <div className="shop_box">
          <p>
            <span className="marker-blue">ペットホテル受付時間</span>
          </p>

          <p>午前8時から午後20時までの間であれば、お客様都合で受付・引取りも可能です。</p>
        </div>

        <table className="legal_notice">
          <tr>
            <th>動物取扱業登録</th>
            <td>
              【販売】【保管】【展示】【貸出】18東京都第004207号
              <br />
              登録年月日 H31年1月28日 / 有効期限 H36年1月27日
              <br />
              動物取扱責任者 佐藤重
            </td>
          </tr>
        </table>

        <div>
          <img src="/images/index_tit03.jpg" width="100%" alt="新着情報" />
        </div>

        <ul>
          <li>
            Webメディア
            <a href="https://dogcatch.net/wanwannavi/" target="_blank" rel="noopener noreferrer">
              「犬の問題を解決するメディア|わんわんナビ」
            </a>
            にて、
            <br />
            うさぎさんが紹介されました！詳細は以下よりご覧ください。
            <br />
            <a href="https://dogcatch.net/wanwannavi/tokyotonai-dobutsukafue-osusume/" target="_blank" rel="noopener noreferrer">
              東京都内にある動物カフェおすすめ8選！かわいい犬・猫に癒される
            </a>
          </li>
        </ul>
      </LayoutNew>
    </>
  )
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://usagisan.info/shop/#breadcrumblist",
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
          nextItem: "https://usagisan.info/shop/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/shop/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/shop/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜SHOP INFORMATION",
            description: "うさぎペットホテルをお探しなら【ウサギさん】の店舗情報です。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。｜SHOP INFORMATION",
            url: "https://usagisan.info/shop/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/shop/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/shop/#webpage",
      url: "https://usagisan.info/shop/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜SHOP INFORMATION",
      description: "うさぎペットホテルをお探しなら【ウサギさん】の店舗情報です。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/shop/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/shop/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/shop/#website",
      url: "https://usagisan.info/shop/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜SHOP INFORMATION",
      description: "うさぎペットホテルをお探しなら【ウサギさん】の店舗情報です。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/shop/#person",
      },
    },
  ],
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo title="SHOP INFORMATION" description2="うさぎペットホテル、うさぎカフェ、チンチラ専門店をお探しならをお探しなら【ウサギさん】へお越しください。こちらは当店の紹介ページになります。営業時間、受付時間等のご確認をこちらのページをご確認下さいませ。" article={true} />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export default shop
