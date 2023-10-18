import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const rabbit_vegetable = ({ data }) => {
  return (
    <>
      <Layout>
        <div id="mainimage">
          <div id="mainimage-inner">
            <GatsbyImage image={data.h_bn.childImageSharp.gatsbyImageData} alt="" />
          </div>
        </div>
        <Navbar />

        <div id="main-content" className="flex-wrap">
          <div className="main-cont">
            <h3>
              <img src="/images/vegetable_tit.png" width={698} alt="うさぎの飼育　生野菜の給餌について" />
            </h3>
            <p className="center">
              <img src="/images/vegetable_pic01.jpg" alt="" width="100%" />
            </p>

            <p>
              うさぎ・モルモットなどの完全草食動物を飼育する上で生野菜は本当に必要なのか？
              <br />
              生野菜は必要だという人もいれば、特に必要ないという人もいます。
              <br />
              獣医師によっても大きく見解が分かれます。
              <br />
              個人的な見解だけでいえば過剰に与えなければ問題ないと思います。
              <br />
              必要だという方の多くは嗜好性だけではなく生野菜に含まれる食物酵素を摂取することが出来、摂取することで消化酵素が増え、食物の消化や代謝を助けてくれるのが理由の一つだと言えますが生野菜の栄養素（酵素・ビタミン・ミネラル）は生のまま摂取しても吸収率が悪いのも事実。
              <br />
              草食動物の主食である牧草（チモシー）に含まれている量が少ないﾋﾞﾀﾐﾝAを補うために人参などを与えているという方もいますが、人参などに多く含まれるビタミンAは脂溶性ビタミといわれ生のまま摂取しても殆ど栄養を吸収することが出来ません。
              <br />
              生野菜から果物に話は変わりますが、ビタミンB6・ビタミンB12・葉酸・ビオチンの機能性成分はイチゴ・バナナに含まれていることからイチゴ・バナナなどを与えている人がいますがこれは腸性毒血症を発症する可能性が高まるので過剰に与えるのはオススメできません。
              <br />
              与える際の目安として一か月に一回人差し指の爪くらいの量なら問題ないと思います。（理由：単糖類はクロストリジウム菌が毒素を作りだすときに必要な栄養素になるからです）
              <br />
              個人的に懸念しているのは、生野菜を過剰に与えると毎日の飲水量が変化する為、体調管理が難しくなる可能性があります。
              <br />
              一日与えるとしても５グラム程度の少量にするのが好ましいと思います。
              <br />
              参考までに野菜の栄養価について示した表です。（五訂食品成分表）
            </p>

            <table className="vagetable">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>水分(g)</th>
                  <th>タンパク質</th>
                  <th>脂質</th>
                  <th>炭水化物</th>
                  <th>不溶性食物繊維</th>
                  <th>カリウム</th>
                  <th>カルシウム</th>
                  <th>リン</th>
                  <th>ビタミンA(&#13197;)</th>
                  <th>ビタミンE(㎎)</th>
                  <th>ビタミンK(&#13197;)</th>
                  <th>ビタミンC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ヨモギ</td>
                  <td>83.6</td>
                  <td>5.2</td>
                  <td>0.3</td>
                  <td>8.7</td>
                  <td>6.9</td>
                  <td>890</td>
                  <td>180</td>
                  <td>100</td>
                  <td>5300</td>
                  <td>3.2</td>
                  <td>340</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>シソ</td>
                  <td>86.7</td>
                  <td>3.9</td>
                  <td>0.1</td>
                  <td>7.5</td>
                  <td>6.5</td>
                  <td>500</td>
                  <td>230</td>
                  <td>70</td>
                  <td>1100</td>
                  <td>3.9</td>
                  <td>690</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td>パセリ</td>
                  <td>84.7</td>
                  <td>3.7</td>
                  <td>0.7</td>
                  <td>8.2</td>
                  <td>6.2</td>
                  <td>1000</td>
                  <td>290</td>
                  <td>61</td>
                  <td>7400</td>
                  <td>3.4</td>
                  <td>850</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>芽キャベツ</td>
                  <td>83.2</td>
                  <td>5.7</td>
                  <td>0.1</td>
                  <td>9.9</td>
                  <td>4.1</td>
                  <td>610</td>
                  <td>37</td>
                  <td>73</td>
                  <td>710</td>
                  <td>0.6</td>
                  <td>150</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>ブロッコリー</td>
                  <td>89.0</td>
                  <td>4.3</td>
                  <td>0.5</td>
                  <td>5.2</td>
                  <td>3.7</td>
                  <td>360</td>
                  <td>38</td>
                  <td>89</td>
                  <td>810</td>
                  <td>2.5</td>
                  <td>160</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>ダイコン葉</td>
                  <td>90.6</td>
                  <td>2.2</td>
                  <td>0.1</td>
                  <td>5.3</td>
                  <td>3.2</td>
                  <td>400</td>
                  <td>260</td>
                  <td>52</td>
                  <td>3900</td>
                  <td>3.8</td>
                  <td>270</td>
                  <td>53</td>
                </tr>
                <tr>
                  <td>バジル</td>
                  <td>91.5</td>
                  <td>2.0</td>
                  <td>0.6</td>
                  <td>4.0</td>
                  <td>3.1</td>
                  <td>420</td>
                  <td>240</td>
                  <td>41</td>
                  <td>6300</td>
                  <td>3.5</td>
                  <td>440</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>豆苗</td>
                  <td>89.7</td>
                  <td>4.8</td>
                  <td>0.5</td>
                  <td>43.0</td>
                  <td>2.9</td>
                  <td>210</td>
                  <td>18</td>
                  <td>57</td>
                  <td>4700</td>
                  <td>2.8</td>
                  <td>320</td>
                  <td>74</td>
                </tr>
                <tr>
                  <td>カブ葉</td>
                  <td>92.3</td>
                  <td>2.3</td>
                  <td>0.1</td>
                  <td>3.9</td>
                  <td>2.6</td>
                  <td>330</td>
                  <td>250</td>
                  <td>42</td>
                  <td>2800</td>
                  <td>3.2</td>
                  <td>340</td>
                  <td>82</td>
                </tr>
                <tr>
                  <td>カボチャ</td>
                  <td>76.2</td>
                  <td>1.9</td>
                  <td>0.3</td>
                  <td>20.6</td>
                  <td>2.6</td>
                  <td>450</td>
                  <td>15</td>
                  <td>43</td>
                  <td>4000</td>
                  <td>5.1</td>
                  <td>25</td>
                  <td>43</td>
                </tr>
                <tr>
                  <td>カリフラワー</td>
                  <td>90.8</td>
                  <td>3.0</td>
                  <td>0.1</td>
                  <td>5.2</td>
                  <td>2.5</td>
                  <td>410</td>
                  <td>24</td>
                  <td>68</td>
                  <td>18</td>
                  <td>0.2</td>
                  <td>17</td>
                  <td>81</td>
                </tr>
                <tr>
                  <td>クレソン</td>
                  <td>94.1</td>
                  <td>2.1</td>
                  <td>0.1</td>
                  <td>2.5</td>
                  <td>2.3</td>
                  <td>330</td>
                  <td>110</td>
                  <td>57</td>
                  <td>2700</td>
                  <td>1.6</td>
                  <td>190</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td>ルッコラ</td>
                  <td>92.7</td>
                  <td>1.9</td>
                  <td>0.4</td>
                  <td>3.1</td>
                  <td>2.3</td>
                  <td>480</td>
                  <td>170</td>
                  <td>40</td>
                  <td>3600</td>
                  <td>1.4</td>
                  <td>210</td>
                  <td>66</td>
                </tr>
                <tr>
                  <td>ニンジン葉</td>
                  <td>93.5</td>
                  <td>1.1</td>
                  <td>0.2</td>
                  <td>3.7</td>
                  <td>2.2</td>
                  <td>510</td>
                  <td>92</td>
                  <td>52</td>
                  <td>1700</td>
                  <td>1.1</td>
                  <td>160</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>人参皮付</td>
                  <td>89.5</td>
                  <td>0.6</td>
                  <td>0.1</td>
                  <td>9.1</td>
                  <td>2.0</td>
                  <td>280</td>
                  <td>28</td>
                  <td>25</td>
                  <td>9100</td>
                  <td>0.5</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>セリ</td>
                  <td>93.4</td>
                  <td>2.0</td>
                  <td>0.1</td>
                  <td>3.3</td>
                  <td>2.1</td>
                  <td>410</td>
                  <td>34</td>
                  <td>51</td>
                  <td>1900</td>
                  <td>0.8</td>
                  <td>160</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>ミツバ</td>
                  <td>94.6</td>
                  <td>0.9</td>
                  <td>0.1</td>
                  <td>2.9</td>
                  <td>2.0</td>
                  <td>500</td>
                  <td>47</td>
                  <td>47</td>
                  <td>3200</td>
                  <td>0.9</td>
                  <td>220</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>サツマイモ</td>
                  <td>66.1</td>
                  <td>1.2</td>
                  <td>0.2</td>
                  <td>31.5</td>
                  <td>1.8</td>
                  <td>390</td>
                  <td>40</td>
                  <td>46</td>
                  <td>23</td>
                  <td>1.6</td>
                  <td>0</td>
                  <td>29</td>
                </tr>
                <tr>
                  <td>山東菜</td>
                  <td>94.7</td>
                  <td>1.0</td>
                  <td>0.2</td>
                  <td>2.7</td>
                  <td>1.8</td>
                  <td>360</td>
                  <td>140</td>
                  <td>27</td>
                  <td>1200</td>
                  <td>0.8</td>
                  <td>100</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>エンダイブ</td>
                  <td>94.6</td>
                  <td>1.2</td>
                  <td>0.2</td>
                  <td>2.9</td>
                  <td>1.6</td>
                  <td>270</td>
                  <td>51</td>
                  <td>30</td>
                  <td>1700</td>
                  <td>0.9</td>
                  <td>120</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>ツルムラサキ</td>
                  <td>95.1</td>
                  <td>0.7</td>
                  <td>0.2</td>
                  <td>2.6</td>
                  <td>1.6</td>
                  <td>210</td>
                  <td>150</td>
                  <td>28</td>
                  <td>3000</td>
                  <td>1.1</td>
                  <td>350</td>
                  <td>41</td>
                </tr>
                <tr>
                  <td>サラダ菜</td>
                  <td>94.9</td>
                  <td>1.7</td>
                  <td>0.2</td>
                  <td>2.2</td>
                  <td>1.6</td>
                  <td>410</td>
                  <td>56</td>
                  <td>49</td>
                  <td>2200</td>
                  <td>1.6</td>
                  <td>110</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>小松菜</td>
                  <td>94.1</td>
                  <td>1.5</td>
                  <td>0.2</td>
                  <td>2.4</td>
                  <td>1.5</td>
                  <td>500</td>
                  <td>170</td>
                  <td>45</td>
                  <td>3100</td>
                  <td>0.9</td>
                  <td>210</td>
                  <td>39</td>
                </tr>
                <tr>
                  <td>キャベツ</td>
                  <td>92.7</td>
                  <td>1.3</td>
                  <td>0.2</td>
                  <td>5.2</td>
                  <td>1.4</td>
                  <td>200</td>
                  <td>43</td>
                  <td>27</td>
                  <td>50</td>
                  <td>0.1</td>
                  <td>78</td>
                  <td>41</td>
                </tr>
                <tr>
                  <td>セロリ</td>
                  <td>94.7</td>
                  <td>1.0</td>
                  <td>0.1</td>
                  <td>3.2</td>
                  <td>1.2</td>
                  <td>410</td>
                  <td>39</td>
                  <td>39</td>
                  <td>44</td>
                  <td>0.2</td>
                  <td>10</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>サニーレタス</td>
                  <td>94.1</td>
                  <td>1.2</td>
                  <td>0.2</td>
                  <td>3.2</td>
                  <td>1.1</td>
                  <td>410</td>
                  <td>66</td>
                  <td>31</td>
                  <td>2000</td>
                  <td>1.3</td>
                  <td>160</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>青梗菜</td>
                  <td>96.0</td>
                  <td>0.6</td>
                  <td>0.1</td>
                  <td>2.0</td>
                  <td>1.0</td>
                  <td>260</td>
                  <td>100</td>
                  <td>27</td>
                  <td>2000</td>
                  <td>0.7</td>
                  <td>84</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>白菜</td>
                  <td>95.2</td>
                  <td>0.8</td>
                  <td>0.1</td>
                  <td>3.2</td>
                  <td>1.0</td>
                  <td>220</td>
                  <td>43</td>
                  <td>33</td>
                  <td>99</td>
                  <td>0.2</td>
                  <td>59</td>
                  <td>19.</td>
                </tr>
                <tr>
                  <td>レタス</td>
                  <td>95.9</td>
                  <td>0.6</td>
                  <td>0.1</td>
                  <td>2.8</td>
                  <td>1.0</td>
                  <td>200</td>
                  <td>19</td>
                  <td>22</td>
                  <td>240</td>
                  <td>0.3</td>
                  <td>29</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>キュウリ</td>
                  <td>95.4</td>
                  <td>1.0</td>
                  <td>0.1</td>
                  <td>3.0</td>
                  <td>0.9</td>
                  <td>200</td>
                  <td>26</td>
                  <td>36</td>
                  <td>330</td>
                  <td>0.3</td>
                  <td>34</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>チコリー</td>
                  <td>94.7</td>
                  <td>1.0</td>
                  <td>0</td>
                  <td>3.9</td>
                  <td>0.9</td>
                  <td>170</td>
                  <td>24</td>
                  <td>25</td>
                  <td>11</td>
                  <td>0.2</td>
                  <td>8</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>トマト</td>
                  <td>94.0</td>
                  <td>0.7</td>
                  <td>0.1</td>
                  <td>4.7</td>
                  <td>0.7</td>
                  <td>210</td>
                  <td>7</td>
                  <td>26</td>
                  <td>540</td>
                  <td>0.9</td>
                  <td>4</td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>

            <p>
              上記の表を見ていただければ分かると思いますが、生野菜の８割から９割は水分です。
              <br />
              主食である牧草（チモシー）の食物繊維は３０％～４０％です。
              <br />
              雑食動物からしたら生野菜に含まれる食物繊維の量は魅力的かもしれませんが、完全草食の彼らにしてみたら食物繊維は入ってないようなものだと言っても過言ではありません。
              <br />
              副食として食に彩を添えるという意味では良いと思います。
            </p>
          </div>

          <Sidebar />
        </div>
      </Layout>
    </>
  )
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://usagisan.info/rabbit_vegetable/#breadcrumblist",
      itemListElement: [
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/#listItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】",
            description:
              "埼玉のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」にお任せ下さい。猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。サービス提供エリア（さいたま市、川越市、所沢市、新座市、朝霞市、狭山市）",
            url: "https://usagisan.info/",
          },
          nextItem: "https://usagisan.info/rabbit_vegetable/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://usagisan.info/rabbit_vegetable/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://usagisan.info/rabbit_vegetable/",
            name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜うさぎの飼育　生野菜の給餌について",
            description:
              "埼玉県のペット火葬・葬儀のことなら「愛心ペットセレモニー埼玉」｜猫・犬はもちろん、うさぎや小鳥の火葬・葬儀も対応。｜うさぎの飼育　生野菜の給餌について",
            url: "https://usagisan.info/rabbit_vegetable/",
          },
          previousItem: "https://usagisan.info/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://usagisan.info/rabbit_vegetable/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://usagisan.info/rabbit_vegetable/#webpage",
      url: "https://usagisan.info/rabbit_vegetable/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜うさぎの飼育　生野菜の給餌について",
      description:
        "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://usagisan.info/rabbit_vegetable/#website",
      },
      breadcrumb: {
        "@id": "https://usagisan.info/rabbit_vegetable/#breadcrumblist",
      },
      datePublished: "2022-09-21T22:55:53+09:00",
      dateModified: "2023-01-17T3:00:07+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://usagisan.info/rabbit_vegetable/#website",
      url: "https://usagisan.info/rabbit_vegetable/",
      name: "うさぎペットホテル・うさぎカフェ【うさぎさん】｜うさぎの飼育　生野菜の給餌について",
      description:
        "うさぎペットホテルをお探しなら【ウサギさん】へお越しください。JR山手線鶯谷駅から５分の場所にあります。午前中からお預け可能で長期利用もOKで安心安全です。かわいいチンチラさんの販売もしております。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://usagisan.info/rabbit_vegetable/#person",
      },
    },
  ],
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title="うさぎの飼育　生野菜の給餌について"
      description="チンチラ専門店（うさぎ専門店）うさぎさん（ペットホテル＆うさカフェ（チンチラカフェ））は、JR山手線鶯谷駅から５分の場所にある、午前中からお預け可能で長期利用も可能な格安ペットホテル・チンチラカフェ・うさカフェをはじめ、純血種のうさぎ・チンチラを販売もしております。"
      article={true}
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export default rabbit_vegetable

export const query = graphql`
  query {
    h_bn: file(relativePath: { eq: "h_banner.png" }) {
      childImageSharp {
        gatsbyImageData(width: 970, layout: CONSTRAINED)
      }
    }
  }
`
