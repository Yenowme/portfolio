import * as React from "react"
import Seo from "../components/seo"

import * as Style from "./index.module.css"

import Layout from "../components/layout/layout"
import Divider from "../components/divider/divider"
import Landing from "./index/Landing/Landing"
import Projects from "./index/Projects/Projects"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Landing />
    <Divider title="PROJECTS" />
    <Projects />
    <div className={`${Style.gradientOrange}`}></div>
    <div className={`${Style.gradientYellow}`}></div>
  </Layout>
)

export default IndexPage
