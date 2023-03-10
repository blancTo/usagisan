import React from 'react'

import { StaticImage } from "gatsby-plugin-image"
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQ,faA } from "@fortawesome/free-solid-svg-icons"

const index = ({ data }) => {
  return (
    <>

      <Seo />

      <Layout>

      <div id="mainimage">
        <div id="mainimage-inner">
          <StaticImage src="../images/h_banner.png" alt="" />
        </div>
      </div>
      
      <Navbar />
      
      <div id="main-content" className="flex-wrap">
          <div className="main-cont">
            
            <div className="smp center">
              <p><Link to="/contact_hotel.html"><StaticImage src="../images/hotel_contact_btn.png" alt="ペットホテルのお問い合わせ・ご予約はこちらから" /></Link></p>
              <p><Link to="/contact_cafe.html"><StaticImage src="../images/cafe_contact_btn.png" alt="うさぎカフェ問い合わせ・ご予約はこちらから" /></Link></p>
              <p><Link to="tel:08043837060"><StaticImage src="../images/tel_btn.png" alt="お見積などのお問い合わせは携帯電話まで" /></Link></p>
            </div>

            <h3><StaticImage src="../images/title_pic01.jpg" alt="ペットショップうさぎさん" /></h3>
            
            <p>純血種うさぎさんとチンチラを販売しております。<br />
            当店のウサギさんは全て海外産まれです。<br />
            フレミッシュジャイアント・チェッカードジャイアント・スタンダードレッキス・ミニレッキス・ラインランダー・ホーランドロップ・ネザーランドドワーフ・ヒマラヤの可愛いうさぎさんを販売。</p>
            
            <p className="center"><Link to="/fremishgiant_page.html"><StaticImage src="../images/fre_bn.jpg" alt="フレッシュジャイアントの販売はこちら" /></Link></p>
            
            <h3><StaticImage src="../images/title_pic02.jpg" alt="完全予約制・小動物専門ホテル" /></h3>
            
            <ul>
              <li><span>ペットホテルうさぎさんは、JR山手線、鶯谷駅南口から徒歩5分、日比谷線、入谷駅から徒歩7分の場所に ある完全予約制のペットホテルです。</span></li>
              <li><span>当店は一羽一羽のウサギさんが心地よく、ゆっくりと自宅に居るときのように安心して過ごせるよう、室内の環境に配慮している為、完全予約制とさせて頂いております。</span></li>
              <li><span>ウサギさんが快適に過ごせるようお預かりしたウサギさんはすべて大型ケージでお預かりさせていただきます。またハリネズミ(ピグミーヘッジホッグ)・チンチラ・デグー・モルモット・ハムスター・ジリスは専用ケージでお預かりします。</span></li>
              <li><span>大切にお預かりいたしますので、飼い主様はもちろん、ホテルが初めてという、ウサギさんも安心してご利用いただけます。</span></li>
              <li><span>健康状態の良いウサギさんのみお預かりさせていただきます。(チェックイン時、必ず排便を持参してください)</span></li>
              <li><span>ペットホテルご利用時、ウサギさんの爪切り、グルーミングはサービスで行っております。ご希望の際はお申し付けください。</span></li>
              <li><span>小動物であれば基本お預かりさせていただきます。(うさぎ・チンチラ・デグー・ハムスター・ジリス・モルモット・ハリネズミ)</span></li>
              <li><span>キャリーバックは無料でお預かりさせていただきます。不潔な場合は、清掃費(1,100円)頂戴します。</span></li>
            </ul>
            
            <h3 className="sub_title">Q&amp;Aよくあるご質問</h3>

            <div className="top_faq_box">

              <input id="acd-check1" class="acd-check" type="checkbox" />
              <label class="acd-label" for="acd-check1"><FontAwesomeIcon icon={faQ} />ご飯の指定は可能ですか？</label>
              <div class="acd-content">
                <FontAwesomeIcon icon={faA} />
                <p>指定のご飯（牧草・ペレット）がある場合はご持参してください。</p>
              </div>
              <input id="acd-check2" class="acd-check" type="checkbox" />
              <label class="acd-label" for="acd-check2"><FontAwesomeIcon icon={faQ} />当日の予約は可能ですか？</label>
              <div class="acd-content">
                <FontAwesomeIcon icon={faA} />
                <p>基本的に可能です。予約状況によりお断りさせていただく場合がございます。</p>
              </div>
              <input id="acd-check3" class="acd-check" type="checkbox" />
              <label class="acd-label" for="acd-check3"><FontAwesomeIcon icon={faQ} />ケージの持ち込みは可能ですか？</label>
              <div class="acd-content">
                <FontAwesomeIcon icon={faA} />
                <p>ケージの持ち込みはご遠慮ください。</p>
              </div>
              <input id="acd-check4" class="acd-check" type="checkbox" />
              <label class="acd-label" for="acd-check4"><FontAwesomeIcon icon={faQ} />宿泊延長は可能ですか？</label>
              <div class="acd-content">
                <FontAwesomeIcon icon={faA} />
                <p>満室でなければ可能です。※延長料金はお引き取りの際にご請求させていただきます。</p>
              </div>
              <input id="acd-check5" class="acd-check" type="checkbox" />
              <label class="acd-label" for="acd-check5"><FontAwesomeIcon icon={faQ} />クレジットカード決済は可能ですか？</label>
              <div class="acd-content">
                <FontAwesomeIcon icon={faA} />
                <p>現金のみとさせていただきます。</p>
              </div>
              <input id="acd-check6" class="acd-check" type="checkbox" />
              <label class="acd-label" for="acd-check6"><FontAwesomeIcon icon={faQ} />キャンセル料はかかりますか？</label>
              <div class="acd-content">
                <FontAwesomeIcon icon={faA} />
                <p>お問い合わせのメールを送信された直後から発生します。ご宿泊費を知りたい場合はお電話ください。<br />
                24日前から3日前50%、前日・当日100%頂戴しております。<br />
                キャンセル料は通常料金2,200円×宿泊予定日分で請求させていただきます。<br />
                お客様から頂戴したキャンセル料は公益財団法人日本ユニセフ協会・WWF ジャパン・公益社団法人日本動物福祉協会・国際NGOワールド ・ビジョン・ジャパン・公益財団法人プラン・ジャパンへ寄付させていただきます。</p>
              </div>

            </div>

            <p className="center"><Link to="/hotel/"><StaticImage src="../images/hotel_bn.png" alt="ペットホテル" /></Link></p>
            
            <p className="center"><Link to="mailto:info@usagisan.info" className="contact_btn">お問い合わせ・ご予約希望の方は</Link><br className="smp" />info@usagisan.info</p>
            <p className="center"><Link to="tel:080-4383-7060" className="contact_btn">お電話でのお問い合わせはこちら</Link><br className="smp" />080-4383-7060</p>
            
            <h3><StaticImage src="../images/title_pic03.jpg" alt="完全予約制うさぎカフェ" /></h3>
            
            <ul>
              <li><span>毎週土曜日、日曜日12時ー20時、完全予約制で<Link to="/usagicafe/">うさぎカフェ</Link>、チンチラカフェ、アルマジロカフェを営業しております</span></li>
              <li><span>フレミッシュジャイアント・チェッカードジャイアント・スタンダードレッキス・ミニレッキス・ネザーランドドワーフ・ホーランドロップ・ラインランダー・ヒマラヤン・もふもふのチンチラさん珍獣アルマジロが皆様をお待ちしております。</span></li>
              <li><span>見学希望のお客様はご来店前に必ず連絡をください。</span></li>
            </ul>
            
            <p className="center"><Link to="mailto:info@usagisan.info" className="contact_btn">お問い合わせ・ご予約希望の方は</Link><br className="smp" />info@usagisan.info</p>
            <p className="center"><Link to="tel:080-4383-7060" className="contact_btn">お電話でのお問い合わせはこちら</Link><br className="smp" />080-4383-7060</p>
            
            <h3><StaticImage src="../images/title_pic04.jpg" alt="アクセスマップ" /></h3>
            
            
            <Link to="https://www.google.co.jp/maps?f=q&source=embed&hl=ja&geocode=&q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E6%A0%B9%E5%B2%B8%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%94&aq=&sll=36.5626,136.362305&sspn=63.246385,135.263672&brcurrent=3,0x60188e8452f0f7c3:0xf8dc853cab0bb46c,0,0x60188e845391cbbb:0xa86295f4b65cfd49&ie=UTF8&hq=&hnear=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E6%A0%B9%E5%B2%B8%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%94&ll=35.722048,139.780434&spn=0.008022,0.016512&t=m&z=14">
              <StaticImage src="../images/usagi_map.jpg" alt="" />
            </Link>
            
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
                <StaticImage src="../images/ugu-01.jpg" alt="鶯谷駅の南口改札を出ます" />
                <p>1.鶯谷駅の南口改札を出ます</p>
              </SwiperSlide>
              
              <SwiperSlide>
                <StaticImage src="../images/ugu-02.jpg" alt="左手の坂を下ります" />
                <p>2.左手の坂を下ります</p>
              </SwiperSlide>
              
              <SwiperSlide>
                <StaticImage src="../images/ugu-03.jpg" alt="ホテルシャーウッド側の坂を下ります" />
                <p>3.ホテルシャーウッド側の坂を下ります</p>
              </SwiperSlide>
              
              <SwiperSlide>
                <StaticImage src="../images/ugu-04.jpg" alt="坂を下ったところの横断歩道を渡ります" />
                <p>4.坂を下ったところの横断歩道を渡ります</p>
              </SwiperSlide>
              
              <SwiperSlide>
                <StaticImage src="../images/ugu-05.jpg" alt="横断歩道を渡り終えたら、左に曲がります" />
                <p>5.横断歩道を渡り終えたら、左に曲がります</p>
              </SwiperSlide>
              
              <SwiperSlide>
                <StaticImage src="../images/ugu-06.jpg" alt="左手側に東横インが見えます。そのまま30メートル程直進してください" />
                <p>6.左手側に東横インが見えます。そのまま30メートル程直進してください</p>
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../images/ugu-07.jpg" alt="左手にカンデオホテルズ上野さんが見えましたら、右に曲がります" />
                <p>7.左手にカンデオホテルズ上野さんが見えましたら、右に曲がります</p>
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../images/ugu-08.jpg" alt="この道を曲がり10メートルで当店の入り口です" />
                <p>8.この道を曲がり10メートルで当店の入り口です</p>
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../images/ugu-09.jpg" alt="右手の角にある茶色いお店になります" />
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
                <StaticImage src="../images/iri-01.jpg" alt="入谷駅２番出口を出ます" />
                <p>1.入谷駅２番出口を出ます</p>
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../images/iri-02.jpg" alt="右手に銀だこさん、みずほ銀行のある道を進みます" />
                <p>2.右手に銀だこさん、みずほ銀行のある道を進みます</p>
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../images/iri-03.jpg" alt="根岸一丁目交差点をそのまま真っ直ぐ進みます" />
                <p>3.根岸一丁目交差点をそのまま真っ直ぐ進みます</p>
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../images/iri-04.jpg" alt="そのまま道なりに進みます" />
                <p>4.そのまま道なりに進みます</p>
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../images/iri-05.jpg" alt="左手側に東横インが見えます。そのまま30メートル程直進してください" />
                <p>5.左手側に東横インが見えます。そのまま30メートル程直進してください</p>
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../images/iri-06.jpg" alt="左手にカンデオホテルズ上野さんが見えましたら、右に曲がります" />
                <p>6.左手にカンデオホテルズ上野さんが見えましたら、右に曲がります</p>
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../images/iri-07.jpg" alt="この道を曲がり10メートルで当店の入り口です" />
                <p>7.この道を曲がり10メートルで当店の入り口です</p>
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../images/iri-08.jpg" alt="右手の角にある茶色いお店になります" />
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

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://usagisan.info/#breadcrumblist",
      "itemListElement":[
        {
          "@type":"ListItem",
          "@id":"https://usagisan.info/#listItem",
          "position":1,
          "item":{
            "@type":"WebPage",
            "@id":"https://usagisan.info/",
            "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】",
            "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
            "url":"https://usagisan.info/"
          },
          "nextItem":"https://usagisan.info/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://usagisan.info/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://usagisan.info/#webpage",
      "url":"https://usagisan.info/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://usagisan.info/#website"
      },
      "breadcrumb":{
        "@id":"https://usagisan.info/#breadcrumblist"
      },
      "datePublished":"2022-09-21T22:55:53+09:00",
      "dateModified":"2023-01-17T3:00:07+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://usagisan.info/#website",
      "url":"https://usagisan.info/",
      "name":"うさぎペットホテル・うさぎカフェ【うさぎさん】",
      "description":"うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://usagisan.info/#person"
      }
    }
  ]
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ご飯の指定は可能ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "指定のご飯（牧草・ペレット）がある場合はご持参してください。"
      }
    },
    {
      "@type": "Question",
      "name": "当日の予約は可能ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "基本的に可能です。予約状況によりお断りさせていただく場合がございます。"
      }
    },
    {
      "@type": "Question",
      "name": "ケージの持ち込みは可能ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ケージの持ち込みはご遠慮ください。"
      }
    },
    {
      "@type": "Question",
      "name": "宿泊延長は可能ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "満室でなければ可能です。※延長料金はお引き取りの際にご請求させていただきます。"
      }
    },
    { 
      "@type": "Question",
      "name": "クレジットカード決済は可能ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "現金のみとさせていただきます。"
      }
    },
    { 
      "@type": "Question",
      "name": "キャンセル料はかかりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "お問い合わせのメールを送信された直後から発生します。ご宿泊費を知りたい場合はお電話ください。24日前から3日前50%、前日・当日100%頂戴しております。キャンセル料は通常料金2,200円×宿泊予定日分で請求させていただきます。お客様から頂戴したキャンセル料は公益財団法人日本ユニセフ協会・WWF ジャパン・公益社団法人日本動物福祉協会・国際NGOワールド ・ビジョン・ジャパン・公益財団法人プラン・ジャパンへ寄付させていただきます。"
      }
    }
  ]
}

export const Head = () => (
  <>
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
  </>
)

export default index

