import React, { useState } from "react"

import Seo from "../components/Seo"
import LayoutNew from "../components/LayoutNew"

const ContactPage = () => {
  const imageName = "toiawase_img"
  const [showInput, setShowInput] = useState(false)

  const handleRadioChange = event => {
    setShowInput(event.target.value === "ペットホテル")
  }

  const [selectedPrefecture, setSelectedPrefecture] = useState("")
  const prefectures = ["北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県", "栃木県", "群馬県", "茨城県", "埼玉県", "東京都", "千葉県", "神奈川県", "山梨県", "長野県", "新潟県", "富山県", "石川県", "福井県", "静岡県", "岐阜県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "徳島県", "香川県", "愛媛県", "高知県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "福岡県", "佐賀県", "長崎県", "大分県", "熊本県", "宮崎県", "鹿児島県", "沖縄県"]

  return (
    <>
      <LayoutNew imageName={imageName}>
        <h2>
          <img src="/images/contact_tit.jpg" alt="ペットホテル&カフェお問い合わせフォーム" />
        </h2>
        <form action="https://ssgform.com/s/VkA5NzIT7mYX" method="post" id="mailform">
          <div style={{ display: "none" }}>
            <input type="text" name="wana" />
          </div>
          <table className="form">
            <tbody>
              <tr>
                <th>
                  <span className="red">*</span>ご用件
                </th>
                <td>
                  <label>
                    <input type="radio" name="ご用件" value="うさぎカフェ" onChange={handleRadioChange} required="required" /> うさぎカフェ
                  </label>
                  <label>
                    <input type="radio" name="ご用件" value="ペットホテル" onChange={handleRadioChange} required="required" /> ペットホテル
                  </label>

                  {showInput && (
                    <span id="pet_hotel">
                      <p>
                        <span className="red bold">*</span>
                        <span className="bold">お預かり日</span>
                        <br />
                        <select name="お預かり日(月)">
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
                        <select name="お預かり日(日)">
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
                        <select name="お預かり日(時)">
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
                      </p>

                      <p>
                        <span className="red bold">*</span>
                        <span className="bold">お引き取り日</span>
                        <br />
                        <select name="お引き取り日(月)">
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
                        <select name="お引き取り日(日)">
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
                        <select name="お引き取り日(時)">
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
                        時
                      </p>
                    </span>
                  )}
                </td>
              </tr>
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
                <th>当ホテルのご利用は初めてですか？</th>
                <td>
                  <label>
                    <input type="radio" name="ご利用は初めてですか？" value="はい" /> はい
                  </label>
                  <label>
                    <input type="radio" name="ご利用は初めてですか？" value="いいえ" /> いいえ
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 className="form_title">ご家族の情報</h3>
          <table className="form">
            <tbody>
              <tr>
                <th>お名前</th>
                <td>
                  <input type="text" name="ご家族のお名前" size={45} />
                </td>
              </tr>
              <tr>
                <th>性別・年齢・体重</th>
                <td>
                  <label>
                    <input type="radio" name="ご家族の性別" value="オス" /> オス
                  </label>
                  <label>
                    <input type="radio" name="ご家族の性別" value="メス" /> メス
                  </label>
                  <br />
                  <input type="text" name="ご家族の年齢" size={10} className="w30p" />
                  歳　
                  <input type="text" name="ご家族の体重" size={10} className="w30p" /> kg
                </td>
              </tr>
              <tr>
                <th>種類</th>
                <td>
                  <select name="ご家族の種類">
                    <option value="うさぎ">うさぎ</option>
                    <option value="チンチラ">チンチラ</option>
                    <option value="モルモット">モルモット</option>
                    <option value="ハリネズミ">ハリネズミ</option>
                    <option value="デグー">デグー</option>
                    <option value="ハムスター">ハムスター</option>
                    <option value="ジリス">ジリス</option>
                    <option value="アルマジロ">アルマジロ</option>
                    <option value="オグロプレーリードッグ">オグロプレーリードッグ</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>掛かりつけの病院</th>
                <td>
                  <input type="text" name="ご家族の掛かりつけの病院" size={45} />
                </td>
              </tr>
            </tbody>
          </table>
          <h3 className="form_title">健康状態をお聞かせください。</h3>
          <table className="form">
            <tbody>
              <tr>
                <th>目：涙目、目ヤニは出ていますか？</th>
                <td>
                  <label>
                    <input type="radio" name="目：涙目、目ヤニは出ていますか？" value="はい" /> はい
                  </label>
                  <label>
                    <input type="radio" name="目：涙目、目ヤニは出ていますか？" value="いいえ" /> いいえ
                  </label>
                </td>
              </tr>
              <tr>
                <th>鼻：くしゃみ・鼻水はありますか？</th>
                <td>
                  <label>
                    <input type="radio" name="鼻：くしゃみ・鼻水はありますか？" value="はい" /> はい
                  </label>
                  <label>
                    <input type="radio" name="鼻：くしゃみ・鼻水はありますか？" value="いいえ" /> いいえ
                  </label>
                </td>
              </tr>
              <tr>
                <th>歯：不正咬合の治療中ですか？</th>
                <td>
                  <label>
                    <input type="radio" name="歯：不正咬合の治療中ですか？" value="はい" /> はい
                  </label>
                  <label>
                    <input type="radio" name="歯：不正咬合の治療中ですか？" value="いいえ" /> いいえ
                  </label>
                </td>
              </tr>
              <tr>
                <th>皮膚：爪ダニ駆除の治療中ですか？</th>
                <td>
                  <label>
                    <input type="radio" name="皮膚：爪ダニ駆除の治療中ですか？" value="はい" /> はい
                  </label>
                  <label>
                    <input type="radio" name="皮膚：爪ダニ駆除の治療中ですか？" value="いいえ" /> いいえ
                  </label>
                </td>
              </tr>
              <tr>
                <th>排泄：軟便、または下痢をしやすいですか？</th>
                <td>
                  <label>
                    <input type="radio" name="排泄：軟便、または下痢をしやすいですか？" value="はい" /> はい
                  </label>
                  <label>
                    <input type="radio" name="排泄：軟便、または下痢をしやすいですか？" value="いいえ" /> いいえ
                  </label>
                </td>
              </tr>
              <tr>
                <th>おしり：下半身は汚れていますか？</th>
                <td>
                  <label>
                    <input type="radio" name="おしり：下半身は汚れていますか？" value="はい" /> はい
                  </label>
                  <label>
                    <input type="radio" name="おしり：下半身は汚れていますか？" value="いいえ" /> いいえ
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 className="form_title">ご要望ありましたらご記入ください</h3>
          <table className="form">
            <tbody>
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
          nextItem: "https://usagisan.info/contact_page/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/contact_page/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/contact_page/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
            description: "うさぎペットホテルをお探しなら【ウサギさん】のお問い合わせフォームです。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。｜ペットホテル",
            url: "https://usagisan.info/contact_page/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/contact_page/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/contact_page/#webpage",
      url: "https://usagisan.info/contact_page/",
      name: "お問い合わせ｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description: "うさぎペットホテルをお探しなら【ウサギさん】のお問い合わせフォームです。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/contact_page/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/contact_page/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/contact_page/#website",
      url: "https://usagisan.info/contact_page/",
      name: "お問い合わせ｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description: "うさぎペットホテルをお探しなら【ウサギさん】のお問い合わせフォームです。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/contact_page/#person",
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

export default ContactPage
