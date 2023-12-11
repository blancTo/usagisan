import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"

import Layout from "../components/LayoutNew"

import dayjs from "dayjs"
import "dayjs/locale/ja"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Tokyo")

const PostPage = ({ data }) => {
  dayjs.locale("ja")
  const { microcmsPosts } = data // フィールド名を修正
  const imageName = "news_img"
  return (
    <>
      <Layout imageName={imageName}>
        <article className="posts_box">
          <h2 className="posts_title">{data.microcmsPosts.title}</h2>

          {data.microcmsPosts.eyecatch && (
            <div className="eyecatch_img">
              <img src={data.microcmsPosts.eyecatch.url + "?fm=webp"} width={data.microcmsPosts.eyecatch.width} height={data.microcmsPosts.eyecatch.height} alt={data.microcmsPosts.title + "サムネイル画像"} loading="lazy" />
            </div>
          )}

          <div
            className="post_main_box"
            dangerouslySetInnerHTML={{
              __html: `${data.microcmsPosts.content}`,
            }}
          />

          <p className="center">
            <a href={`/category/${microcmsPosts.category.id}/`} className="bt02">
              一覧に戻る
            </a>
          </p>
        </article>
      </Layout>
    </>
  )
}

export const Head = ({ data }) => (
  <>
    <Seo title2={data.microcmsPosts.title} />
  </>
)

export const query = graphql`
  query ($postId: String) {
    microcmsPosts(id: { eq: $postId }) {
      title
      category {
        id
        name
      }
      content
      eyecatch {
        url
        height
        width
      }
      postsId
      date
    }
  }
`

export default PostPage
