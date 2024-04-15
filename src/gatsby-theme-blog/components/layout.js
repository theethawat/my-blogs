import React from "react"
import "bulma/css/bulma.min.css"
import "./index.css"
import { Link } from "gatsby"
import Logo from "./logo.png"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = (
    <div>
      <nav className="navbar " role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item subtitle is-4 pb-0 mb-2" to="/">
            <img
              src={Logo}
              alt={title}
              className="image"
              style={{ height: "48px" }}
            />
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
    </div>
  )

  return (
    <div className="global-wrapper global-body " data-is-root-path={isRootPath}>
      <header className="global-header ">{header}</header>

      <section className="mb-5">
        <main>{children}</main>
      </section>

      <footer className="footer has-background-light kanit-light   ">
        <div className="content has-text-centered has-text-black is-size-6	">
          Creating with ❤️ in {new Date().getFullYear()} By <b>Theethawat</b> &{" "}
          <b>
            <a className="has-text-dark" href="https://theduckcreator.in.th">
              The Duck Creator
            </a>{" "}
          </b>
          <br />
          Licensed by Creative Commons 4.0 BY, Built with {` `}
          <a className="has-text-link" href="https://www.gatsbyjs.com">
            Gatsby
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
