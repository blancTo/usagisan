import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const Footer = () => {
  return (
    <>
      <footer>
        <div id="footer">
          <div id="footer-inner">
            <div className="foot_l">
              <StaticImage src="../images/footer_logo.png" width={338} height={28} alt="うさぎペットホテル・うさぎカフェ【うさぎさん】" />
            </div>
            <div className="foot_r">
              <ul>
                <li>
                  <Link to="/">トップページ</Link>
                </li>
                <li>
                  <Link to="/price/">料金システム（ペットホテル＆カフェ）</Link>
                </li>
                <li>
                  <Link to="/products/">販売ベビー</Link>
                </li>
                <li>
                  <Link to="/hotel/">ペットホテル</Link>
                </li>
                <li>
                  <Link to="/shop/">SHOP INFOMATION</Link>
                </li>
                <li>
                  <Link to="/contact_page/">問い合わせ予約フォーム</Link>
                </li>
                <li>
                  <Link to="/rabbit_rearing/">うさぎの飼育</Link>
                </li>
                <li>
                  <Link to="/rabbit_breeding/">うさぎの飼育　グルーミング</Link>
                </li>
                <li>
                  <Link to="/rabbit_vegetable/">うさぎの飼育　生野菜の給餌について</Link>
                </li>
                <li>
                  <Link to="/chinchilla_rearing/">チンチラの飼育について</Link>
                </li>
                <li>
                  <Link to="/chinchilla_importance/">チンチラのご宿泊について重要視していること</Link>
                </li>
                <li>
                  <Link to="/herbivore_meal/">草食動物にとって本当に必要な食事と体の関係</Link>
                </li>
              </ul>
            </div>
            <address>Copyright &copy; 2022 うさぎペットホテル・うさぎカフェ【うさぎさん】</address>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
