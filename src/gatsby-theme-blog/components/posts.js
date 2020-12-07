import React from "react"
import Logo from "./logo.png"
import Layout from "./layout"
import SEO from "./seo"
import PostList from "./post-list"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
    <section className="hero is-primary is-bold ">
      <div className="hero-body tdc-hero">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-one-quarter">
              <img src={Logo} className="image " style={{ height: "120px" }} />
            </div>
            <div className="column ">
              <h1 className="title  is-1 "> // {siteTitle} </h1>
              <h2 className="mitr subtitle">
                ขอให้เป็ดได้พูด ขอมีส่วนร่วมบ้าง
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="content-section section">
      <div className="container content">
        <div className="columns">
          <div className="column is-8">
            <PostList posts={posts} />
          </div>
          <div className="column is-4"></div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Posts
