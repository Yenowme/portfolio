import * as React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

import "./layout.css"
import Header from "../header/header"
import Sticker from "../sticker/sticker"
import Divider from "../divider/divider"
import Footer from "../footer/Footer"

const shortcodes = { Sticker, Divider }

const Layout = ({ children }) => {
  return (
    <MDXProvider components={shortcodes}>
      <div className="layout">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
