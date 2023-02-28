import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Seo from './components/Seo'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";

const herbivore_meal = ({ data }) => {
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
            <h2><img src="/images/herbivore_meal_tit.png" width={698} alt="草食動物にとって本当に必要な食事と体の関係" /></h2>
            <p className='blue'>今回のテーマ草食動物、一般的にうさぎ・チンチラ・モルモット・デグーにとって本当に必要な食事と身体の関係についてです。我々人間はもちろん動物も食べ物を摂取することで消化吸収され必要な栄養素を身体に取り入れ生命活動を行っています。<img src="/images/rabbit_chara01.png" width={50} height={50} className="middle" alt="" /></p>
            <p className='center'><img src="/images/chi/pink.png" alt="" width="100%" /></p>
            
            <p>吸収された栄養素は活動のために必要なエネルギー源になるだけではなく、筋肉・骨・細胞などの生体の構成や生命維持に必要な機能に利用されます。食事の摂取が不摂生だったり、食べていても必要な栄養素が十分に摂取できないと身体が正常な働きを維持することが困難になります。大切な栄養素を理解し犬・猫・鳥・うさぎ・モルモット・デグー・チンチラ・ハムスターなどの愛玩動物が病気にかかりにくい身体を作っていきましょう。</p>
            
            <p>病気になり難い身体を作ることは難しくありません。うさぎ・チンチラ・モルモット・デグー以外の犬・猫・鳥などの愛玩動物と生活する上で最も大切なのが食事と食餌の違いを把握することだと考えています。</p>
            
            <p>人間社会でもコンビニ弁当・インスタント食品を積極的に摂取している人は生活習慣病になりやすいです。例えばコンビニで販売している“おにぎり”です。おにぎりに含まれている添加物にグリシンという人工的に合成されたアミノ酸があります。表記上はアミノ酸としか書いてないので身体に悪いものではないと思いがちですが実際は日常的に摂取することで身体に悪影響を及ぼします。</p>
            
            <p>「食品添加物公定書」という公的な専門書には、グリシンをモルモットに大量に与えると、筋緊張の消失と一過性の完全麻痺が起こったという報告があります。言い出したらきりがないですし何も食べれなくなってしまいます。毎日摂取するのを控える程度が良いと思います。このような食事と見せかけた「お腹を満たすだけの食品」はたくさん存在しています。</p>
            
            <p>食事＝栄養摂取が本来の目的ですが、最近では食事＝カロリー摂取になっている気がします。食事とは生きていくために必要な行為そのものです。外食・コンビニなどの食品は単なるカロリー摂取だけのものであり、栄養摂取ではありません。この様な食生活は食事ではなく食餌であり病気になりやすい身体になるでしょう。自分の身体を作る上で大切な食生活を重視していないと生活習慣病はもちろん様々な病を患うことになるでしょう。</p>
            
            <p>うさぎ・鳥・ハムスター・デグー・チンチラ・犬・猫・モルモットなどの愛玩動物においても同じことが言えます。愛玩動物に食事を与える際は必ず栄養成分・原材料を確認してください。草食動物の場合、提供する食事に含まれる粗繊維が２２％以上のものであることが理想です。それ以外のものは与えても問題ないですが常食させる必要はないと思います。</p>
            
            <p>いくらこの様なことを書いても商品を購入するとき栄養成分・原材料を見て購入している人は少ないです。例えば店員が薦めてきた。レビューが良い。といった何となくで購入している人もいます。店員が薦めてくる際、栄養学の話などもしている場合もあるので全てとは言いません。通販とかで「うちの子はこのフード以外食べません」この様なレビューがある場合は注意が必要です。だいたい嗜好性が高く栄養素が低い商品です。</p>
            
            <p>残念なことに既に牧草などを食べなくなってしまった子の場合、現在与えているフードのままにしておいてください。良質な食事にしたところでも食べません。牧草を食べる子と違って口腔内・消化器の病を患う可能性がありますので「かかりつけ医」から事前にプリンペラン・ペリアクチンだけの医薬品を処方してもらうだけではなく総合的な医薬品を処方して貰ってください。</p>

            <p>犬・猫などの家庭動物全般はもちろん、特に身体が小さいうさぎ・チンチラ・デグー・モルモットなどの草食獣は影響が出やすいので何を与えるか把握する必要があります。嗜好性だけが高く栄養バランスの悪い食事を与えていると消化器症候群（イレウス）・悪性腫瘍・呼吸器系疾患など様々な病を患う可能性が高いです。</p>

            <p>病を防ぐためには食事がとても大切です。草食獣にとって最も大切な栄養素は「繊維質（炭水化物）」であることは言うまでもありません。人間では第六の栄養素として注目されていますがそれ以上に草食動物の食生活において重要です。繊維質は有害物質の排泄・栄養素の吸収、腸内環境の正常化に有益であることが知られています。食物繊維は腸の働きを整え腸内コレステロールなどを体外に排出したり糖分の消化吸収を抑制して血糖値の上昇を抑えるといった働きをしています。</p>

            <p>食物繊維が不足した食事（ペレット中心※体重の４％以上）内容では牧草を食べる量が少ないため結果として咀嚼回数が減り唾液の分泌が減少し齲蝕（虫歯）はもちろん常生歯（じょうせいし）が摩耗されず口腔内疾患にかかる可能性が高まります。一日の目安として牧草は体重の１０％程度を与えていただきたいです。</p>

            <p>食物繊維の多い食生活をすることで有益な腸内細菌が増えることによって発がん性物質の生成を抑制するなどの効果が期待されています。同時に有害物質の排除も行います。排便の促進が促されることで有害物質の体内滞留時間が短くなったり吸着することによって排泄させる作用もあるので残留農薬や食品添加物などにも効果があると考えられています。</p>

            <p>草食動物にとって必要なのは「粗繊維」だということです。正しい食事を提供し病を患わない子がこの世界にあふれることを願っています。</p>

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
      "@id":"https://usagisan.info/herbivore_meal/#breadcrumblist",
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
          "nextItem":"https://usagisan.info/herbivore_meal/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://usagisan.info/herbivore_meal/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://usagisan.info/herbivore_meal/",
            "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜草食動物にとって本当に必要な食事と体の関係",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」｜猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。｜草食動物にとって本当に必要な食事と体の関係",
            "url":"https://usagisan.info/herbivore_meal/"
          },
          "previousItem":"https://usagisan.info/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://usagisan.info/herbivore_meal/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://usagisan.info/herbivore_meal/#webpage",
      "url":"https://usagisan.info/herbivore_meal/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜草食動物にとって本当に必要な食事と体の関係",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://usagisan.info/herbivore_meal/#website"
      },
      "breadcrumb":{
        "@id":"https://usagisan.info/herbivore_meal/#breadcrumblist"
      },
      "datePublished":"2022-09-21T22:55:53+09:00",
      "dateModified":"2023-01-17T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://usagisan.info/herbivore_meal/#website",
      "url":"https://usagisan.info/herbivore_meal/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜草食動物にとって本当に必要な食事と体の関係",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://usagisan.info/herbivore_meal/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
  <body id="pagetop" />
  <Seo
    title="草食動物にとって本当に必要な食事と体の関係"
    description="チンチラ専門店（うさぎ専門店）うさぎさん（ペットホテル＆うさカフェ（チンチラカフェ））は、JR山手線鶯谷駅から５分の場所にある、午前中からお預け可能で長期利用も可能な格安ペットホテル・チンチラカフェ・うさカフェをはじめ、純血種のうさぎ・チンチラを販売もしております。"
    article={true} />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export default herbivore_meal

export const query = graphql`
query {
    h_bn: file(relativePath: {eq: "h_banner.png"}) {
        childImageSharp {
          gatsbyImageData(width: 970, layout: CONSTRAINED)
        }
    }
}
`