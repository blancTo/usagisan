import React from 'react'

import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Seo from './components/Seo'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";

const chinchilla_rearing = ({ data }) => {
  return (
    <>
      <Seo
      title="チンチラの飼育について"
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
        <h2><img src="/images/chinchilla_tit2.png" width={698} alt="チンチラの飼育について" /></h2>
        <p className="center"><img src="/images/chi/c1.png" width={208} height={156} alt="" /><img src="/images/chi/c2.png" width={208} height={156} alt="" /></p>
        <h3 className="txt12">昨今チンチラの知名度も上がり一定の人は知っているがまだまだ知っている人は少ない。<br />
          もっと言えば、飼育方法についても誤った情報が多く食生活が悪いがゆえに口腔内に問題が生じたり、<br />
          消化器系を悪くし若年で他界する個体が後を絶たない。</h3>
        <div><img src="chi/pink.png" alt="" width="100%" /></div>
        <p className="title02 mt0 bold txt130p"><img src="/images/jyuyo_pic01.png" width={76} height={51} />　チンチラの飼育で大切なポイント</p>
        <div className="list_box_ol">
          <ol>
            <li>最も重要な栄養源である繊維質が豊富で低たんぱく・低糖質・低脂質の食生活の徹底</li>
            <li>砂浴び</li>
            <li>適度な運動</li>
            <li>安心して休める部屋</li>
            <li>清潔な環境</li>
          </ol>
        </div>
        <p>これだけです。</p>
        <p>SNSなどを拝見すると果物・種子類・乳酸菌、毛球症予防と書かれたショ糖が主原料のチューブ・酵素という名の無意味なサプリなどを与えている方々が驚くほど多いです。</p>
        <p>中毒死することはありませんが、今後様々な病を患うことになるでしょう。ごく稀に食生活が悪くても長生きする子もいますが…</p>
        <p className="title02">チンチラの生活環境について</p>
        <p>チンチラはとてもきれい好きです。清掃は毎日行ってください。これはチンチラだけではないんですけどね。布製品などのクッション・ハンモックなどは一日起きに天日干し、理想は毎日乾燥機にかけて滅菌すること。</p>
        <p className="title02">※チンチラは頻繁に物を齧るの？</p>
        <p>チンチラの歯は常生歯（じょうせいし）です。そのため自らで削る必要があります。だからと言って特別な飼育をする必要はありません。牧草をたくさん食べさせていれば歯に問題が起きることは限りなく少ないですが適切な飼育が出来ていない子はよく物を齧ります。</p>
        <p>これは「げっ歯類」だから齧るのではなく食生活や環境が悪いから手当たり次第物を齧りストレス発散しています。基本チンチラは食品以外齧ることはありません。現時点でステージ・ケージ・ハウス等をよく齧る行動を見られる場合は食生活、生活環境を見直す必要があります。注意点として挙げれるのは食生活が乱れている個体に理想の食生活を押し付けても拒絶され最悪は激やせしてしまう可能性があります。不要な物を少しずつ減らしていくことが大切です。半年以上の時間をかけて食生活を変えていく位の考えで良いと思います。</p>
        <p className="title02">※チンチラの散歩について</p>
        <p>チンチラに散歩は必要か不要か？<br />
          これについては必要かどうか自身で判断するのではなくチンチラが自由にケージの外に出れるスペースを用意しておくのが好ましいと伝えています。<br />
          お部屋の中を縦横無尽に走り回られたくない方はサークル等の囲いを用意してあげることが好ましいでしょう。<br />
          毎回毎回、飼い主がチンチラをケージから外に出し、半強制的に動き回らせるより自主性に任せるのが大切だということです。<br />
          人間都合で物事を考えるのではなく、チンチラに判断を委ねるという選択肢をもつことが大切だと思います。毎回毎回人間の都合でチンチラの行動を決めていたらストレスに感じます。</p>
        <p className="title02">※運動不足にならない為に</p>
        <p>ケージ内に運動できる滑車などを設置しておくと良いでしょう。チンチラは一回の運動で長時間運動することが出来ません。<br />
          その為、滑車などを使用させ短時間の運動を一日の間に何回も行うことが運動不足にならない最良の方法だと言えます。</p>
        <p className="title02">※チンチラの躾について…</p>
        <p>そもそも動物に対する躾とは何か？一言でいえば人間が都合のいいように行動を抑制することだと言っても良いでしょう。<br />
          我々人間も他人から行動を抑制されたらストレスを感じるようにチンチラも感じます。躾という概念を捨て、全てを許容すればどんな行動をされても愛すことが出来るはずです。</p>
        <p className="title02">※チンチラの雌雄について</p>
        <p>雌雄のどちらが飼いやすいかを聞かれることがあります。極論どちらを飼育しても、食生活が確りしていれば理解しあうことが出来るパートナーになるでしょう。<br />
          習性を気にする場合は別ですが…</p>
        <p className="title02">※チンチラを飼育する上で必要な温度</p>
        <p>様々なサイトで色々な意見を述べている方がいますが、お部屋状況によって適温が変わる為、何度にしてくださいということは言えません。<br />
          個人的には夏は暑すぎず、冬は寒すぎないことが重要です。<br />
          特に冬の室温は気を付けてください。１５度以下にしないよう心掛けてください。あとは除湿器などを設置し可能な限り乾燥させる必要がありますが、乾燥させ過ぎると飼い主の体調に影響してくるので程々にしてください。年間通して５０％程度に保てれば十分だと思います。</p>
        <p className="title02">※チンチラの食事について</p>
        <p>草食動物に最も大切なのは牧草です。<br />
          一般的にはイネ科のチモシーを与えます。チモシーを選ぶ際「硬く」ないとダメだと思っている人が多いかもしれませんが、これは間違いです。</p>
        <p className="title03 txt130p">大切なのは「硬さ」ではなく「量」です。</p>
        <p>量が大切理由は咀嚼回数を増やす必要があるからです。確りと咀嚼させることで口腔内の様々な問題を解決してくれます。人為的な理由で不正咬合を患うことがあります。理由はペレットの選択を間違える人が多いからです。</p>
        <p className="underline">ハードタイプ（主原料がアルファルファ・大豆・トウモロコシ）のペレットを与えると臼歯に問題が生じやすいです。嗜好性が高く牧草給餌量もすくなくなり不正咬合になる可能性がすごく高いです。</p>
        <p>更に肥満になり内臓への負担が大きくなり蠕動運動などの動きが悪くなり、臼歯に問題が生じる前に消化器系に問題が生じ栄養の吸収率が下がり被毛などの状態が悪くなります。</p>
        <p><span className="underline bg-gray">ペレットは総合栄養食ではなく「サプリ」程度に思って与えてください。</span></p>
        <p>歯の伸び過ぎを防ぐ一番の方法は牧草好きな子にすることです。</p>
        <p><span className="underline bg-gray">与える必要のない【ショ糖・果物・野菜・種子類・コーンスターチなどが主原料のサプリ・酵母、酵素・乳酸菌など】物を与えないことが大切です。</span></p>
        <p>一日の食事の９割りは牧草、残り０．５割をペレット、０．５割を乾燥している葉っぱ・齧り木だけで十分です。余計な食品を与えれば与えるほど、牧草を食べ量が減り結果として健康を損なう可能性が高くなります。</p>
        <p className="title03 txt130p">※チンチラの砂浴びについて</p>
        <p>基本ケージの中にたっぷりのチンチラ用の砂を容器の中に入れておけば大丈夫です。<br />
          当然毎日全て捨て、毎日新しい砂を入れ替える必要があります。</p>
        <p>一日３０分とか時間を決めるのではなく、前述したように人間都合で物事を考えずチンチラにすべての行動を決めさせることが大切だと思います。</p>
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
      "@id":"https://usagisan.info/chinchilla_rearing/#breadcrumblist",
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
          "nextItem":"https://usagisan.info/chinchilla_rearing/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://usagisan.info/chinchilla_rearing/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://usagisan.info/chinchilla_rearing/",
            "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜チンチラの飼育について",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」｜猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。｜チンチラの飼育について",
            "url":"https://usagisan.info/chinchilla_rearing/"
          },
          "previousItem":"https://usagisan.info/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://usagisan.info/chinchilla_rearing/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://usagisan.info/chinchilla_rearing/#webpage",
      "url":"https://usagisan.info/chinchilla_rearing/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜チンチラの飼育について",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://usagisan.info/chinchilla_rearing/#website"
      },
      "breadcrumb":{
        "@id":"https://usagisan.info/chinchilla_rearing/#breadcrumblist"
      },
      "datePublished":"2022-09-21T22:55:53+09:00",
      "dateModified":"2023-01-17T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://usagisan.info/chinchilla_rearing/#website",
      "url":"https://usagisan.info/chinchilla_rearing/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜チンチラの飼育について",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://usagisan.info/chinchilla_rearing/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export default chinchilla_rearing

export const query = graphql`
query {
    h_bn: file(relativePath: {eq: "h_banner.png"}) {
        childImageSharp {
          gatsbyImageData(width: 970, layout: CONSTRAINED)
        }
    }
}
`