import React, { useState } from "react"

import * as Style from "./sticker.moduel.css"

export default function Sticker({
  normalImg,
  clickImg,
  hoverImg,
  width,
  alt,
  url,
}) {
  const [Img, setImg] = useState(normalImg)
  const [top, setTop] = useState("70%")
  const [left, setLeft] = useState("80%")
  return (
    <div>
      <img
        onMouseOver={() => {
          setImg(hoverImg)
        }}
        onMouseOut={() => {
          setImg(normalImg)
        }}
        onClick={e => {
          setImg(clickImg)
          if (url) window.open(url, "_blank")
        }}
        onDragStart={e => {
          const img = new Image()
          img.src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
          e.dataTransfer.setDragImage(img, 0, 0)
        }}
        onDrag={e => {
          if (e.clientX && e.clientY) {
            setImg(clickImg)
            setTop(`${e.clientY - width / 2}px`)
            setLeft(`${e.clientX - width / 2}px`)
          }
        }}
        onDragEnd={() => {
          setImg(normalImg)
        }}
        width={width ? width + "px" : ""}
        src={Img}
        alt={alt ? alt : "none"}
        style={{
          position: "absolute",
          top: `${top}`,
          left: `${left}`,
          cursor: "pointer",
        }}
      />
    </div>
  )
}
