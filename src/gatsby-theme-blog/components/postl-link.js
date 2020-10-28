/** @jsx jsx */
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt }) => (
  <article>
    <header>
      <h2 className="text-2xl">
        <a
          as={Link}
          sx={{
            textDecoration: `none`,
          }}
          to={slug}
        >
          {title || slug}
        </a>
      </h2>

      <small>{date}</small>
    </header>
    <section>
      <p>{excerpt}</p>
    </section>
  </article>
)

export default PostLink
