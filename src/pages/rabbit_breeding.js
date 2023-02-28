import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Seo from './components/Seo'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";

import "@fortawesome/fontawesome-svg-core/styles.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const rabbit_breeding = ({ data }) => {
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

        <h3><img src="/images/breeding_tit.png" width={698} alt="うさぎの飼育　グルーミング" /></h3>

        <h3 className='blue bold center'>うさぎの換毛期とブラッシングの重要性<img src="/images/rabbit_chara01.png" alt="" width={50} height={50} className="middle" /></h3>
        <div><img src="/images/chi/pink.png" alt="" width="100%" /></div>
        <p className="bold center">うさぎを飼育する上で換毛期の対処法を知ることは大切です。</p>
        <p className='box_cream bold center'><img src="/images/jyuyo_pic01.png" width={76} height={51} alt="" /> 換毛期だけではなく日頃のブラッシングが重要！</p>
        <p className='title02'>日頃のブラッシングを行うメリット</p>
        <div className="rabbit_list01">
          <ul>
            <li><FontAwesomeIcon icon={faCheck} /> ブラッシングを毎日行うことでコミュニケーションをとることが出来る。</li>
            <li><FontAwesomeIcon icon={faCheck} /> ブラッシングを毎日行うことで体重の減少、また体調の変化に気づきやすくなる。</li>
            <li><FontAwesomeIcon icon={faCheck} /> ブラッシングに毎日行うことで大量に毛が抜ける換毛期、長い時間ブラッシングしても嫌がらなくなる。</li>
          </ul>
        </div>
        <div style={{padding: '0 2%'}}>
          <p>などなど様々なメリットがあります。</p>
          <p> 特に毛が抜ける換毛期にブラッシングを怠ると消化器症障害、俗にいう毛球症になる可能性が上がります。理由はうさぎの毛質に深く関係していると言われています。うさぎの毛は毛髄が多く毛皮質が少なく切れやすく細い特徴があり、また毛はとても切れやすいことからうさぎ自身が毛づくろいした時に毛をのみ込んでしまうことがある為、ブラッシングは大切だと言えます。</p>
          <p>※毛髄と毛の中心部、立方体形の細胞が蜂の巣のように並び内部に空気を通す穴が開いていて、この穴に空気がたまるとことで熱から身体を守っています。</p>
          <p>個人的な考えを言えば、換毛期だけではなく普段から抜ける毛の量は給餌が深く関係していると考えています。栄養過多であったり少し肥満気味の子はどうしても毛の抜ける量が多いと感じています。加えて「デンプン・豆科・トウモロコシ（コーンスターチ）」などの原料が多く含んでいる食品（ペレット・サプリ）を与えている子は換毛期が長期化します。<br />
            普段あげている食品の原材料名を確認することをオススメします。</p>
          <p>換毛期は一般的に年４回と言われていますが、昨今室内で飼養されていることが普通となっている状況においては室内環境によって換毛の時期が異なると考えるのが妥当です。</p>
          <p>多くの飼育書にうさぎが換毛時普段以上に体力を消耗すると書かれていることが多いですが科学的に十分な証拠がないので普段以上に多くのペレットを与える必要はないと思います。まれに換毛期に体重が減少する個体もいると思います。その際はペレットの量を１グラム、または２グラム多く与えて様子をみることをオススメします。<br />
            その際、換毛期だから体重が減っているのかどうかを把握するためにこまめに体重測定を行うことをオススメします。体重測定に関しては理想は毎日、少なくても一週間に一回はかることをオススメします。</p>
        </div>
        <p className='title03'>
          うさぎのブラッシング方法<img src="/images/burashi_pic01.png" width={30} height={30} alt="" /><img src="/images/rabbit_chara01.png" width={50} height={50} alt="" />
          </p>
        <div style={{padding: '0 2%'}}>
          <p>ブラッシングを行うというより普段から自身の手を使ってうさぎの身体全体を撫でてあげるだけでもかなり毛を除去することが可能です。</p>
          <p>ご存知の通りうさぎは毛の色を表すガードヘアー、地肌に近く柔らかい毛をアンダーコートと二つの毛がはえています。この二つの毛が同時に換毛を開始することもありますが、別々に換毛をし始めることもあります。そのため普段から自身の手で撫でるように優しくブラッシングを行い、うさぎに「ブラッシングは気持ちいいものなんだ」と覚えてもらうことが大切です。<br />
            うさぎのブラッシング用の器具は様々な会社から販売されています。個人的にオススメしたいのはラバー系のものです。金属製のものは力を少し入れただけでうさぎの皮膚を傷つけてしまう可能性があります。とはいえ毛が絡まりやすい個体の場合はラバー系の器具では絡まりをほどくことが出来ません。ぬるま湯で毛を少し浸してから人間用のコーム（眉毛ブラシ）などを使い根気よくほぐすことをオススメします。<br />
            スリッカーブラシを使って強引にブラッシングすると皮膚を傷つける可能性が高くなり痛みを覚えたうさぎがブラッシングを嫌がるようになるので少しでも力を入れて行うブラッシングはオススメできません。換毛期はかなり毛が抜け口に入ったりしますのでグルーミングスプレーなどを使うのも良いと思います。またはぬるま湯につけたタオルをきつく絞ったうえでうさぎの身体を拭いてから行うと毛が飛び散りにくくなります。</p>
          <p>手順としては</p>
        </div>
        <div className="rabbit_list02">
          <ol>
            <li>ラバーブラシを使用しガードヘアーの毛並みに沿ってブラッシング<br />
              とにかく優しく何度も何度もラバーブラシで撫でるようにしてブラッシングすることです。（力を入れないよう心掛けてください）</li>
            <li>コロコロ・またはきつく絞ったタオルで撫でてあげると浮いた毛をとることができます。（スリッカーブラシは良いものですが、力が入りやすかったり絡まった毛を引っ張ってしまう可能性があるので、ブラッシング初心者にはオススメできません）</li>
            <li>最後はトリートメントなどを使っても良いと思いますが。</li>
          </ol>
        </div>
        <p>コツは力をいれず何度も何度も優しく身体をなぞるようにブラッシングすること。</p>
        <p>ブラッシングはガードヘアーはラバーブラシなどを使い、アンダーコートにスリッカーブラシが有効的だと言われています。</p>
        <p className='box_cream bold center'><img src="/images/point_pic01.png" width={76} height={54} alt="" /> なぜブラッシングが必要なのか？</p>
        <p>ブラッシングが必要な理由を深く掘り下げると、うさぎの消化器障害を「急性胃拡張」、「鼓脹症」、「食滞・うっ滞」の予防になると考えられているからです。<br />
          ただ毎日グルーミングを行ったからと言って消化器障害を完全に防げるかというとそうではありません。「室温・湿度の変化」などをはじめ様々な要因があるため、グルーミングを行ったからと言って完全に予防出来るわけではありませんがグルーミングを行うことで発症確率をかなり低くすることが可能です。</p>
        <p className='box_cream bold center'><img src="/images/stress_pic01.png" width={75} height={57} alt="" className='middle' />　消化器障害を減少させるストレスのない環境作り</p>
        <p>ストレスとは身体の中のひずみの状態を言い、うさぎのストレス作因としては物理的・栄養的・生物的・精神的などがあげられます。</p>
        <p>まずは物理的要因として季節の変動に伴うストレスがあります。これは人間も季節の変わり目になると多くの人が体調を崩すのと同じでストレスが生じます。</p>
        <p>　物理的要因に関してはエアコンなどを使用し可能な限り一定の環境を提供することが大切です。生活環境の変化に伴うストレスがあると唱える人は多いが、これは生活環境の変化ではなく移動時に大きなストレスが生じているのであり余程不衛生な環境でない限り環境が変化したことに対してストレスを感じることはないと思います。うさぎは縄張り意識が強いため数時間は様子を伺うような仕草をすることがありますがマーキングなどを積極的に行い自身が安心できる空間を自らで作りだすことが出来ます。</p>
        <p>　うさぎに関して言えば、もっともストレスがかかるのは栄養的要因だと考えています。<br />
          うさぎの飼育に疎い方は知らず知らずのうちにデンプンが多い食事を与えたり、低繊維質の食事を与えることが多いです。この様な食生活を続けるとすぐに消化器にストレスが生異常な発酵を起こし、機能不全になってしまうケースが多いです。この様なストレスを与えないためにも常に新鮮な牧草を与えることが大切です。<br />
          人もうさぎもストレスに弱い動物です。飼育管理者がうさぎにストレスを与えていないか毎日気にしながら生活することが大切です。</p>
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
      "@id":"https://usagisan.info/rabbit_breeding/#breadcrumblist",
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
          "nextItem":"https://usagisan.info/rabbit_breeding/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://usagisan.info/rabbit_breeding/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://usagisan.info/rabbit_breeding/",
            "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜うさぎの飼育　グルーミング",
            "description":"埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」｜猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。｜うさぎの飼育　グルーミング",
            "url":"https://usagisan.info/rabbit_breeding/"
          },
          "previousItem":"https://usagisan.info/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://usagisan.info/rabbit_breeding/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://usagisan.info/rabbit_breeding/#webpage",
      "url":"https://usagisan.info/rabbit_breeding/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜うさぎの飼育　グルーミング",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://usagisan.info/rabbit_breeding/#website"
      },
      "breadcrumb":{
        "@id":"https://usagisan.info/rabbit_breeding/#breadcrumblist"
      },
      "datePublished":"2022-09-21T22:55:53+09:00",
      "dateModified":"2023-01-17T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://usagisan.info/rabbit_breeding/#website",
      "url":"https://usagisan.info/rabbit_breeding/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】｜うさぎの飼育　グルーミング",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://usagisan.info/rabbit_breeding/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
  <body id="pagetop" />
  <Seo
    title="うさぎの飼育　グルーミング"
    description="チンチラ専門店（うさぎ専門店）うさぎさん（ペットホテル＆うさカフェ（チンチラカフェ））は、JR山手線鶯谷駅から５分の場所にある、午前中からお預け可能で長期利用も可能な格安ペットホテル・チンチラカフェ・うさカフェをはじめ、純血種のうさぎ・チンチラを販売もしております。"
    article={true} />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export default rabbit_breeding

export const query = graphql`
query {
    h_bn: file(relativePath: {eq: "h_banner.png"}) {
        childImageSharp {
          gatsbyImageData(width: 970, layout: CONSTRAINED)
        }
    }
}
`