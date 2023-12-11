import React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "@fortawesome/fontawesome-svg-core/styles.css"

const Header = () => {
  return (
    <>
      <header>
        <div id="header">
          <div id="header-inner">
            <h1 className="pc">うさぎカフェ、ペットホテルなら【うさぎさん】</h1>
            <div className="h_logo_box">
              <div className="h_logo">
                <Link to="/">
                  <StaticImage src="../images/common/logo.png" width={439} height={107} alt="うさぎカフェ、ペットホテルなら【うさぎさん】" />
                </Link>
              </div>
              <div className="pc">
                <Link to="/toiawase/">
                  <StaticImage src="../images/common/header_img.png" alt="" width={463} height={108} />
                </Link>
              </div>
            </div>
            <div className="smp">
              <input type="checkbox" id="overlay-input" />
              <label htmlFor="overlay-input" id="overlay-button">
                <span></span>
              </label>

              <div id="overlay">
                <div>
                  <ul className="gnav__menu">
                    <li className="gnav__menu__item">
                      <Link to="/">トップページ</Link>
                    </li>
                    <li className="gnav__menu__item">
                      <Link to="/products/">販売ベビー</Link>
                    </li>
                    <li className="gnav__menu__item">
                      <Link to="/hotel/">ペットホテル</Link>
                    </li>
                    <li className="gnav__menu__item">
                      <Link to="/price/">料金システム</Link>
                    </li>
                    <li className="gnav__menu__item">
                      <Link to="/shop/">SHOP INFOMATION</Link>
                    </li>
                    <li className="gnav__menu__item">
                      <Link to="/toiawase/">お問い合わせ</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
