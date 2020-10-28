import React from "react"
import Image from "gatsby-image"

const PostHero = ({ post }) => (
  <>
    {post?.image?.childImageSharp && (
      <Image
        className="h-48 bg-auto bg-center"
        fluid={post.image.childImageSharp.fluid}
        alt={post.imageAlt ? post.imageAlt : post.excerpt}
      />
    )}
  </>
)

export default PostHero
