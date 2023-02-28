import React from 'react'

import { GatsbyImage } from "gatsby-plugin-image"
import { graphql,Link } from "gatsby"

import Seo from "./components/Seo";
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";

const chi = ({ data }) => {
  return (
    <>
      

      <Layout>

        <div id="mainimage">
          <div id="mainimage-inner">
              <GatsbyImage image={data.h_bn.childImageSharp.gatsbyImageData} alt="" />
          </div>
        </div>

        <Navbar />
      
        <div id="main-content" className="flex-wrap">
          <div className="main-cont">

            <h3><img src="/images/chi/chi_top.png" alt="" /></h3>
            <p className='center'>チンチラ ｜ げっ歯目</p>
            <p className='center'><img src="/images/chi/pink.png" alt="" width={647} /></p>

            <div className="flex-wrap">
              <div className="w40p">
                <img alt="" src="/images/chi/c1.png" height={90} /><br />
                <img alt="" src="/images/chi/c2.png" height={90} />
              </div>

              <div className="w60p">
                <table className='chi_table'>
                <tbody>
                <tr>
                <th width={105} height={26} align="center" valign="middle" className="td_bg border_b_s  azuki green">体長</th>
                <th width={115} height={26} align="center" valign="middle" className="td_bg border_b_s border_l azuki green">体重</th>
                <th width={105} height={26} align="center" valign="middle" className="td_bg border_b_s border_l azuki green">NG環境</th>
                <th width={110} height={26} align="center" valign="middle" className="td_bg border_b_s border_l border_r azuki green">寿命</th>
                </tr>
                <tr>
                <td width={105} height={50} align="center" valign="middle" className="border_b  border_r prpl">23㎝～35㎝</td>
                <td width={115} height={50} align="center" valign="middle" className="border_b border_l border_r prpl"><span className="male">400g～550g</span></td>
                <td width={105} height={50} align="center" valign="middle" className="border_b border_l border_r prpl">高湿度・暑さ</td>
                <td width={110} height={50} align="center" valign="middle" className="border_b border_l border_r">15年～20年</td>
                </tr>
                <tr>
                <th colSpan={2} height={26} align="center" valign="middle" className="td_bg border_b_s  azuki green">毎日行ってほしいこと</th>
                <th colSpan={2} height={26} align="center" valign="middle" className="td_bg border_b_s border_l azuki green">推奨環境</th>
                </tr>
                <tr>
                <td colSpan={2} height={50} align="center" valign="middle" className="border_b  border_r prpl">毎日10分～30分、砂浴びをさせてください。</td>
                <td colSpan={2} height={50} align="center" valign="middle" className="border_b border_l border_r prpl"><span className="male">湿度20～40% 温度15～21度</span></td>
                </tr>
                <tr>
                <th colSpan={4} width={450} height={26} align="center" className="td_bg border_b_s  border_r azuki green">生息地</th>
                </tr>
                <tr>
                <td colSpan={4} width={450} height={50} className="border_b border_r">アンデス山脈の山岳地帯、岩場</td>
                </tr>
                <tr>
                <th colSpan={4} width={450} height={26} align="center" className="td_bg border_b_s  border_r azuki green">食餌</th>
                </tr>
                <tr>
                <td colSpan={4} width={450} height={50} className="border_b border_r">牧草(チモシー9割、アルファルファ1割)ペレット(体重の1%)<br />
                週に一度"生"のクランベリー、ブルーベリーを2粒</td>
                </tr>
                <tr>
                <th colSpan={4} width={450} height={26} align="center" className="td_bg border_b_s  border_r azuki green">食餌での注意点</th>
                </tr>
                <tr>
                <td colSpan={4} width={450} height={50} className=" border_r">ドライフルーツ、ショ糖、コーンスターチを含む乳酸菌、サプリを与えると消化器系を悪くするだけではなく、間接的に不正咬合、白内障、う食(虫歯)などを引き起こす可能性があるので与えないで下さい。※チンチラは胆嚢(たんのう)をもたないので多量の脂肪を消化することが出来ません。オートミール(えん麦、もみ殻)、ナッツ類は与えないで下さい</td>
                </tr>
                </tbody>
                </table>
              </div>

            </div>
            
            <p className='chi_bg'>
              牧草は食べ残していても、毎日全部取り替えて下さい。<br />
              常に新鮮な水が飲めるよう給水ボトルを設置して下さい。
            </p>

            <p className="title03">チンチラ</p>

            <div className="flex-wrap">
              <div className="w40p">
                <img alt="" src="/images/chi/767152fa-0c27-4485-acf1-eacc56731c70.jpg" width={200} /><br /><br />
              </div>
              <div className="w60p">
                <table className='chi_table'>
                <tbody><tr>
                    <th width={300} height={26} align="center" className="td_bg border_b_s   azuki green">毛色</th>
                  </tr>
                  <tr>
                    <td width={300} height={50} className="border_b " style={{padding: '5px'}}>ピュアホワイト</td>
                  </tr>
                  <tr>
                    <th width={300} height={26} align="center" className="td_bg border_b_s   azuki green">性別</th>
                  </tr>
                  <tr>
                    <td width={300} height={50} className="border_b " style={{padding: '5px'}}>女の子</td>
                  </tr>
                  <tr>
                    <th width={300} height={26} align="center" className="td_bg border_b_s   azuki green">コメント</th>
                  </tr>
                  <tr>
                    <td width={300} height={50} style={{padding: '5px'}}>珍しいカラーのチンチラさんです</td>
                  </tr>
                </tbody>
                </table>
              </div>
            </div>

            <p className='center'><Link to="/contact_c/"><img src="/images/chi/chi_bg02.png" alt="お問い合わせ・ご予約希望の方は" /></Link></p>
            
            <p className="title03">チンチラ</p>
            
            <div className="flex-wrap">
              <div className="w40p">
                <img alt="" src="/images/chi/bf98b010-6cc8-4890-b3a0-14cc2e254346.jpg" width={200} />
              </div>
              <div className="w60p">
                <table className='chi_table'>
                <tbody><tr>
                    <th width={300} height={26} align="center" className="td_bg border_b_s   azuki green">毛色</th>
                  </tr>
                  <tr>
                    <td width={300} height={50} className="border_b " style={{padding: '5px'}}>パイド</td>
                  </tr>
                  <tr>
                    <th width={300} height={26} align="center" className="td_bg border_b_s   azuki green">性別</th>
                  </tr>
                  <tr>
                    <td width={300} height={50} className="border_b " style={{padding: '5px'}}>男の子</td>
                  </tr>
                  <tr>
                    <th width={300} height={26} align="center" className="td_bg border_b_s   azuki green">コメント</th>
                  </tr>
                  <tr>
                    <td width={300} height={50} style={{padding: '5px'}}>とっても可愛いチンチラさんです。</td>
                  </tr>
                </tbody>
                </table>
              </div>
            </div>

            <p className='center'><Link to="/contact_c/"><img src="/images/chi/chi_bg02.png" alt="お問い合わせ・ご予約希望の方は" /></Link></p>

            <p className="title03">チンチラ</p>
            
            <div className="flex-wrap">
              <div className="w40p"><img alt="" src="/images/chi/f8fe8ae4-6e44-43b2-94af-aefde81e883d.jpg" width={200} /></div>
              <div className="w60p">
                <table className='chi_table'>
                <tbody><tr>
                    <th width={300} height={26} align="center" className="td_bg border_b_s   azuki green">毛色</th>
                  </tr>
                  <tr>
                    <td width={300} height={50} className="border_b " style={{padding: '5px'}}>スタンダードグレー</td>
                  </tr>
                  <tr>
                    <th width={300} height={26} align="center" className="td_bg border_b_s   azuki green">性別</th>
                  </tr>
                  <tr>
                    <td width={300} height={50} className="border_b " style={{padding: '5px'}}>女の子</td>
                  </tr>
                  <tr>
                    <th width={300} height={26} align="center" className="td_bg border_b_s   azuki green">コメント</th>
                  </tr>
                  <tr>
                    <td width={300} height={50} style={{padding: '5px'}}>可愛いチンチラさんです。</td>
                  </tr>
                </tbody>
                </table>
              </div>
            </div>

            <p className='center'><Link to="/contact_c/"><img src="/images/chi/chi_bg02.png" alt="お問い合わせ・ご予約希望の方は" /></Link></p>
              
            <p className="title03">チンチラ</p>
          
            <div className="flex-wrap">
              <div className="w40p">
                  <img alt="" src="/images/chi/a3f82054-88c0-4e1a-8323-71ac2f5b3f33.jpg" width={200} />
              </div>

              <div className="w60p">
                <table className='chi_table'>
                <tbody><tr>
                    <th width={300} height={26} align="center" className="td_bg border_b_s   azuki green">毛色</th>
                  </tr>
                  <tr>
                    <td width={300} height={50} className="border_b " style={{padding: '5px'}}>ブラックベルベット</td>
                  </tr>
                  <tr>
                    <th width={300} height={26} align="center" className="td_bg border_b_s   azuki green">性別</th>
                  </tr>
                  <tr>
                    <td width={300} height={50} className="border_b " style={{padding: '5px'}}>男の子</td>
                  </tr>
                  <tr>
                    <th width={300} height={26} align="center" className="td_bg border_b_s   azuki green">コメント</th>
                  </tr>
                  <tr>
                    <td width={300} height={50} style={{padding: '5px'}}>ポテっとした頬がとっても可愛い甘えん坊の男の子です。写真の子とは別に兄弟の女の子もいます。</td>
                  </tr>
                </tbody>
                </table>

              </div>
            </div>

            <p className='center'><Link to="/contact_c/"><img src="/images/chi/chi_bg02.png" alt="お問い合わせ・ご予約希望の方は" /></Link></p>

            <p className='center'><img src="/images/chi/chi_bo.png" alt="" /></p>

            <p className='center'><Link to="/chi2/"><img src="/images/chi/usa_b.png" alt="" /></Link></p>

          </div>

          <Sidebar />

        </div>
      </Layout>
    </>
  )
}

