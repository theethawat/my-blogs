import React from "react"
import "./output.css"
import "./index.css"
import { Link } from "gatsby"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="box-content h-20 w-43 p-4">
        <p className="text-3xl mitr">
          <Link to="/">{title}</Link>
        </p>

        <p className="text-gray-500 mitr-light">
          ขอให้เป็ดได้พูด เราไม่ใช่คนที่รู้เยอะ หรือเก่งจริง
          แต่ขอให้ได้แสดงความคิดเห็น เผื่อข้อมูลเล็กๆ น้อยๆ
          ของเราจะมีประโยชน์กับส่วนรวมได้บ้าง{" "}
        </p>
      </div>
    )
  } else {
    header = (
      <div className="box-content h-20 w-43 p-4">
        {" "}
        <p className="text-3xl mitr">
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        </p>
        <p className="text-gray-500 mitr-light">
          ขอให้เป็ดได้พูด เราไม่ใช่คนที่รู้เยอะ หรือเก่งจริง
          แต่ขอให้ได้แสดงความคิดเห็น เผื่อข้อมูลเล็กๆ น้อยๆ
          ของเราจะมีประโยชน์กับส่วนรวมได้บ้าง{" "}
        </p>
      </div>
    )
  }

  return (
    <div
      className="global-wrapper bg-gray-100 min-h-screen"
      data-is-root-path={isRootPath}
    >
      <div className="container mx-auto">
        <header className="global-header">{header}</header>
      </div>
      <div className="container mx-auto px-4 bg-white ">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
