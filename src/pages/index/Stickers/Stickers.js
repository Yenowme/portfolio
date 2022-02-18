import * as React from "react"

import Sticker from "../../../components/sticker/sticker"

import gitHubNormalImg from "../../../images/stickers/githubSticker_normal.png"
import gitHubClickImg from "../../../images/stickers/githubSticker_click.png"
import gitHubHoverImg from "../../../images/stickers/githubSticker_hover.png"
import NameNormalImg from "../../../images/stickers/NameSticker_normal.png"
import NameHoverImg from "../../../images/stickers/NameSticker_hover.png"
import NameClickImg from "../../../images/stickers/NameSticker_click.png"
import starNormalImg from "../../../images/stickers/StarSticker_normal.png"
import starHoverImg from "../../../images/stickers/StarSticker_hover.png"
import starClickImg from "../../../images/stickers/StarSticker_click.png"
import start2NormalImg from "../../../images/stickers/StarSticker_s_normal.png"
import start2HoverImg from "../../../images/stickers/StarSticker_s_hover.png"
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
      positionTop={"70%"}
      positionLeft={"75%"}
      rotate={"-18"}
    />
    <Sticker
      normalImg={start2NormalImg}
      hoverImg={start2HoverImg}
      clickImg={start2HoverImg}
      alt={"star2"}
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
      alt={"star2"}
      width="100"
      height={"100"}
      positionLeft={"10%"}
      positionTop={"46%"}
      rotate="-10"
    />
    <Sticker
      normalImg={starNormalImg}
      hoverImg={starHoverImg}
      clickImg={starClickImg}
      alt={"start1"}
      width="135"
      height={"135"}
      positionLeft={"80%"}
      positionTop={"30%"}
    />
  </>
)

export default Stickers