export default chi

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://usagisan.info/chi/#breadcrumblist",
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
          "nextItem":"https://usagisan.info/chi/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://usagisan.info/chi/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://usagisan.info/chi/",
            "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜チンチラ｜げっ歯目｜うさぎ・チンチラ専門店",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」｜猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。｜チンチラ｜げっ歯目｜うさぎ・チンチラ専門店",
            "url":"https://usagisan.info/chi/"
          },
          "previousItem":"https://usagisan.info/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://usagisan.info/chi/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://usagisan.info/chi/#webpage",
      "url":"https://usagisan.info/chi/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜チンチラ｜げっ歯目｜うさぎ・チンチラ専門店",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://usagisan.info/chi/#website"
      },
      "breadcrumb":{
        "@id":"https://usagisan.info/chi/#breadcrumblist"
      },
      "datePublished":"2022-09-21T22:55:53+09:00",
      "dateModified":"2023-01-17T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://usagisan.info/chi/#website",
      "url":"https://usagisan.info/chi/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜チンチラ｜げっ歯目｜うさぎ・チンチラ専門店",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://usagisan.info/chi/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
  <body id="pagetop" />
  <Seo
      title="チンチラ｜げっ歯目｜うさぎ・チンチラ専門店"
      description="チンチラ専門店（うさぎ専門店）うさぎさん（ペットホテル＆うさカフェ（チンチラカフェ））は、JR山手線鶯谷駅から５分の場所にある、午前中からお預け可能で長期利用も可能な格安ペットホテル・チンチラカフェ・うさカフェをはじめ、純血種のうさぎ・チンチラを販売もしております。"
      article={true} />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export const query = graphql`
query {
    h_bn: file(relativePath: {eq: "h_banner.png"}) {
        childImageSharp {
          gatsbyImageData(width: 970, layout: CONSTRAINED)
        }
    }
}
`