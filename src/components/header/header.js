import * as React from "react"
import { Link } from "gatsby"
import * as headerStyle from "./header.module.css"

const Header = () => {
  const onClick = top => {
    window.scrollTo({
      top: top,
      behavior: "smooth",
    })
  }
  return (
    <header className={headerStyle.head}>
      <button
        onClick={() => {
          onClick(0)
        }}
        className={headerStyle.nav}
        to="/"
      >
        portfolio
      </button>
      <div>
        <button
          className={`${headerStyle.nav} ${headerStyle.right}`}
          onClick={() => {
            onClick(document.body.offsetHeight)
          }}
        >
          projects
        </button>
        <button
          onClick={() => {
            onClick(document.body.scrollHeight)
          }}
          className={`${headerStyle.nav} ${headerStyle.right}`}
        >
          contact
        </button>
      </div>
    </header>
  )
}
export default Header
