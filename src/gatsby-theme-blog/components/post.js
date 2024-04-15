import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./layout"
import SEO from "./seo"
import PostTitle from "./post-title"
import PostDate from "./post-date"
import PostFooter from "./post-footer"
import PostHero from "./post-hero"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage
          ? post.socialImage?.childImageSharp?.fluid.src
          : post.image?.childImageSharp?.fluid.src
      }
      imageAlt={post.imageAlt}
    />
    <main>
      <article>
        <header>
          <section className="hero tdc-hero is-bold mb-5">
            <div className="hero-body">
              <div className="container py-4">
                <h1 className="subtitle kanit has-text-white is-3 mb-0">
                  {post.title}
                </h1>
                <h2 className="subtitle mt-1 has-text-white kanit-light ">
                  {post.date}
                </h2>
              </div>
            </div>
          </section>
          <section className="section content-section">
            <div className="container content ">
              <PostHero post={post} />
              <div className="prose min-w-full mt-4">
                <MDXRenderer>{post.body}</MDXRenderer>
              </div>
              <PostFooter {...{ previous, next }} />
            </div>
          </section>
        </header>
      </article>
    </main>
  </Layout>
)

export default Post
