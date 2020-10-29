import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import PostList from "./post-list"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
    <section className="hero is-primary is-bold ">
      <div className="hero-body tdc-hero">
        <div className="container">
          <h1 className="title mitr is-1 "> {siteTitle} </h1>
          <h2 className="subtitle">ขอให้เป็ดได้พูด ขอมีส่วนร่วมบ้าง</h2>
        </div>
      </div>
    </section>
    <section className="content-section section">
      <div className="container content">
        <PostList posts={posts} />
      </div>
    </section>
  </Layout>
)

export default Posts
