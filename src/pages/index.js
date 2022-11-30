import React from 'react'

import { GatsbyImage } from "gatsby-plugin-image"
import { graphql,Link } from "gatsby"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Seo from "./components/Seo";
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";

const index = ({ data }) => {
  return (
    <>

      <Seo />

      <Layout>

      <div id="mainimage">
        <div id="mainimage-inner">
          <GatsbyImage image={data.h_bn.childImageSharp.gatsbyImageData} alt="" />
        </div>
      </div>
      
      <Navbar />
      
      <div id="main-content" className="flex-wrap">
          <div className="main-cont">
            
            <div className="smp center">
              <p><Link to="/contact_hotel.html"><GatsbyImage image={data.hotelbtn.childImageSharp.gatsbyImageData} alt="ペットホテルのお問い合わせ・ご予約はこちらから" /></Link></p>
              <p><Link to="/contact_cafe.html"><GatsbyImage image={data.cafebtn.childImageSharp.gatsbyImageData} alt="うさぎカフェ問い合わせ・ご予約はこちらから" /></Link></p>
              <p><Link to="tel:08043837060"><GatsbyImage image={data.telbtn.childImageSharp.gatsbyImageData} alt="お見積などのお問い合わせは携帯電話まで" /></Link></p>
            </div>

            <h3><GatsbyImage image={data.title01.childImageSharp.gatsbyImageData} alt="ペットショップうさぎさん" /></h3>
            
            <p>純血種うさぎさんとチンチラを販売しております。<br />
            当店のウサギさんは全て海外産まれです。<br />
            フレミッシュジャイアント・チェッカードジャイアント・スタンダードレッキス・ミニレッキス・ラインランダー・ホーランドロップ・ネザーランドドワーフ・ヒマラヤの可愛いうさぎさんを販売。</p>
            
            <p className="center"><Link to="/fremishgiant_page.html"><GatsbyImage image={data.fre_bn.childImageSharp.gatsbyImageData} alt="フレッシュジャイアントの販売はこちら" /></Link></p>
            
            <h3><GatsbyImage image={data.title02.childImageSharp.gatsbyImageData} alt="完全予約制・小動物専門ホテル" /></h3>
            
            <ul>
              <li><span>ペットホテルうさぎさんは、JR山手線、鶯谷駅南口から徒歩5分(第一勧業信用組合からすぐ)、日比谷線、入谷駅から徒歩7分の場所に ある完全予約制のペットホテルです。</span></li>
              <li><span>当店は一羽一羽のウサギさんが心地よく、ゆっくりと自宅に居るときのように安心して過ごせるよう、室内の環境に配慮している為、完全予約制とさせて頂いております。</span></li>
              <li><span>ウサギさんが快適に過ごせるようお預かりしたウサギさんはすべて大型ケージでお預かりさせていただきます。またハリネズミ(ピグミーヘッジホッグ)・チンチラ・デグー・モルモット・ハムスター・ジリスは専用ケージでお預かりします。</span></li>
              <li><span>大切にお預かりいたしますので、飼い主様はもちろん、ホテルが初めてという、ウサギさんも安心してご利用いただけます。</span></li>
              <li><span>健康状態の良いウサギさんのみお預かりさせていただきます。(チェックイン時、必ず排便を持参してください)</span></li>
              <li><span>ペットホテルご利用時、ウサギさんの爪切り、グルーミングはサービスで行っております。ご希望の際はお申し付けください。</span></li>
              <li><span>小動物であれば基本お預かりさせていただきます。(うさぎ・チンチラ・デグー・ハムスター・ジリス・モルモット・ハリネズミ)</span></li>
              <li><span>キャリーバックは無料でお預かりさせていただきます。不潔な場合は、清掃費(1,100円)頂戴します。</span></li>
            </ul>
            
            <p className="center"><Link to="/hotel/"><GatsbyImage image={data.hotel_bn.childImageSharp.gatsbyImageData} alt="ペットホテル" /></Link></p>
            
            <p className="center"><Link to="mailto:info@usagisan.info" className="contact_btn">お問い合わせ・ご予約希望の方は</Link><br className="smp" />info@usagisan.info</p>
            <p className="center"><Link to="tel:080-4383-7060" className="contact_btn">お電話でのお問い合わせはこちら</Link><br className="smp" />080-4383-7060</p>
            
            <h3><GatsbyImage image={data.title03.childImageSharp.gatsbyImageData} alt="完全予約制うさぎカフェ" /></h3>
            
            <ul>
              <li><span>毎週土曜日、日曜日12時ー20時、完全予約制で<Link to="/usagicafe/">うさぎカフェ</Link>、チンチラカフェ、アルマジロカフェを営業しております</span></li>
              <li><span>フレミッシュジャイアント・チェッカードジャイアント・スタンダードレッキス・ミニレッキス・ネザーランドドワーフ・ホーランドロップ・ラインランダー・ヒマラヤン・もふもふのチンチラさん珍獣アルマジロが皆様をお待ちしております。</span></li>
              <li><span>見学希望のお客様はご来店前に必ず連絡をください。</span></li>
            </ul>
            
            <p className="center"><Link to="mailto:info@usagisan.info" className="contact_btn">お問い合わせ・ご予約希望の方は</Link><br className="smp" />info@usagisan.info</p>
            <p className="center"><Link to="tel:080-4383-7060" className="contact_btn">お電話でのお問い合わせはこちら</Link><br className="smp" />080-4383-7060</p>
            
            <h3><GatsbyImage image={data.title04.childImageSharp.gatsbyImageData} alt="アクセスマップ" /></h3>
            
            
            <Link to="https://www.google.co.jp/maps?f=q&source=embed&hl=ja&geocode=&q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E6%A0%B9%E5%B2%B8%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%94&aq=&sll=36.5626,136.362305&sspn=63.246385,135.263672&brcurrent=3,0x60188e8452f0f7c3:0xf8dc853cab0bb46c,0,0x60188e845391cbbb:0xa86295f4b65cfd49&ie=UTF8&hq=&hnear=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E6%A0%B9%E5%B2%B8%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%94&ll=35.722048,139.780434&spn=0.008022,0.016512&t=m&z=14"><GatsbyImage image={data.usagi_map.childImageSharp.gatsbyImageData} alt="" /></Link>
            
            <p>※クリックでGoogleマップが表示されます</p>
            
            <ul>
              <li><span>〒110-0003 東京都台東区根岸3-5-4根岸ビル1階</span></li>
              <li><span>鶯谷駅から徒歩５分</span></li>
              <li><span>入谷駅から徒歩７分</span></li>
            </ul>

            <div className="access_box">            

            <h3 className="subtitle">鶯谷駅からのアクセス</h3>
            
            <p>鶯谷駅南口からの道のりのポイントを写真で紹介しています。下記の写真に触るとスライドしていきます。</p>
            
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            autoHeight
            >
              <SwiperSlide>
                <GatsbyImage image={data.ugu01.childImageSharp.gatsbyImageData} alt="鶯谷駅の南口改札を出ます" />
                <p>1.鶯谷駅の南口改札を出ます</p>
              </SwiperSlide>
              
              <SwiperSlide>
                <GatsbyImage image={data.ugu02.childImageSharp.gatsbyImageData} alt="左手の坂を下ります" />
                <p>2.左手の坂を下ります</p>
              </SwiperSlide>
              
              <SwiperSlide>
                <GatsbyImage image={data.ugu03.childImageSharp.gatsbyImageData} alt="ホテルシャーウッド側の坂を下ります" />
                <p>3.ホテルシャーウッド側の坂を下ります</p>
              </SwiperSlide>
              
              <SwiperSlide>
                <GatsbyImage image={data.ugu04.childImageSharp.gatsbyImageData} alt="坂を下ったところの横断歩道を渡ります" />
                <p>4.坂を下ったところの横断歩道を渡ります</p>
              </SwiperSlide>
              
              <SwiperSlide>
                <GatsbyImage image={data.ugu05.childImageSharp.gatsbyImageData} alt="横断歩道を渡り終えたら、左に曲がります" />
                <p>5.横断歩道を渡り終えたら、左に曲がります</p>
              </SwiperSlide>
              
              <SwiperSlide>
                <GatsbyImage image={data.ugu06.childImageSharp.gatsbyImageData} alt="左手側に東横インが見えます。そのまま30メートル程直進してください" />
                <p>6.左手側に東横インが見えます。そのまま30メートル程直進してください</p>
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={data.ugu07.childImageSharp.gatsbyImageData} alt="左手にカンデオホテルズ上野さんが見えましたら、右に曲がります" />
                <p>7.左手にカンデオホテルズ上野さんが見えましたら、右に曲がります</p>
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={data.ugu08.childImageSharp.gatsbyImageData} alt="この道を曲がり10メートルで当店の入り口です" />
                <p>8.この道を曲がり10メートルで当店の入り口です</p>
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={data.ugu09.childImageSharp.gatsbyImageData} alt="右手の角にある茶色いお店になります" />
                <p>9.右手の角にある茶色いお店になります</p>
              </SwiperSlide>
            
            </Swiper>
            
            <h3 className="subtitle">入谷駅からのアクセス</h3>
            <p>入谷駅２番出口からの道のりのポイントを写真で紹介しています。下記の写真を触るとスライドしていきます。</p>

            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <GatsbyImage image={data.iri01.childImageSharp.gatsbyImageData} alt="入谷駅２番出口を出ます" />
                <p>1.入谷駅２番出口を出ます</p>
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={data.iri02.childImageSharp.gatsbyImageData} alt="右手に銀だこさん、みずほ銀行のある道を進みます" />
                <p>2.右手に銀だこさん、みずほ銀行のある道を進みます</p>
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={data.iri03.childImageSharp.gatsbyImageData} alt="根岸一丁目交差点をそのまま真っ直ぐ進みます" />
                <p>3.根岸一丁目交差点をそのまま真っ直ぐ進みます</p>
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={data.iri04.childImageSharp.gatsbyImageData} alt="そのまま道なりに進みます" />
                <p>4.そのまま道なりに進みます</p>
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={data.iri05.childImageSharp.gatsbyImageData} alt="左手側に東横インが見えます。そのまま30メートル程直進してください" />
                <p>5.左手側に東横インが見えます。そのまま30メートル程直進してください</p>
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={data.iri06.childImageSharp.gatsbyImageData} alt="左手にカンデオホテルズ上野さんが見えましたら、右に曲がります" />
                <p>6.左手にカンデオホテルズ上野さんが見えましたら、右に曲がります</p>
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={data.iri07.childImageSharp.gatsbyImageData} alt="この道を曲がり10メートルで当店の入り口です" />
                <p>7.この道を曲がり10メートルで当店の入り口です</p>
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={data.iri08.childImageSharp.gatsbyImageData} alt="右手の角にある茶色いお店になります" />
                <p>8.右手の角にある茶色いお店になります</p>
              </SwiperSlide>
            </Swiper>
            
            </div>
        

        </div>

        <Sidebar />

      </div>
    </Layout>
    </>
  )
}

