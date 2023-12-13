import React, { useState } from "react"
import Seo from "../components/Seo"
import LayoutNew from "../components/LayoutNew"

const CafeToiawase = () => {
  const imageName = "toiawase_img"
  const [selectedPrefecture, setSelectedPrefecture] = useState("")
  const prefectures = ["北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県", "栃木県", "群馬県", "茨城県", "埼玉県", "東京都", "千葉県", "神奈川県", "山梨県", "長野県", "新潟県", "富山県", "石川県", "福井県", "静岡県", "岐阜県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "徳島県", "香川県", "愛媛県", "高知県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "福岡県", "佐賀県", "長崎県", "大分県", "熊本県", "宮崎県", "鹿児島県", "沖縄県"]
  return (
    <>
      <LayoutNew imageName={imageName}>
        <h3 class="form_maintitle">うさぎカフェ予約フォーム</h3>
        <form action="https://ssgform.com/s/D7O17qcV0Z4O" method="post" id="mailform">
          <div style={{ display: "none" }}>
            <input type="text" name="wana" />
          </div>
          <table className="form">
            <tbody>
              <tr>
                <th>ご注意ください。</th>
                <td>
                  <span className="red">*年末年始のご予約承ります。</span>
                  <br />
                  <span className="red">*</span>ドメイン受信設定のお願い
                  <br />
                  【info@usagisan.info】をドメイン受信設定して頂きますよう宜しくお願い申し上げます。
                  <br />
                  お問い合わせ後、1分以内にリターンメールが届かない場合はお手数ですが08043837060まで連絡を頂きたい所存です。
                </td>
              </tr>
              <tr>
                <th>うさぎカフェ予約日</th>
                <td>
                  【<span className="red">*</span>うさカフェ・チンチラカフェ・アルマジロ・プレーリードッグカフェご予約可能日情報！！】
                  <br />
                  毎週土曜日13時～20時
                  <br />
                  毎週日曜日13時～20時
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
                <th>ご住所(ペットホテルご利用のお客様は必ずご入力ください。)</th>
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
                </td>
              </tr>
              <tr>
                <th>緊急連絡先</th>
                <td>
                  <input type="tel" data-type="tel" name="緊急連絡先" size={16} data-min={9} />
                </td>
              </tr>
              <tr>
                <th>
                  <span className="red bold">*</span>うさぎカフェ・チンチラカフェ予約日
                </th>
                <td>
                  <select name="予約日(月)">
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  &nbsp;月&nbsp;
                  <select name="予約日(日)">
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  &nbsp;日&nbsp;
                  <select name="予約日(時)">
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                  </select>
                  &nbsp;時
                </td>
              </tr>
              <tr>
                <th>
                  <span className="red">*</span>ご利用人数
                </th>
                <td>
                  <input type="text" name="ご利用人数" size={8} required="required" />
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

          <p className="mtb15">
            ＊ペットホテルご利用のお客様は住所をご入力ください。
            <br />
            ※お迎えの日から1日経ってもご連絡なしにお迎えに来ない場合は、状況に応じて動物愛護法に基づき対処させていただきます。
          </p>
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
      "@id": "https://usagisan.info/hotel/#breadcrumblist",
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
          nextItem: "https://usagisan.info/cafe_toiawase/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/cafe_toiawase/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/cafe_toiawase/",
            name: "うさぎカフェ予約フォーム｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
            description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。｜うさぎカフェ予約フォーム",
            url: "https://usagisan.info/cafe_toiawase/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/cafe_toiawase/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/cafe_toiawase/#webpage",
      url: "https://usagisan.info/cafe_toiawase/",
      name: "うさぎカフェ予約フォーム｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description: "うさぎペットホテル・うさぎカフェ【うさぎさん】のうさぎカフェ予約フォームです。うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/cafe_toiawase/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/cafe_toiawase/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/cafe_toiawase/#website",
      url: "https://usagisan.info/cafe_toiawase/",
      name: "うさぎカフェ予約フォーム｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description: "うさぎペットホテル・うさぎカフェ【うさぎさん】のうさぎカフェ予約フォームです。うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/cafe_toiawase/#person",
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
export default CafeToiawase
