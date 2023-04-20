import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Seo from './components/Seo'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";
import { Link } from "gatsby"

const shop = ({ data }) => {
  return (
    <>
    
    <Layout>
    <div id="mainimage">
            <div id="mainimage-inner">
                <GatsbyImage image={data.shop_head.childImageSharp.gatsbyImageData} alt="" />
            </div>
    </div>
    <Navbar />
    
    <div id="main-content" className="flex-wrap">
        <div className="main-cont">
            <h3><img src="/images/shop_tit.jpg" alt="" /></h3>
            
            <div className="flex-wrap">
                <div className="shop_Locations_box_l">
                    <p><img src="/images/shop_img01.jpg" width={271} height={183} alt="" /></p>
                </div>
                <div className="shop_Locations_box_r">
          <div className="shop_box">〒110-0003 東京都台東区根岸3-5-4根岸ビル1階<br />
              鶯谷駅から徒歩５分<br />
              入谷駅から徒歩７分</div>
            <div className="shop_box">店舗近くにコインパーキングあり<br />
              <Link to="http://coinpa.jp/" target="_blank">http://coinpa.jp/</Link><br />
              上記の情報サイトからお探しください。</div>
            <div className="shop_box">電話番号 080-4383-7060/03-6240-6374<br />
            メールアドレス info@usagisan.info<br />
            <span className='red'>大変ご不便をおかけしますが、基本固定電話対応は行なっておりません。すべてのお問い合わせは、上記メールアドレス、携帯電話、またはお問い合わせページからお願いいたします</span><br />
            ご協力のほどよろしくお願い申し上げます。</div>
            </div>
            </div>

            <div className="shop_box">

            <p><span className="marker-blue">営業時間</span></p>
            
            <p>ペットショップ・ペットホテル年中無休<br />午前8時～午後20時<br />
                    アルマジロ・チンチラ・うさぎカフェ<br />毎週土曜日13時～20時<br />
                    毎週日曜日13時～20時<br />                  
                    （完全予約制）当店は時間制です。また店舗の都合上ご予約時間の3分前から入場可能です。</p>
            </div>
            
            <div className="shop_box">
            <p><span className="marker-blue">ペットホテル受付時間</span></p>

            <p>午前8時から午後20時までの間であれば、お客様都合で受付・引取りも可能です。</p>
            </div>

            


          <table className="legal_notice">
            <tr>
              <th>動物取扱業登録</th>
              <td>【販売】【保管】【展示】【貸出】22東京都第004207号<br />
              登録年月日 H31年1月28日 / 有効期限 H36年1月27日<br />
              動物取扱責任者 佐藤重</td>
            </tr>
          </table>
	
	

        <div><img src="/images/index_tit03.jpg" width="100%" alt="新着情報" /></div>
		  <div class="top_info">
			  <div className="top_info_border">
				  <p className="orange bold center">休業のお知らせ</p>
				  <p>＜休業のお知らせ＞平素よりご愛顧賜り、誠に有難うございます。新型コロナウイルス感染症に罹患された方及び関係者の皆様に謹んでお見舞い申し上げます。また医療従事者はじめ感染拡大防止にご尽力されている皆様に深謝申し上げます。東京都が発令する緊急事態措置として休業を要請する施設に含まれていたため２０２１年０４月２５日から２０２１年０５月１１日まで休業いたします。どうかご理解を賜りますよう宜しくお願い申し上げます。</p>
			  </div>
			  <p className="orange bold center">休業のお知らせ</p>
			  <p>＜休業期間延長のお知らせ(5月12日以降)＞平素よりご愛顧賜り、誠に有難うございます。新型コロナウイルス感染症に罹患された方及び関係者の皆様に謹んでお見舞い申し上げます。また医療従事者はじめ感染拡大防止にご尽力されている皆様に深謝申し上げます。東京都が発令する緊急事態措置として休業を要請する施設に含まれていたため２０２１年０５月１２日から２０２１年０５月３１日まで休業いたします。どうかご理解を賜りますよう宜しくお願い申し上げます。</p>
		  </div>





        </div>

        <Sidebar />

    </div>
    </Layout>
    </>
  )
}

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://usagisan.info/shop/#breadcrumblist",
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
          "nextItem":"https://usagisan.info/shop/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://usagisan.info/shop/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://usagisan.info/shop/",
            "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜SHOP INFORMATION",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」｜猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。｜SHOP INFORMATION",
            "url":"https://usagisan.info/shop/"
          },
          "previousItem":"https://usagisan.info/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://usagisan.info/shop/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://usagisan.info/shop/#webpage",
      "url":"https://usagisan.info/shop/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜SHOP INFORMATION",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://usagisan.info/shop/#website"
      },
      "breadcrumb":{
        "@id":"https://usagisan.info/shop/#breadcrumblist"
      },
      "datePublished":"2022-09-21T22:55:53+09:00",
      "dateModified":"2023-01-17T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://usagisan.info/shop/#website",
      "url":"https://usagisan.info/shop/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜SHOP INFORMATION",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://usagisan.info/shop/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
  <body id="pagetop" />
  <Seo
    title="SHOP INFORMATION"
    description="うさぎペットホテル、うさぎカフェ、チンチラ専門店をお探しならをお探しなら【ウサギさん】へお越しください。こちらは当店の紹介ページになります。営業時間、受付時間等のご確認をこちらのページをご確認下さいませ。"
    article={true} />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export default shop

export const query = graphql`
query {
    shop_head: file(relativePath: {eq: "shop_img.png"}) {
        childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
        }
    }
}
`