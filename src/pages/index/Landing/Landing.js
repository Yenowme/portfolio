import * as React from "react"
import DownIcon from "../../../components/svgs/down"
import Stickers from "../Stickers/Stickers"
import * as Style from "./landing.module.css"

const Landing = () => (
  <div className={Style.wrap}>
    <Stickers />
    <div className={Style.titleWrap}>
      <div className={Style.title}>
        <h1 className={Style.h1}>
          CREATIVE WEB
          <br />
          DEVELOPER
        </h1>
        <p className={Style.intro}>
          프론트엔드 웹 개발자를 꿈꾸는 정예나입니다.
          <br />
          디자인을 공부하다 욕심이 생겨 개발까지 하게되었습니다. 반복적인 일을
          싫어하고, 새롭고 빠른 방법으로 문제를 해결하기 위해 고민합니다.
          <br /> 현재는 이노베이션 아카데미 42서울에서 개발을 공부중입니다.
          끊임없이 성장하며 도전하는 개발자가 되고자 합니다
        </p>
      </div>
    </div>

    <div
      className={Style.down}
      onClick={() => {
        window.scrollTo({
          top: document.body.offsetHeight,
          behavior: "smooth",
        })
      }}
    >
      <DownIcon />
    </div>
  </div>
)

export default Landing
