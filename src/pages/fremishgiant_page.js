import React, { useState } from "react"
import Seo from "../components/Seo"
import LayoutNew from "../components/LayoutNew"

const FremishgiantPage = () => {
  const imageName = "fre_header"
  const [selectedPrefecture, setSelectedPrefecture] = useState("")
  const prefectures = ["北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県", "栃木県", "群馬県", "茨城県", "埼玉県", "東京都", "千葉県", "神奈川県", "山梨県", "長野県", "新潟県", "富山県", "石川県", "福井県", "静岡県", "岐阜県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "徳島県", "香川県", "愛媛県", "高知県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "福岡県", "佐賀県", "長崎県", "大分県", "熊本県", "宮崎県", "鹿児島県", "沖縄県"]
  return (
    <>
      <LayoutNew imageName={imageName}>
        <h3 class="form_maintitle"> フレミッシュジャイアント・チェッカードジャイアントの子供販売</h3>

        <p>フレミッシュジャイアント・チェッカードジャイアントの子供販売ページです。 今年生まれの子供のご予約を受け付けておりますので、 ページ下のお問い合せフォームよりお気軽にお問合せください。</p>

        <p>下の画像はフレミッシュジャイアント・チェッカードジャイアントの子供のイメージ写真です。</p>

        <div className="fre_img">
          <div className="fre_img_inner">
            <div className="fre_img_frame">
              <img src="/images/fre_img1.jpg" alt="" />
            </div>
          </div>
          <div className="fre_img_inner">
            <div className="fre_img_frame">
              <img src="/images/fre_img2.jpg" alt="" />
            </div>
          </div>
          <div className="fre_img_inner">
            <div className="fre_img_frame">
              <img src="/images/fre_img4.jpg" alt="" />
            </div>
          </div>
          <div className="fre_img_inner">
            <div className="fre_img_frame">
              <img src="/images/fre_img5.jpg" alt="" />
            </div>
          </div>
          <div className="fre_img_inner">
            <div className="fre_img_frame">
              <img src="/images/fre_img6.jpg" alt="" />
            </div>
          </div>
        </div>

        <form action="https://ssgform.com/s/z4nunsrX4lzl" method="post" id="mailform">
          <div style={{ display: "none" }}>
            <input type="text" name="wana" />
          </div>
          <table className="form">
            <tbody>
              <tr>
                <th>ご注意ください。</th>
                <td>
                  <span className="red">*</span>ドメイン受信設定のお願い
                  <br />
                  【info@usagisan.info】をドメイン受信設定して頂きますよう宜しくお願い申し上げます。
                  <br />
                  お問い合わせ後、1分以内にリターンメールが届かない場合はお手数ですが08043837060まで連絡を頂きたい所存です。
                </td>
              </tr>
            </tbody>
          </table>
          <table className="form">
            <tbody>
              <tr>
                <th>
                  <span className="red">*</span>お名前
                </th>
                <td>
                  <input type="text" name="お名前" size={40} required="required" />
                </td>
              </tr>
              <tr>
                <th>ご住所</th>
                <td>
                  <label>
                    郵便番号:
                    <input type="text" name="郵便番号" />
                  </label>
                  <br />
                  <label>
                    都道府県:
                    <select id="prefecture" name="都道府県" value={selectedPrefecture} onChange={e => setSelectedPrefecture(e.target.value)}>
                      <option value="" disabled>
                        選択してください
                      </option>
                      {prefectures.map(prefecture => (
                        <option key={prefecture} value={prefecture}>
                          {prefecture}
                        </option>
                      ))}
                    </select>
                  </label>
                  <br />
                  <label>
                    市区町村:
                    <input type="text" name="市区町村" />
                  </label>
                  <br />
                  <label>
                    丁目番地:
                    <input type="text" name="丁目番地" />
                  </label>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="red">*</span>携帯メールアドレス
                </th>
                <td>
                  <input type="email" data-type="email" name="email" size={40} required="required" />
                </td>
              </tr>
              <tr>
                <th>
                  <span className="red">*</span>メールアドレス 確認入力
                </th>
                <td>
                  <input type="email" data-type="email" name="confirm_email" size={40} required="required" />
                </td>
              </tr>
              <tr>
                <th>
                  <span className="red">*</span>携帯番号
                </th>
                <td>
                  <input type="tel" data-type="tel" name="携帯番号" size={16} data-min={9} required="required" />
                  (『-』(ハイフン)なしで数字のみご入力ください)
                </td>
              </tr>
              <tr>
                <th>緊急連絡先</th>
                <td>
                  <input type="tel" data-type="tel" name="緊急連絡先" size={16} data-min={9} />
                  (『-』(ハイフン)なしで数字のみご入力ください)
                </td>
              </tr>
              <tr>
                <th>種類</th>
                <td>
                  <label>
                    <input type="radio" name="種類" value="フレミッシュジャイアント" /> フレミッシュジャイアント
                  </label>
                  <br />
                  <label>
                    <input type="radio" name="種類" value="チェッカードジャイアント" /> チェッカードジャイアント
                  </label>
                </td>
              </tr>
              <tr>
                <th>性別</th>
                <td>
                  <label>
                    <input type="radio" name="性別" value="オス" /> オス
                  </label>
                  <label>
                    <input type="radio" name="性別" value="メス" /> メス
                  </label>
                </td>
              </tr>
              <tr>
                <th>ご要望</th>
                <td>
                  <textarea name="ご要望" rows={10} cols={60} defaultValue={""} />
                </td>
              </tr>
            </tbody>
          </table>

          <p className="center">
            <button type="submit" className="form_bt">
              送信する
            </button>
            　
            <button type="reset" className="form_bt">
              リセット
            </button>
          </p>
        </form>
      </LayoutNew>
    </>
  )
}
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://usagisan.info/hotel_thanks/#breadcrumblist",
      itemListElement: [
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/#listItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】",
            description: "うさぎのペットホテル＆うさぎカフェは、JR山手線鶯谷駅から徒歩5分の場所にあります。愛されるうさぎさんたちの安心・安全・快適な宿泊環境を提供しています。併設のうさぎカフェでは、愛らしいうさぎさんたちと触れ合いながら、お茶やスイーツを楽しむことができます。",
            url: "https://usagisan.info/",
          },
          nextItem: "https://usagisan.info/hotel_thanks/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/hotel_thanks/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/hotel_thanks/",
            name: "フレミッシュジャイアント・チェッカードジャイアントの子供販売｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
            description: "フレミッシュジャイアント・チェッカードジャイアントの子供販売。うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。｜ペットホテル",
            url: "https://usagisan.info/hotel_thanks/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/hotel_thanks/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/hotel_thanks/#webpage",
      url: "https://usagisan.info/hotel_thanks/",
      name: "フレミッシュジャイアント・チェッカードジャイアントの子供販売｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description: "フレミッシュジャイアント・チェッカードジャイアントの子供販売。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/hotel_thanks/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/hotel_thanks/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/hotel_thanks/#website",
      url: "https://usagisan.info/hotel_thanks/",
      name: "フレミッシュジャイアント・チェッカードジャイアントの子供販売｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description: "フレミッシュジャイアント・チェッカードジャイアントの子供販売。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/hotel_thanks/#person",
      },
    },
  ],
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo article={true} />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export default FremishgiantPage
