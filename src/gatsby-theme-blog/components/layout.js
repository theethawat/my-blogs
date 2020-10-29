import React from "react"
import "bulma/css/bulma.min.css"
import "./index.css"
import { Link } from "gatsby"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = (
    <div>
      <nav
        className="navbar mitr is-dark "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item subtitle is-4 pb-0 mb-2" to="/">
            {title}
          </Link>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item"></Link>
          </div>
        </div>
      </nav>
      <h1 className=" mitr"></h1>
    </div>
  )

  return (
    <div className="global-wrapper global-body " data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>

      <section className="mb-5">
        <main>{children}</main>
      </section>

      <footer className="footer has-background-dark ">
        <div className="content has-text-centered has-text-white ">
          CC 4.0 BY {new Date().getFullYear()}, เพราะเราเชื่อว่าการพูดคุยกัน
          จะส่งผลดี และเข้าใจกันมากขึ้นเสมอ <br />
          The Duck Creator - Create for Better{" "}
          <a className="has-text-light" href="https://theduckcreator.in.th">
            www.theduckcreator.in.th
          </a>{" "}
          {` `}
          Built with {` `}
          <a className="has-text-light" href="https://www.gatsbyjs.com">
            Gatsby
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
