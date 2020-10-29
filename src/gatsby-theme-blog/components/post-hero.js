import React from "react"
import Image from "gatsby-image"

const PostHero = ({ post }) => (
  <>
    {post?.image?.childImageSharp && (
      <Image
        className="img-fluid bg-auto bg-center"
        style={{ maxHeight: "400px" }}
        fluid={post.image.childImageSharp.fluid}
        alt={post.imageAlt ? post.imageAlt : post.excerpt}
      />
    )}
  </>
)

export default PostHero
