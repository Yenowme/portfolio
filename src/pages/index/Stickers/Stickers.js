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
import start2ClickImg from "../../../images/stickers/StarSticker_s_click.png"

import main_doc from "../../../images/stickers/main_doc.png"
import main_doc_hover from "../../../images/stickers/main_doc_hover.png"
import main_doc_click from "../../../images/stickers/main_doc_click.png"

import main_illust from "../../../images/stickers/main_illust.png"
import main_illust_hover from "../../../images/stickers/main_illust_hover.png"
import main_illust_click from "../../../images/stickers/main_illust_click.png"

import star_white from "../../../images/stickers/star_white.png"
import star_white_hover from "../../../images/stickers/star_white_hover.png"
import star_white_click from "../../../images/stickers/star_white_click.png"

const Stickers = () => (
  <>
    <Sticker
      normalImg={NameNormalImg}
      hoverImg={NameHoverImg}
      clickImg={NameClickImg}
      alt={"name"}
      width="453"
      height={"162"}
      positionTop={"-6%"}
      positionLeft={"5%"}
      rotate={"-22"}
    />
    <Sticker
      normalImg={start2NormalImg}
      hoverImg={start2HoverImg}
      clickImg={start2ClickImg}
      alt={"star2"}
      width="110"
      height={"110"}
      positionLeft={"65%"}
      positionTop={"62%"}
      rotate="-15"
    />
    <Sticker
      normalImg={start2NormalImg}
      hoverImg={start2HoverImg}
      clickImg={start2ClickImg}
      alt={"star2"}
      width="100"
      height={"100"}
      positionLeft={"0%"}
      positionTop={"40%"}
      rotate="-10"
    />
    <Sticker
      normalImg={starNormalImg}
      hoverImg={starHoverImg}
      clickImg={starClickImg}
      alt={"start1"}
      width="140"
      height={"140"}
      positionLeft={"70%"}
      positionTop={"10%"}
    />

    <Sticker
      normalImg={main_doc}
      hoverImg={main_doc_hover}
      clickImg={main_doc_click}
      alt={"main_doc"}
      width="205"
      height={"205"}
      positionLeft={"80%"}
      positionTop={"50%"}
      rotate={"-90"}
    />
    <Sticker
      normalImg={main_illust}
      hoverImg={main_illust_hover}
      clickImg={main_illust_click}
      alt={"main_illust"}
      width="180"
      height={"180"}
      positionLeft={"27%"}
      positionTop={"0%"}
      rotate={"13"}
      url={
        "https://gratis-cardboard-45e.notion.site/Jeong-yena-4301610dfde64bb4b34033e145c01acf"
      }
    />

    <Sticker
      normalImg={star_white}
      hoverImg={star_white_hover}
      clickImg={star_white_click}
      alt={"star_white"}
      width="90"
      height={"90"}
      positionLeft={"80%"}
      positionTop={"10%"}
    />
    <Sticker
      normalImg={gitHubNormalImg}
      hoverImg={gitHubHoverImg}
      clickImg={gitHubClickImg}
      alt={"gitHub"}
      width={"176"}
      height={"176"}
      url={"https://github.com/Yenowme"}
      positionTop={"65%"}
      positionLeft={"73%"}
      rotate={"3"}
    />
  </>
)

export default Stickers
