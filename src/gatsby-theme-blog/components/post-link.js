import React from "react"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt }) => (
  <article className="mb-2 pb-3">
    <header>
      <h2 className="kanit-light subtitle is-3  ">
        <Link to={slug} className="has-text-primary">
          {" "}
          {title || slug}
        </Link>
      </h2>
      <small>{date}</small>
    </header>
    <section>
      <p className="content is-medium">{excerpt}</p>
    </section>
    <hr />
  </article>
)

export default PostLink
