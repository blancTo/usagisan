import React from 'react'

import { Link,graphql } from "gatsby"
import { Timeline } from 'react-twitter-widgets';
import { StaticImage } from "gatsby-plugin-image"

const Sidebar = () => {
  return (
    <>
      <div className="sub-cont">
      <p><Link to="https://www.george-no1.site/"><StaticImage src="../../images/talent_bn.png" width={250} height={84} alt="動物タレント事務所" /></Link></p>
      <p><Link to="/usagicafe/"><StaticImage src="../../images/cafe/cafe_bn.png" width={250} height={83} alt="うさぎカフェ" /></Link></p>
      <p><Link to="/contact/"><StaticImage src="../../images/sider_img01.jpg" width={250} height={212} alt="うさぎカフェ" /></Link></p>
      <div id="sider_nav">
        <Link to="/"><StaticImage src="../../images/common/sider_nav01.jpg" width={199} height={36} alt="トップページ" /></Link>
        <Link to="/products/"><StaticImage src="../../images/common/sider_nav02.jpg" width={199} height={36} alt="販売ベビー" /></Link>
        <Link to="/hotel/"><StaticImage src="../../images/common/sider_nav07.jpg" width={199} height={36} alt="ペットホテル" /></Link>
        <Link to="/price/"><StaticImage src="../../images/common/sider_nav03.jpg" width={199} height={36} alt="料金システム" /></Link>
        <Link to="/shop/"><StaticImage src="../../images/common/sider_nav04.jpg" width={199} height={36} alt="SHOP INFOMATIO" /></Link>
        <Link to="/contact_page.html"><StaticImage src="../../images/common/sider_nav05.jpg" width={199} height={36} alt="お問い合わせ" /></Link>
        <Link to="/hotel/"><StaticImage src="../../images/common/sider_nav06.jpg" width={199} height={50} alt="ホテルページ" /></Link>
      </div>
      <p><Link to="/chi/"><StaticImage src="../../images/chi/chi_bt.png" width={250} height={70} alt="「チンチラはこちら」販売ベビーと飼育の仕方" /></Link></p>
      <p><Link to="/chi2/"><StaticImage src="../../images/chi/usa_bt.png" width={250} height={70} alt="「うさぎはこちら」販売ベビーと飼育の仕方" /></Link></p>
      <p><Link to="/voice/"><StaticImage src="../../images/voice_bn.gif" width={250} height={83} alt="お客様の声はこちら" /></Link></p>
      <p><Link to="http://www.tokiwa-r.co.jp/chintaikanriblog/1151/" target="_blank"><StaticImage src="../../images/side_bn01.jpg" width={250} height={220} alt="始発駅1分の立地にうさぎとの共生空間を提供" /></Link></p>
      <div className="gmap">
        <iframe width="250" height="250" title="アクセスマップ" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.co.jp/maps?f=q&amp;source=s_q&amp;hl=ja&amp;geocode=&amp;q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E6%A0%B9%E5%B2%B8%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%94&amp;aq=&amp;sll=36.5626,136.362305&amp;sspn=63.246385,135.263672&amp;brcurrent=3,0x60188e8452f0f7c3:0xf8dc853cab0bb46c,0,0x60188e845391cbbb:0xa86295f4b65cfd49&amp;ie=UTF8&amp;hq=&amp;hnear=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E6%A0%B9%E5%B2%B8%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%94&amp;ll=35.722048,139.780434&amp;spn=0.008022,0.016512&amp;t=m&amp;z=14&amp;output=embed"></iframe>
      </div>
      <p className="center"><Link to="https://www.facebook.com/pettohoteru.usagisan" target="blank"><StaticImage src="../../images/facebook.jpg" width={240} height={56} alt="facebook" /></Link></p>
      <p className="center"><Link to="http://twitter.com/7463Ican" target="blank"><StaticImage src="../../images/twitter.jpg" width={240} height={56} alt="twitter" /></Link></p>
      <p className="center"><Link to="https://plus.google.com/+%E3%81%86%E3%81%95%E3%81%8E%E4%B8%80%E7%95%AA" target="blank"><StaticImage src="../../images/google.png" width={240} height={56} alt="google+" /></Link></p>
      <div className='tw_box'>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: '7463Ican' // アカウント名
          }}
          options={{
            height: '800'
          }}
        />
        
        </div>
    </div>
    </>
  )
}

export default Sidebar

export const query = graphql`
query {  
  talentbn: file(relativePath: {eq: "talent_bn.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`