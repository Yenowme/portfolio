import * as React from "react"
import { Link } from "gatsby"
import * as headerStyle from "./header.module.css"

const Header = () => (
  <header className={headerStyle.head}>
    <Link className={headerStyle.nav} to="/">
      portfolio
    </Link>
    <div>
      <Link className={`${headerStyle.nav} ${headerStyle.right}`} to="/">
        about
      </Link>
      <Link className={`${headerStyle.nav} ${headerStyle.right}`} to="/">
        projects
      </Link>
      <Link className={`${headerStyle.nav} ${headerStyle.right}`} to="/">
        contact
      </Link>
    </div>
  </header>
)

export default Header
