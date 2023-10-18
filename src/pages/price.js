import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const price = ({ data }) => {
  return (
    <>
      <Layout>
        <div id="mainimage">
          <div id="mainimage-inner">
            <GatsbyImage image={data.price_head.childImageSharp.gatsbyImageData} alt="" />
          </div>
        </div>
        <Navbar />

        <div id="main-content" className="flex-wrap">
          <div className="main-cont">
            <h3>
              <img src="/images/price_tit.jpg" alt="" />
            </h3>
            <h3>当うさぎカフェは時間制です</h3>
            <p>時間内、うさぎのみの触れ合いは自由です。</p>

            <table className="legal_notice">
              <tbody>
                <tr>
                  <th>１名様の料金</th>
                  <th>60分＋1drink付き</th>
                  <th>延長10分</th>
                </tr>
                <tr>
                  <td>大人</td>
                  <td>2,000円</td>
                  <td>400円</td>
                </tr>
              </tbody>
            </table>

            <p>
              ※ドリンクのおかわりはお気軽に申し付け下さい
              <br />
              ※料金は税別です。但しサービスドリンク不要の場合10%割引します。
              <br />
              ＊プレーリードッグ・チンチラ・アルマジロ・マーモットとの触れ合いも可能です
            </p>
            <p>
              ＊当店は時間制です。予約時間3分前から入場可能です。
              <br />
              ※18歳以下のお客様の場合、カフェのご利用は必ず保護者同伴でお願い致します。
            </p>

            <h3>
              <img src="/images/price_tit01.jpg" width={698} height={82} alt="ペットホテルのご利用料金" />
            </h3>

            <table className="legal_notice">
              <tbody>
                <tr>
                  <th>1泊あたりの料金</th>
                  <td>2,200円（税込）</td>
                </tr>
              </tbody>
            </table>

            <ul>
              <li>チェックイン時、使用している給水ボトル、排便(3個程)を持参してください。</li>
              <li>冷暖房完備の店内でお預かりします。</li>
              <li>ホテル用のケージを用意させていただきます。</li>
              <li>
                床材はALL牧草、ケージ全面に牧草を敷き詰めさせていただきます。（排便数が250個以上出ているうさぎさんが対象です）＊望まれる場合はお申し付けください
              </li>
              <li>樹脂フロアの床材もご用意させて頂いております。</li>
              <li>小動物のみのお預かりとさせていただきます。</li>
              <li>
                当日に感染症の恐れが認められた場合や健康状態が良好と判断できない場合はお断りさせていただくことがあります。
                <br />
                ご心配な方や、体調が悪いウサギさんは予め獣医師に診察をしてもらってください。
                <br />
                （５歳以上のウサギさんは獣医師が一カ月以内に発行した健康診断証明書が必要となります。無くても基本お預かりしますが割引は適用出来かねます。）
              </li>
              <li>薬の投与等はお受けできませんのでご了承ください。</li>
              <li>
                ご予約時間を15分以上超過する場合は、お手数ですがinfo@usagisan.infoまたは、
                <br />
                080-4383-7060まで連絡ください。
              </li>
              <li>午前8時からお預かり可能です。</li>
              <li>
                割引料金はお客様への通知なしに改定しホームページにアップされている料金システムを採用させて頂きます。
              </li>
              <li>キャンセル料、予約時から3日前ご契約料金の50%、前日・当日はご契約料金の100%頂戴いたします。</li>
              <li>
                当店から飼育管理者様に消化器症候群(ガス)・体調不良の可能性があることを告げたのにも関わらず病院へ行くことを拒否された場合ご宿泊費とは別に特別料金を請求させていただきます。
              </li>
              <li>午後12時以降のお引取りは半日分、15時以降は1日分のご宿泊費用を頂戴します。</li>
              <li>
                午前8時前、午後20時以降、年末年始(12月31日から1月1日)のチェックイン・チェックアウトは基本可能ですが1日分のご宿泊費を頂戴いたします。
              </li>
              <li>お迎え当日の延泊につきましては基本可能ですが1日分のご宿泊費を頂戴いたします。</li>
              <li>8月10日から8月18日/12月27日から1月5日迄は一泊3,300円頂戴いたします。</li>
            </ul>

            <h3 className="sub_title">Q&amp;Aよくあるご質問</h3>

            <div className="qa">
              <dl>
                <dt className="qa01">ご飯の指定は可能ですか？</dt>
                <dd>指定のご飯（牧草・ペレット）がある場合はご持参してください。</dd>
                <dt className="qa01">当日の予約は可能ですか？</dt>
                <dd>基本的に可能です。予約状況によりお断りさせていただく場合がございます。</dd>
                <dt className="qa01">ケージの持ち込みは可能ですか？</dt>
                <dd>ケージの持ち込みはご遠慮ください。</dd>
                <dt className="qa01">宿泊延長は可能ですか？</dt>
                <dd>満室でなければ可能です。※延長料金はお引き取りの際にご請求させていただきます。</dd>
                <dt className="qa01">クレジットカード決済は可能ですか？</dt>
                <dd>現金のみとさせていただきます。</dd>
                <dt className="qa01">キャンセル料はかかりますか？</dt>
                <dd>
                  お問い合わせのメールを送信された直後から発生します。ご宿泊費を知りたい場合はお電話ください。
                  <br />
                  24日前から3日前50%、前日・当日100%頂戴しております。
                  <br />
                  キャンセル料は通常料金2,200円×宿泊予定日分で請求させていただきます。
                  <br />
                  お客様から頂戴したキャンセル料は公益財団法人日本ユニセフ協会・WWF
                  ジャパン・公益社団法人日本動物福祉協会・国際NGOワールド
                  ・ビジョン・ジャパン・公益財団法人プラン・ジャパンへ寄付させていただきます。
                </dd>
              </dl>
            </div>

            <h3 className="sub_title">ペットホテルご利用にあたって</h3>

            <p>※病気（爪ダニを含む）・けががある場合は、必ず事前にお知らせください。</p>
            <p>
              <img src="/images/price_img02.jpg" width={61} height={19} alt="免責事項" />
              <br />
              以下の場合、当店では責任を負いかねます。
            </p>

            <ol>
              <li>お客様からのお申し出がなく発生した全ての病気、怪我、死亡。</li>
              <li>お預かり後に発見、発生した全ての病気、怪我。特に鬱滞、ガス、食滞、毛球症の発見</li>
              <li>
                当店の不可抗力による突発性による事故（天災による自然被害・第三者による被害・事故など）
                不慮の事故・高齢・持病・特異体質に基づく発病・死亡・ケガ・突然死などが発生した場合、又いかなる事情に置いても保証・賠償、損害補償などのいかなる請求は一切お受けできませんので予めご了承下さい。
              </li>
            </ol>

            <p>
              <img src="/images/price_img01.jpg" width={73} height={19} alt="お得情報" />
            </p>

            <p className="red bold">
              【送迎費無料】2ケ月以上ご利用のお客様に限り無料で送迎させていただきます。
              <br />
              チェックイン時、普段使用されている給水ボトルは必ずお持ち下さい。
            </p>

            <div className="price10">
              <img src="/images/price_img03.jpg" width={721} height={201} alt="" />
            </div>
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
      "@id": "https://usagisan.info/price/#breadcrumblist",
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
          nextItem: "https://usagisan.info/price/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/price/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/price/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜料金システム",
            description:
              "埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」の料金システム。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。",
            url: "https://usagisan.info/price/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/price/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/price/#webpage",
      url: "https://usagisan.info/price/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜料金システム",
      description:
        "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/price/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/price/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/price/#website",
      url: "https://usagisan.info/price/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜料金システム",
      description:
        "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/price/#person",
      },
    },
  ],
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ご飯の指定は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "指定のご飯（牧草・ペレット）がある場合はご持参してください。",
      },
    },
    {
      "@type": "Question",
      name: "当日の予約は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "基本的に可能です。予約状況によりお断りさせていただく場合がございます。",
      },
    },
    {
      "@type": "Question",
      name: "ケージの持ち込みは可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ケージの持ち込みはご遠慮ください。",
      },
    },
    {
      "@type": "Question",
      name: "宿泊延長は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "満室でなければ可能です。※延長料金はお引き取りの際にご請求させていただきます。",
      },
    },
    {
      "@type": "Question",
      name: "クレジットカード決済は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "現金のみとさせていただきます。",
      },
    },
    {
      "@type": "Question",
      name: "キャンセル料はかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "お問い合わせのメールを送信された直後から発生します。ご宿泊費を知りたい場合はお電話ください。24日前から3日前50%、前日・当日100%頂戴しております。キャンセル料は通常料金2,200円×宿泊予定日分で請求させていただきます。お客様から頂戴したキャンセル料は公益財団法人日本ユニセフ協会・WWF ジャパン・公益社団法人日本動物福祉協会・国際NGOワールド ・ビジョン・ジャパン・公益財団法人プラン・ジャパンへ寄付させていただきます。",
      },
    },
  ],
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title="料金システム"
      description="うさぎペットホテル、うさぎカフェ、チンチラ専門店をお探しなら【ウサギさん】へお越しください。こちらは当店の紹介ページになります。営業時間、受付時間等はこちらのページをご確認下さい。"
      article={true}
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
  </>
)

export default price

export const query = graphql`
  query {
    price_head: file(relativePath: { eq: "price_img.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
