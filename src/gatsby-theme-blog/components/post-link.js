import React from "react"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt, category }) => (
  <article className="mb-2 pb-3 ">
    <header className="mb-4">
      <h2 className="kanit title is-4 mb-2 ">
        <Link to={slug} className="has-text-primary">
          {title || slug}
        </Link>
      </h2>
      <small>{date}</small>
    </header>
    <div className="content">
      <p>{excerpt}</p>
    </div>
    <div>{category}</div>
    <hr />
  </article>
)

export default PostLink
