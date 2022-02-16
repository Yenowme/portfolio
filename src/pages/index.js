import * as React from "react"
import Seo from "../components/seo"

import * as Style from "./index.module.css"

import Layout from "../components/layout/layout"
import Divider from "../components/divider/divider"
import Stickers from "./index/Stickers/Stickers"
import Landing from "./index/Landing/Landing"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Landing />
    <Stickers />
    <Divider title="PROJECTS" />
    <div className={`${Style.gradientOrange}`}></div>
    <div className={`${Style.gradientYellow}`}></div>
  </Layout>
)

export default IndexPage
