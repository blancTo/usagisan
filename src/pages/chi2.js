import React from 'react'

import { GatsbyImage } from "gatsby-plugin-image"
import { graphql,Link } from "gatsby"

import Seo from './components/Seo'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";

const chi2 = ({ data }) => {
  return (
    <>
      <Seo
      title="うさぎ｜げっ歯目｜うさぎ・チンチラ専門店"
      description="チンチラ専門店（うさぎ専門店）うさぎさん（ペットホテル＆うさカフェ（チンチラカフェ））は、JR山手線鶯谷駅から５分の場所にある、午前中からお預け可能で長期利用も可能な格安ペットホテル・チンチラカフェ・うさカフェをはじめ、純血種のうさぎ・チンチラを販売もしております。"
      article={true} />
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
            <p className='center'>うさぎ ｜ げっ歯目</p>
            <p className='center'><img src="/images/chi/pink.png" alt="" width={647} /></p>

            <img alt="" src="/images/chi2/c1.png" height={90} />
            <img alt="" src="/images/chi2/c2.png" height={90} />

            <table className='chi_table'>
            <tbody>
            <tr>
            <th colSpan={4} width={450} height={26} align="center" className="td_bg border_b_s  border_r azuki green">飼い主さんが毎日行う健康管理</th>
            </tr>
            <tr>
            <td colSpan={4} width={450} height={60}>
            ・体重測定・食餌量・飲水量<br />
            ・尿の異常・糞便の形状・数
            </td>
            </tr>
            <tr>
            <th colSpan={4} width={450} height={26} align="center" className="td_bg border_b_s  border_r azuki green">体重測定</th>
            </tr>
            <tr>
            <td colSpan={4} width={450} height={50}>毎日測定してください。</td>
            </tr>
            <tr>
            <th colSpan={4} width={450} height={26} align="center">食餌量</th>
            </tr>
            <tr>
            <td colSpan={4} width={450} height={50}>
            基本、牧草と適量(別枠)のペレット以外は与えないでください。<br />
            <br />
            牧草(チモシー)を中心に給餌する(総給餌量の9割が理想)<br />
            米印  生後7ケ月までは、アルファルファを2割～3割混ぜ給餌する
            </td>
            </tr>
            </tbody>
            </table>

            <p style={{background: '#fcf5e3', padding: '10px', lineHeight: '150%'}}>特に糞便は<font size={4} color="#ff0000">必ず</font>毎日数えてください。<br />
            排便量が50個少ない場合は危険信号です。かかりつけ獣医師に相談してください。</p>

            <p className="title02">与えてはいけないもの</p>

            <table className='chi_table'>
              <tbody>
              <tr>
              <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s green">第一位</th>
              </tr>
              <tr>
              <td colSpan={4} width={300} height={50} className="border_b "><a href="#1">ドライフルーツ</a></td>
              </tr>
              <tr>
              <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s green">第二位</th>
              </tr>
              <tr>
              <td colSpan={4} width={300} height={50} className="border_b "><a href="#2">炭水化物類(乳酸菌サプリ)</a></td>
              </tr>
              <tr>
              <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s green">第三位</th>
              </tr>
              <tr>
              <td colSpan={4} width={300} height={50}><a href="#3">オートミール(えん麦、もみ殻)</a></td>
              </tr>
              </tbody>
            </table>

            <p className='box_cream'>
            上記のものを与えると、間接的に消化器症候群、不正咬合、う食(虫歯)を引き起こす可能性があります。</p>

            <p className="menuTab" id={1}>ドライフルーツ</p>
            <p>
            毛球症予防フードとしてドライフルーツが販売されていますが、与えるメリット はなく無駄に糖質を摂取させるだけです。
            毛球症予防に必要なのは、パパイヤ、パイナップルに含まれる『酵素』です。<br />
            </p>
            <p className="menuTab" id={2}>乳酸菌サプリ</p>
            <p>
            市販されている多くの乳酸菌はほぼ炭水化物です。
            原材料にショ糖、小麦粉、 コーンスターチ、デンプン(澱粉)が入っているのは、腸内細菌のバラン スを崩す恐れがあります。
            </p>
            <p className="menuTab" id={3}>オートミール</p>
            <p>
            良質なペレットに含まれています。それ以上に与える必要性はないです。<br />
            牧草で補えない必要な栄養素は、ペレットに含まれています。
            </p>
            <p>
            当店オススメのペレット<br />
            ■イースター社　■バニーセレクションプロ
            </p>
            <br />
            <p>ペレット<br />給与量(目安)  体重当たりの割合  体重1kgの場合</p>
            <div className="info_area4" style={{marginTop: '5px'}}>
              <table className='chi_table'>
              <tbody>
              <tr>
              <th width={150} height={26} className="border_r border_b border_b2 green">成長期 </th>
              <td width={150} height={26} className="border_r border_b ">2.5～3%</td>
              <td width={150} height={26} className="border_b ">25～30g/日</td>
              </tr>
              <tr>
              <th width={150} height={26} className="border_r border_b border_b2 green">維持期</th>
              <td className="border_r border_b ">1.5～2.0%</td>
              <td className="border_b ">15～20g/日</td>
              </tr>
              <tr>
              <th width={150} height={26} className="border_r border_b border_b2 green">高齢期</th>
              <td className="border_r border_b ">1.0%</td>
              <td className=" border_b ">10g/日</td>
              </tr>
              <tr>
              <th width={150} height={26} className="border_r border_b2 green">肥満</th>
              <td className="border_r">1.0% </td>
              <td>10g/日</td>
              </tr>
              </tbody>
              </table>
            </div>
            <br clear="all" />
            <p className="menuLineLightW">飲水量</p>
            <p>
            目安・50～100ml/kg/日<br />
            毎日計量カップで飲水量を測定してください。
            </p>
            <p className="menuLineLightW">尿の異常・量</p>
            <p>
            飲水量にもよりますが、10～35ml/kg/日の排泄が見られます。<br />
            余分なカルシウムの排泄、生理的にポルフィリン尿が見られます。<br />
            <br />
            色や量の異常に気づくよう、トイレの下にペットシーツを使用してください。<br />
            うさぎの尿は有色(赤褐色)です。灰色の排泄が多く見られた場合、獣医師に相談 してください。<br />
            <br />
            毎日計量カップで飲水量を測定してください。
            </p>
            <p className="menuLineLightW">糞便の形状・数</p>
            <p>
            均一の大きさで約300～500個/日、排泄が見られます。<br />
            <br />
            <strong>大きさ</strong><br />
            900g～1.3kg:2cm以上<br />
            1.3kg～2.8kg:3cm以上<br />
            2.8kg～ :4cm以上<br />
            <br />
            ■糞便を指先で潰した際、牧草が粉砕された様な便が理想<br />
            ■潰れない、かたい場合は、ペレット量を見直してください。<br />
            ■換毛期に毛が混じりますが、繋がるのは危険信号です。<br />
            ■大きさがまばらな場合、要注意<br />
            ■軟便・下痢は一秒でも早く獣医師に診せてください。<br />
            <br /><br />
            その他・過剰なグルーミング、歩様の異常、下顎のよだれ、流涙、クシャミ、 咳、歯ぎしり、うずくまる姿勢、などを観察しましょう。<br />
            <br />
            <strong>推奨環境</strong><br />
            温度16～21度<br />
            湿度30～50%<br />
            </p>
            <p className="menuLineLightW">定期健診</p>
            <p>3ケ月に一度定期健診を行うのが理想</p>

            <p className='title03'>うさぎ</p>

            <div className="flex-wrap">
              <div className="w40p">
                <img alt="" src="/images/chi2/f3097acc-7ecf-4a94-b65f-48f6c60bdf1f.jpg" width={200} />
              </div>
              <div className="w60p">
                <table className='chi_table'>
                <tbody><tr>
                <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s   azuki green">種類</th>
                </tr>
                <tr>
                <td colSpan={4} width={300} height={50} className="border_b " style={{padding: '5px'}}>ラインランダー</td>
                </tr>
                <tr>
                <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s   azuki green">性別</th>
                </tr>
                <tr>
                <td colSpan={4} width={300} height={50} className="border_b " style={{padding: '5px'}}>女の子</td>
                </tr>
                <tr>
                <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s   azuki green">誕生日</th>
                </tr>
                <tr>
                <td colSpan={4} width={300} height={50} className="border_b " style={{padding: '5px'}}>2015年02月03日</td>
                </tr>
                <tr>
                <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s   azuki green">コメント</th>
                </tr>
                <tr>
                <td colSpan={4} width={300} height={50} style={{padding: '5px'}}>とっても人懐こい子です。三毛柄の珍しいうさぎさんです。男の子もいます</td>
                </tr>
                </tbody>
                </table>
              </div>
            </div>

            <p className='center'><Link to="/contact_c/"><img src="/images/chi/chi_bg02.png" alt="お問い合わせ・ご予約希望の方は" /></Link></p>

            <p className='title03'>うさぎ</p>

            <div className="flex-wrap">
              <div className="w40p">
                <img alt="" src="/images/chi2/2.png" width={200} />
              </div>
              <div className="w60p">
                <table className='chi_table'>
                <tbody>
                <tr>
                <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s   azuki green">種類</th>
                </tr>
                <tr>
                <td colSpan={4} width={300} height={50} className="border_b " style={{padding: '5px'}}>ヒマラヤン</td>
                </tr>
                <tr>
                <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s   azuki green">性別</th>
                </tr>
                <tr>
                <td colSpan={4} width={300} height={50} className="border_b " style={{padding: '5px'}}>女の子</td>
                </tr>
                <tr>
                <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s   azuki green">誕生日</th>
                </tr>
                <tr>
                <td colSpan={4} width={300} height={50} className="border_b " style={{padding: '5px'}}>2015年02月14日</td>
                </tr>
                <tr>
                <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s   azuki green">コメント</th>
                </tr>
                <tr>
                <td colSpan={4} width={300} height={50} style={{padding: '5px'}}>人懐こい子です。珍しいうさぎさん</td>
                </tr>
                </tbody>
                </table>
              </div>
            </div>

            <p className='center'><Link to="/contact_c/"><img src="/images/chi/chi_bg02.png" alt="お問い合わせ・ご予約希望の方は" /></Link></p>

            <p className='title03'>うさぎ</p>

            <div className="flex-wrap">
              <div className="w40p">
                <img alt="" src="/images/chi2/3.png" width={200} />
              </div>
              <div className="w60p">
              <table className='chi_table'>
                <tbody>
                  <tr>
                    <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s   azuki green">種類</th>
                  </tr>
                  <tr>
                    <td colSpan={4} width={300} height={50} className="border_b " style={{padding: '5px'}}>フレミッシュジャイアント</td>
                  </tr>
                  <tr>
                    <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s   azuki green">性別</th>
                  </tr>
                  <tr>
                    <td colSpan={4} width={300} height={50} className="border_b " style={{padding: '5px'}}>女の子</td>
                  </tr>
                  <tr>
                    <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s   azuki green">誕生日</th>
                  </tr>
                  <tr>
                    <td colSpan={4} width={300} height={50} className="border_b " style={{padding: '5px'}}>2015年01月03日</td>
                  </tr>
                  <tr>
                    <th colSpan={4} width={300} height={26} align="center" className="td_bg border_b_s   azuki green">コメント</th>
                  </tr>
                  <tr>
                    <td colSpan={4} width={300} height={50} style={{padding: '5px'}}>オランダ出身の可愛い女の子です。</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>

            <p className='center'><Link to="/contact_c/"><img src="/images/chi/chi_bg02.png" alt="お問い合わせ・ご予約希望の方は" /></Link></p>

            <p className='center'><img src="/images/chi/chi_bo.png" alt="" /></p>
            <p className='center'><Link to="/chi/"><img src="/images/chi/chi_b.png" alt="" /></Link></p>

          </div>

          <Sidebar />

        </div>
      </Layout>
    </>
  )
}

export default chi2

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://usagisan.info/chi2/#breadcrumblist",
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
          "nextItem":"https://usagisan.info/chi2/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://usagisan.info/chi2/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://usagisan.info/chi2/",
            "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜うさぎ｜げっ歯目｜うさぎ・チンチラ専門店",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」｜猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。｜うさぎ｜げっ歯目｜うさぎ・チンチラ専門店",
            "url":"https://usagisan.info/chi2/"
          },
          "previousItem":"https://usagisan.info/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://usagisan.info/chi2/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://usagisan.info/chi2/#webpage",
      "url":"https://usagisan.info/chi2/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜うさぎ｜げっ歯目｜うさぎ・チンチラ専門店",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://usagisan.info/chi2/#website"
      },
      "breadcrumb":{
        "@id":"https://usagisan.info/chi2/#breadcrumblist"
      },
      "datePublished":"2022-09-21T22:55:53+09:00",
      "dateModified":"2023-01-17T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://usagisan.info/chi2/#website",
      "url":"https://usagisan.info/chi2/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜うさぎ｜げっ歯目｜うさぎ・チンチラ専門店",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://usagisan.info/chi2/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
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