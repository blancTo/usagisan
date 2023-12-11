import React from "react"
import { graphql, Link } from "gatsby"

import Seo from "../components/Seo"

import Layout from "../components/LayoutNew"

import dayjs from "dayjs"
import "dayjs/locale/ja"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Tokyo")

const MAX_CONTENT_LENGTH = 100 // 最大文字数を設定してください
const PAGES_PER_GROUP = 5 // 1グループに表示するページ数
const PAGE_PADDING = 1 // 前後に追加で表示するページ数

const CategoryPage = ({ data, pageContext }) => {
  dayjs.locale("ja")
  const { allMicrocmsPosts } = data
  const { category, numPages, currentPage, startPage, endPage } = pageContext
  const posts = allMicrocmsPosts.edges
  const imageName = "news_img"

  return (
    <>
      <Layout imageName={imageName}>
        {posts.map(({ node }) => (
          <div className="post_list" key={node.postsId}>
            {node.eyecatch ? (
              <div className="post_img">
                <a href={"/posts/" + node.postsId + "/"}>
                  <img src={node.eyecatch.url + "?fm=webp"} width={370} height={277} alt={node.title + "サムネイル画像"} loading="lazy" />
                </a>
              </div>
            ) : (
              <div className="post_img">
                <a href={"/posts/" + node.postsId + "/"}>
                  <img src="/images/post_noimage.jpg" width={370} height={277} alt={node.title + "の代替画像"} loading="lazy" />
                </a>
              </div>
            )}
            <div className="post_txt">
              <time dateTime={node.createdAt}>{node.updatedAt}</time>
              <br />
              <Link href={"/posts/" + node.postsId + "/"}>{node.title}</Link>
              <br />

              {stripHTML(node.content).length > MAX_CONTENT_LENGTH ? stripHTML(node.content).substring(0, MAX_CONTENT_LENGTH) + "..." : stripHTML(node.content)}
            </div>
          </div>
        ))}

        {numPages > 1 && (
          <div className="pager">
            {currentPage > 1 && <Link to={currentPage === 2 ? `/category/${category.categoryId}` : `/category/${category.categoryId}/${currentPage - 1}`}>&lt;&lt; 前へ</Link>}

            {/* ページャーの数字を表示 */}
            {Array.from({ length: 5 }, (_, i) => {
              const pageNumber = startPage + i // ページャーの数字を計算
              if (pageNumber <= endPage) {
                return (
                  <Link key={`pagination-link${pageNumber}`} to={pageNumber === 1 ? `/category/${category.categoryId}` : `/category/${category.categoryId}/${pageNumber}`} className={pageNumber === currentPage ? "current" : ""}>
                    {pageNumber}
                  </Link>
                )
              }
              return null
            })}

            {currentPage < numPages && <Link to={`/category/${category.categoryId}/${currentPage + 1}`}>次へ &gt;&gt;</Link>}
          </div>
        )}
      </Layout>
    </>
  )
}

// HTMLタグを削除する関数
function stripHTML(html) {
  return html.replace(/<[^>]*>/g, "")
}

export const query = graphql`
  query ($categoryId: String, $limit: Int, $skip: Int) {
    allMicrocmsPosts(filter: { category: { id: { eq: $categoryId } } }, limit: $limit, skip: $skip, sort: { date: DESC }) {
      edges {
        node {
          id
          postsId
          title
          eyecatch {
            url
          }
          content
          date
          updatedAt(formatString: "YYYY年MM月DD日")
          createdAt(formatString: "YYYY-MM-DDTHH:MM")
          category {
            id
            name
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => {
  const pageTitle = data.allMicrocmsPosts.edges[0].node.category.name // ページのタイトルを取得

  return (
    <>
      <Seo title2={pageTitle} />
    </>
  )
}

export default CategoryPage
