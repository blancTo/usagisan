import React from "react"
import Seo from "../components/Seo"
import LayoutNew from "../components/LayoutNew"

const ChinchillaToawase = () => {
  const imageName = "toiawase_img"

  return (
    <>
      <LayoutNew imageName={imageName}>
        <h3>
          <img src="/images/chi/chi_c.png" alt="「うさぎ・チンチラ専門店」お問い合わせフォーム" />
        </h3>
        <form action="https://ssgform.com/s/VPSzsmnZFcp7" method="post" id="mailform">
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
                <th>
                  <span className="red bold">*</span>お迎え希望日
                </th>
                <td>
                  <select name="お迎え希望日(月)">
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
                  <select name="お迎え希望日(日)">
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
                  <select name="お迎え希望日(時)">
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
                <th>お問い合わせ内容</th>
                <td>
                  <textarea name="お問い合わせ内容" rows={10} cols={60} defaultValue={""} />
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
      "@id": "https://usagisan.info/chinchilla_toiawase/#breadcrumblist",
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
          nextItem: "https://usagisan.info/chinchilla_toiawase/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/chinchilla_toiawase/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/chinchilla_toiawase/",
            name: "「うさぎ・チンチラ専門店」お問い合わせフォーム｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
            description: "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。｜「うさぎ・チンチラ専門店」お問い合わせフォーム",
            url: "https://usagisan.info/chinchilla_toiawase/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/chinchilla_toiawase/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/chinchilla_toiawase/#webpage",
      url: "https://usagisan.info/chinchilla_toiawase/",
      name: "「うさぎ・チンチラ専門店」お問い合わせフォーム｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description: "うさぎペットホテル・うさぎカフェ【うさぎさん】の「うさぎ・チンチラ専門店」お問い合わせフォームです。うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/chinchilla_toiawase/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/chinchilla_toiawase/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/chinchilla_toiawase/#website",
      url: "https://usagisan.info/chinchilla_toiawase/",
      name: "「うさぎ・チンチラ専門店」お問い合わせフォーム｜うさぎペットホテル・うさぎカフェ【うさぎさん】｜ペットホテル",
      description: "うさぎペットホテル・うさぎカフェ【うさぎさん】の「うさぎ・チンチラ専門店」お問い合わせフォームです。うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/chinchilla_toiawase/#person",
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

export default ChinchillaToawase
