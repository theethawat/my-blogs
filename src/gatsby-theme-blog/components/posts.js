import React from "react"
import Logo from "./logowhite.png"
import Layout from "./layout"
import SEO from "./seo"
import PostList from "./post-list"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
    <section className="hero is-primary is-bold kanit ">
      <div className="hero-body tdc-hero">
        <div className="container">
          <div className="columns is-mobile justify-items-end">
            <div className="column w-1/3">
              <img src={Logo} className="image " style={{ height: "90px" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="content-section section">
      <div className="container ">
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
