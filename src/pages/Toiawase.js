import React, { useState } from "react"

import { graphql } from "gatsby"

import Seo from "../components/Seo"
import LayoutNew from "../components/LayoutNew"

const Toiawase = () => {
  const imageName = "toiawase_img"
  const [showInput, setShowInput] = useState(false)

  const handleRadioChange = event => {
    setShowInput(event.target.value === "ペットホテル")
  }

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
                    <input type="radio" name="option" value="うさぎカフェ" onChange={handleRadioChange} /> うさぎカフェ
                  </label>
                  <label>
                    <input type="radio" name="option" value="ペットホテル" onChange={handleRadioChange} /> ペットホテル
                  </label>

                  {showInput && (
                    <span id="pet_hotel">
                      <p>
                        <span className="red bold">*</span>
                        <span className="bold">お預かり日</span>
                        <br />
                        <select name="お預かり日(月)">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                        &nbsp;月&nbsp;
                        <select name="お預かり日(日)">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                        </select>
                        &nbsp;日&nbsp;
                        <select name="お預かり日(時)">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                        </select>
                        &nbsp;時
                      </p>

                      <p>
                        <span className="red bold">*</span>
                        <span className="bold">お引き取り日</span>
                        <br />
                        <select name="お引き取り日(月)">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                        &nbsp;月&nbsp;
                        <select name="お引き取り日(日)">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                        </select>
                        &nbsp;日&nbsp;
                        <select name="お引き取り日(時)">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
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
                  <input type="text" name="お名前" size={45} required="required" />
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
                    <input type="text" name="都道府県" />
                  </label>
                  <br />
                  <label>
                    住所:
                    <input type="text" name="住所" />
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
                  <span className="red">*</span>電話番号
                </th>
                <td>
                  <input type="tel" data-type="tel" name="電話番号" size={16} data-min={9} required="required" />
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
                    <input type="radio" name="ご利用は初めてですか？" /> はい
                  </label>
                  <label>
                    <input type="radio" name="ご利用は初めてですか？" /> いいえ
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
                    <input type="radio" name="ご家族の性別" /> オス
                  </label>
                  <label>
                    <input type="radio" name="ご家族の性別" /> メス
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
                    <option>うさぎ</option>
                    <option>チンチラ</option>
                    <option>モルモット</option>
                    <option>ハリネズミ</option>
                    <option>デグー</option>
                    <option>ハムスター</option>
                    <option>ジリス</option>
                    <option>アルマジロ</option>
                    <option>オグロプレーリードッグ</option>
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
                    <input type="radio" name="目：涙目、目ヤニは出ていますか？" /> はい
                  </label>
                  <label>
                    <input type="radio" name="目：涙目、目ヤニは出ていますか？" /> いいえ
                  </label>
                </td>
              </tr>
              <tr>
                <th>鼻：くしゃみ・鼻水はありますか？</th>
                <td>
                  <label>
                    <input type="radio" name="鼻：くしゃみ・鼻水はありますか？" /> はい
                  </label>
                  <label>
                    <input type="radio" name="鼻：くしゃみ・鼻水はありますか？" /> いいえ
                  </label>
                </td>
              </tr>
              <tr>
                <th>歯：不正咬合の治療中ですか？</th>
                <td>
                  <label>
                    <input type="radio" name="歯：不正咬合の治療中ですか？" /> はい
                  </label>
                  <label>
                    <input type="radio" name="歯：不正咬合の治療中ですか？" /> いいえ
                  </label>
                </td>
              </tr>
              <tr>
                <th>皮膚：爪ダニ駆除の治療中ですか？</th>
                <td>
                  <label>
                    <input type="radio" name="皮膚：爪ダニ駆除の治療中ですか？" /> はい
                  </label>
                  <label>
                    <input type="radio" name="皮膚：爪ダニ駆除の治療中ですか？" /> いいえ
                  </label>
                </td>
              </tr>
              <tr>
                <th>排泄：軟便、または下痢をしやすいですか？</th>
                <td>
                  <label>
                    <input type="radio" name="排泄：軟便、または下痢をしやすいですか？" /> はい
                  </label>
                  <label>
                    <input type="radio" name="排泄：軟便、または下痢をしやすいですか？" /> いいえ
                  </label>
                </td>
              </tr>
              <tr>
                <th>おしり：下半身は汚れていますか？</th>
                <td>
                  <label>
                    <input type="radio" name="おしり：下半身は汚れていますか？" /> はい
                  </label>
                  <label>
                    <input type="radio" name="おしり：下半身は汚れていますか？" /> いいえ
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
            <button type="submit">送信する</button>　<button type="reset">リセット</button>
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
            description: "埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」にお任せ下さい。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
            url: "https://usagisan.info/",
          },
          nextItem: "https://usagisan.info/Toiawase/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/Toiawase/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/Toiawase/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
            description: "埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」｜猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。｜ペットホテル",
            url: "https://usagisan.info/Toiawase/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/Toiawase/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/Toiawase/#webpage",
      url: "https://usagisan.info/Toiawase/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/Toiawase/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/Toiawase/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/Toiawase/#website",
      url: "https://usagisan.info/Toiawase/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/Toiawase/#person",
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

export default Toiawase
