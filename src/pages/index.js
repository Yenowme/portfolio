import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DownIcon from "../components/svgs/down"
import * as Style from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className={Style.h1}>{`CREATE WEB
    DEVELOPER`}</h1>
    <p className={Style.intro}>
      크리에이트 웹 개발자를 꿈꾸는 정예나입니다.
      <br /> 자기소개 글입니다. 디자인을 공부하다 개발까지 하게되었습니다.
      이노베이션 아카데미 42서울에서 개발을 공부중이며 아름다우며, 사용자
      친화적인 웹 개발자가 되고자 노력중입니다.
    </p>
    <DownIcon />
    <div className={`${Style.gradientOrange}`}></div>
    <div className={`${Style.gradientYellow}`}></div>
  </Layout>
)

export default IndexPage