export default index

export const query = graphql`
query {  
  h_bn: file(relativePath: {eq: "h_banner.png"}) {
    childImageSharp {
      gatsbyImageData(width: 970, layout: CONSTRAINED)
    }
  }
  title01: file(relativePath: {eq: "title_pic01.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 700, layout: CONSTRAINED)
    }
  }
  title02: file(relativePath: {eq: "title_pic02.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  title03: file(relativePath: {eq: "title_pic03.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  title04: file(relativePath: {eq: "title_pic04.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  cafebtn: file(relativePath: {eq: "cafe_contact_btn.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  hotelbtn: file(relativePath: {eq: "hotel_contact_btn.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  telbtn: file(relativePath: {eq: "tel_btn.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  talentbn: file(relativePath: {eq: "talent_bn.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  fre_bn: file(relativePath: {eq: "fre_bn.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 617, layout: CONSTRAINED)
    }
  }
  hotel_bn: file(relativePath: {eq: "hotel_bn.png"}) {
    childImageSharp {
      gatsbyImageData(width: 617, layout: CONSTRAINED)
    }
  }
  usagi_map: file(relativePath: {eq: "usagi_map.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  access_pic01: file(relativePath: {eq: "access_pic01.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  access_pic02: file(relativePath: {eq: "access_pic02.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  products_bn: file(relativePath: {eq: "products_header.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  ugu01: file(relativePath: {eq: "ugu-01.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  ugu02: file(relativePath: {eq: "ugu-02.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  ugu03: file(relativePath: {eq: "ugu-03.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  ugu04: file(relativePath: {eq: "ugu-04.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  ugu05: file(relativePath: {eq: "ugu-05.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  ugu06: file(relativePath: {eq: "ugu-06.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  ugu07: file(relativePath: {eq: "ugu-07.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  ugu08: file(relativePath: {eq: "ugu-08.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  ugu09: file(relativePath: {eq: "ugu-09.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }

  iri01: file(relativePath: {eq: "iri-01.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  iri02: file(relativePath: {eq: "iri-02.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  iri03: file(relativePath: {eq: "iri-03.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  iri04: file(relativePath: {eq: "iri-04.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  iri05: file(relativePath: {eq: "iri-05.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  iri06: file(relativePath: {eq: "iri-06.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  iri07: file(relativePath: {eq: "iri-07.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  iri08: file(relativePath: {eq: "iri-08.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  


}
`