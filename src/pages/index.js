import * as React from "react"
import Seo from "../components/seo"

import Layout from "../components/layout/layout"
import DownIcon from "../components/svgs/down"

import * as Style from "./index.module.css"
import Divider from "../components/divider/divider"
import Sticker from "../components/sticker/sticker"

import gitHubNormalImg from "../images/githubSticker_normal.png"
import gitHubClickImg from "../images/githubSticker_click.png"
import gitHubHoverImg from "../images/githubSticker_hover.png"
import NameNormalImg from "../images/NameSticker_normal.png"
import NameHoverImg from "../images/NameSticker_hover.png"
import NameClickImg from "../images/NameSticker_click.png"
import starNormalImg from "../images/StarSticker_normal.png"
import starHoverImg from "../images/StarSticker_hover.png"
import starClickImg from "../images/StarSticker_click.png"
import start2NormalImg from "../images/StarSticker_s_normal.png"
import start2HoverImg from "../images/StarSticker_s_hover.png"

const Stickers = () => (
  <>
    <Sticker
      normalImg={gitHubNormalImg}
      hoverImg={gitHubHoverImg}
      clickImg={gitHubClickImg}
      alt={"gitHub"}
      width={"140"}
      height={"140"}
      url={"https://github.com/Yenowme"}
      positionTop={"50%"}
      positionLeft={"76%"}
      rotate={""}
    />
    <Sticker
      normalImg={NameNormalImg}
      hoverImg={NameHoverImg}
      clickImg={NameClickImg}
      alt={"name"}
      width="385"
      height={"138"}
      positionTop={"65%"}
      positionLeft={"75%"}
      rotate={"-18"}
    />
    <Sticker
      normalImg={start2NormalImg}
      hoverImg={start2HoverImg}
      clickImg={start2HoverImg}
      alt={"start2"}
      width="135"
      height={"135"}
      positionLeft={"65%"}
      positionTop={"62%"}
      rotate="-15"
    />
    <Sticker
      normalImg={start2NormalImg}
      hoverImg={start2HoverImg}
      clickImg={start2HoverImg}
      alt={"start2"}
      width="100"
      height={"100"}
      positionLeft={"10px"}
      positionTop={"49%"}
      rotate="-10"
    />
    <Sticker
      normalImg={starNormalImg}
      hoverImg={starHoverImg}
      clickImg={starClickImg}
      alt={"start1"}
      width="135"
      height={"135"}
      positionLeft={"1030px"}
      positionTop={"28%"}
    />
  </>
)

const Landing = () => (
  <>
    <div className={Style.titleWrap}>
      <div className={Style.title}>
        <h1 className={Style.h1}>
          CREATIVE WEB
          <br />
          DEVELOPER
        </h1>
        <p className={Style.intro}>
          크리에이트한 웹 개발자를 꿈꾸는 정예나입니다.
          <br /> 자기소개 글입니다. 디자인을 공부하다 개발까지 하게되었습니다.
          이노베이션 아카데미 42seoul에서 개발을 공부중이며 아름다우며, 사용자
          친화적인 웹 개발자가 되고자 노력중입니다.어쩌고저쩌고.~
        </p>
      </div>
    </div>
    <div className={Style.down}>
      <DownIcon />
    </div>
  </>
)

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
