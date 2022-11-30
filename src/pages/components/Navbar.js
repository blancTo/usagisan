import React from 'react'
 
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav pc">
          <ul>
            <li><Link to="/"><StaticImage src="../../images/common/gnav_01.jpg" alt="トップページ" /></Link></li>
            <li><Link to="/products/"><StaticImage src="../../images/common/gnav_02.jpg" alt="販売ベビー" /></Link></li>
            <li><Link to="/hotel/"><StaticImage src="../../images/common/gnav_03.jpg" alt="ペットホテル" /></Link></li>
            <li><Link to="/price/"><StaticImage src="../../images/common/gnav_04.jpg" alt="料金システム" /></Link></li>
            <li><Link to="/shop/"><StaticImage src="../../images/common/gnav_05.jpg" alt="SHOP INFOMATION" /></Link></li>
            <li><Link to="/contact_page.html"><StaticImage src="../../images/common/gnav_06.jpg" alt="お問い合わせ" /></Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
 
export default Navbar
 