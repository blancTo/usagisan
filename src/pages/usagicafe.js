import React from 'react'

import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Seo from './components/Seo'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";

const usagicafe = ({ data }) => {
  return (
    <>
        <Seo
        title="うさぎカフェ"
        description="うさぎペットホテル・うさぎカフェ、チンチラ専門店をお探しなら【うさぎさん】へ。こちらのページでは、当店が運営しているうさぎカフェをご紹介しております。かわいいうさぎさんのイメージ写真も掲載しておりますのでぜひご覧ください。"
        article={true} />

        <Layout>
            <div id="mainimage">
                <div id="mainimage-inner">
                    <GatsbyImage image={data.cafe_head.childImageSharp.gatsbyImageData} alt="" />
                </div>
            </div>

            <Navbar />
        
            <div id="main-content" className="flex-wrap">
                <div className="main-cont">

                    <h3><img src="/images/cafe/usagicafe_tit.png" width={698} height={82} alt="うさぎカフェについて" /></h3>

                    <p>ストレスを感じていないうさぎと触れ合ったことがありますか？<br />
                    当うさぎカフェの仔たちは、一般家庭同様、愛玩動物として<br />
                    心安らぐ環境で生活している為、うさぎ本来の穏やかな性格をもった仔しかいません。<br />
                    ストレスを感じていないうさぎさんに会いにきてください。<br />
                    ウサギを触ったことない方でも抱っこすることが出来るほど人懐こいです。<br />
                    また、日本で滅多に見ることが出来ない希少種が沢山います。</p>

                    <h3 className="sub_title">☆当うさぎカフェが完全予約制の理由</h3>

                    <p>昨今、様々な動物と触れ合うことが出来る動物カフェが増えています。<br />
                    多くは当たり前のように毎日営業し、毎日多くの人に触られ、見られ、心安らぐ<br />
                    時間も与えられず“愛玩動物”としてではなく「展示動物」として扱われています。<br />
                    もし、あなたが同じ様な見世物小屋のような環境で生活をしていると考えた時、<br />
                    心安らぐ時間があると考えることが出来ないと思います。<br />
                    当店では、動物福祉の考えを尊重し動物にストレスを与えないことを第一に考えています。<br />
                    何よりも、本当にうさぎを愛してくれる方のみご来店していただきたいと考えています。</p>

                    <h3 className="sub_title">☆当店のうさぎさん</h3>

                    <div className="cafe_sn">
                        <div className="cafe01_sn"><img width="100%" height="auto" alt="" src="/images/cafe/IMG_2967.jpg" /></div>
                        <div className="cafe02_sn"><span><span className="sn_fs20">フレミッシュジャイアント</span><br />
                            <br />
                            通常のウサギの5倍は軽く越える巨大ウサギさん。<br />
                            とっても気が優しく、のんびり屋さんです。</span></div>
                    </div>
                    <div className="cafe_sn">
                        <div className="cafe01_sn"><img width="100%" height="auto" alt="" src="/images/cafe/IMG_2966.jpg" /></div>
                        <div className="cafe02_sn"><span><span className="sn_fs20">チェッカードジャイアント</span><br />
                            <br />
                            最も美しいウサギと言われています。<br />
                            フレミッシュジャイアントと同じ大型種です。<br />
                            マイペースな甘えん坊さん、抱っこも可能です。</span></div>
                    </div>
                    
                    <div className="cafe_sn">
                        <div className="cafe01_sn"><img width="100%" height="auto" alt="" src="/images/cafe/IMG_2980.jpg" /></div>
                        <div className="cafe02_sn"><span><span className="sn_fs20">スタンダードレッキス</span><br />
                            <br />
                            とても筋肉質でビロードのような毛並みを一度触れば、ずっともふもふしていたいと思うはずです。<br />
                            とても穏やかな性格です。</span></div>
                    </div>
                    
                    <div className="cafe_sn">
                        <div className="cafe01_sn"><img width="100%" height="auto" alt="" src="/images/cafe/IMG_2964.jpg" /></div>
                        <div className="cafe02_sn"><span><span className="sn_fs20">ラインランダー</span><br />
                            <br />
                            背中の一本線と三色の特徴的な模様が目をひくウサギさん。<br />
                            とにかく、美しいウサギさんで甘え上手です。</span></div>
                    </div>
                    
                    <div className="cafe_sn">
                        <div className="cafe01_sn"><img width="100%" height="auto" alt="" src="/images/cafe/IMG_2970.jpg" /></div>
                        <div className="cafe02_sn"><span><span className="sn_fs20">ヒマラヤン</span><br />
                            <br />
                            チャームポイントの細い顔と、特徴的な毛色<br />
                            幼稚園児でも抱っこすることができるほど、穏やかなウサギさんです。</span></div>
                    </div>
                    
                    <div className="cafe_sn">
                        <div className="cafe01_sn"><img width="100%" height="auto" alt="" src="/images/cafe/IMG_2971.jpg" /></div>
                        <div className="cafe02_sn"><span><span className="sn_fs20">ミニレッキス</span><br />
                            <br />
                            毛並みは、スタンダードレッキス同様美しく、触り心地も良いです。<br />
                            当店一の甘え上手</span></div>
                    </div>
                    
                    <div className="cafe_sn">
                        <div className="cafe01_sn"><img width="100%" height="auto" alt="" src="/images/cafe/IMG_2973.jpg" /></div>
                        <div className="cafe02_sn"><span><span className="sn_fs20">ネザーランドドワーフ</span><br />
                            <br />
                            他のウサギさんより小さいがとても活発です。<br />
                            とてもマイペースな性格です。</span></div>
                    </div>
                    
                    <div className="cafe_sn">
                        <div className="cafe01_sn"><img width="100%" height="auto" alt="" src="/images/cafe/IMG_2972.jpg" /></div>
                        <div className="cafe02_sn"><span><span className="sn_fs20">ホーランドロップ</span><br />
                            <br />
                            可愛い垂れ耳がチャームポイントのウサギさん<br />
                            性格はとても穏やかです。</span></div>
                    </div>
                    
                    <div className="cafe_sn">
                        <div className="cafe01_sn"><img width="100%" height="auto" alt="" src="/images/cafe/cafe3.png" /></div>
                        <div className="cafe02_sn"><span><span className="sn_fs20">チンチラ</span><br />
                            <br />
                            とっても柔らかい毛質が特徴の動物<br />
                            また人懐こくて愛くるしい表情を沢山見せてくれます。</span></div>
                    </div>
                    
                    <div className="cafe_sn">
                        <div className="cafe01_sn"><img width="100%" height="auto" alt="" src="/images/cafe/cafe4.png" /></div>
                        <div className="cafe02_sn"><span><span className="sn_fs20">プレーリードッグ</span><br />
                            <br />
                            とってもヤンチャな子です。<br />
                            仲良くなれば、腕の中で寝てくれます。</span></div>
                    </div>
                    
                    <div className="cafe_sn">
                        <div className="cafe01_sn"><img width="100%" height="auto" alt="" src="/images/cafe/cafe5.png" /></div>
                        <div className="cafe02_sn"><span><span className="sn_fs20">アルマジロ</span><br />
                            <br />
                            ムツオビアルマジロのアル君<br />
                            キュートな顔が魅力的な動物です。</span></div>
                    </div>
                    
                    <div className="cafe_sn">
                        <div className="cafe01_sn"><img width="100%" height="auto" alt="" src="/images/cafe/cafe6.png" /></div>
                        <div className="cafe02_sn"><span><span className="sn_fs20">マーモット</span><br />
                            <br />
                            日本で唯一見ることが出来る珍獣<br />
                            人に馴れていない為、触れ合うことは出来ませんがとっても愛くるしい表情で寝る姿を見て癒されてください。</span></div>
                    </div>
                    
                    <h3 className="cafe_h2">うさぎさん</h3>

                    <p><span itemProp="address" itemScope itemType="//schema.org/PostalAddress"><span itemProp="addressRegion">東京都</span><span itemProp="addressLocality">台東区</span><span itemProp="streetAddress">根岸3-5-4<br />
                        根岸ビル1階<br /></span>
                        電話番号 <span itemProp="telephone">03-6240-6374</span></span><br />
                    携帯電話 080-4383-7060<br />
                    メールアドレス info@usagisan.info<br />
                    <br />
                    動物取扱責任者 佐藤 重</p>
                    
                </div>

                <Sidebar />

            </div>
        </Layout>

    </>
  )
}

export default usagicafe

export const query = graphql`
    query {
        cafe_head: file(relativePath: {eq: "cafe_heder.jpg"}) {
            childImageSharp {
                gatsbyImageData(width: 970, layout: CONSTRAINED)
            }
        }
    }
`
