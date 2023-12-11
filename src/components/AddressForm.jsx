import React, { useState } from "react"

const AddressForm = () => {
  const imageName = "toiawase_img"
  const [showInput, setShowInput] = useState(false)

  const handleRadioChange = event => {
    setShowInput(event.target.value === "ペットホテル")
  }

  const [postalCode, setPostalCode] = useState("")
  const [prefecture, setPrefecture] = useState("")
  const [address1, setAddress1] = useState("")

  const prefectureOptions = ["北海道", "青森県", "岩手県", "秋田県", "宮城県", "山形県", "福島県", "栃木県", "群馬県", "茨城県", "埼玉県", "東京都", "千葉県", "神奈川県", "山梨県", "長野県", "新潟県", "富山県", "石川県", "福井県", "静岡県", "岐阜県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "徳島県", "香川県", "愛媛県", "高知県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "福岡県", "佐賀県", "長崎県", "大分県", "熊本県", "宮崎県", "鹿児島県", "沖縄県"]

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        // Simple validation for the length and format of the postal code
        const postalCodeRegex = /^\d{7}$/
        if (!postalCodeRegex.test(postalCode.replace("-", ""))) {
          console.error("Error fetching address: Invalid postal code format.")
          setPrefecture("")
          setAddress1("")
          return
        }

        const response = await fetch(`https://api.zipaddress.net/?zipcode=${postalCode}`)
        const data = await response.json()
        console.log(data)

        if (data.code === "200") {
          console.log("Prefecture (in useEffect):", data.data.pref)
          console.log("Address (in useEffect):", data.data.address)
          setPrefecture(data.data.pref)
          setAddress1(data.data.address)
        } else {
          console.error("Error fetching address:", data.message)
          setPrefecture("")
          setAddress1("")
        }
      } catch (error) {
        console.error("Error fetching address:", error)
        setPrefecture("")
        setAddress1("")
      }
    }

    // fetchAddress関数を呼び出す
    fetchAddress()
  }, [postalCode])

  const handlePostalCodeChange = e => {
    const newPostalCode = e.target.value
    // 数字以外を除外するなどのバリデーションを行うことも考慮してください
    setPostalCode(newPostalCode)
  }

  return (
    <>
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
                  <input type="text" value={postalCode} onChange={handlePostalCodeChange} maxLength={8} />
                </label>
                <br />
                <label>
                  都道府県:
                  <input type="text" value={prefecture} onChange={e => setPrefecture(e.target.value)} />
                </label>
                <br />
                <label>
                  住所１:
                  <input type="text" value={address1} readOnly />
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
                <input type="email" data-type="email" name="confirm_email" data-post-disable={1} size={40} required="required" />
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
    </>
  )
}

export default AddressForm
