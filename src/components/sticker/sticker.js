import React, { useCallback, useState } from "react"

import * as Style from "./sticker.moduel.css"

export default function Sticker({
  normalImg,
  clickImg,
  hoverImg,
  width,
  height,
  alt,
  url,
  positionTop,
  positionLeft,
  rotate,
}) {
  const [isDrag, setIsDrag] = useState(false)
  const [Img, setImg] = useState(normalImg)
  const [top, setTop] = useState(positionTop)
  const [left, setLeft] = useState(positionLeft)
  const [zIndex, setZIndex] = useState(10)

  const move = (x, y) => {
    setTop(`${y - height / 2}px`)
    setLeft(`${x - width / 2}px`)
  }

  const onMouseMove = useCallback(e => {
    move(e.pageX, e.pageY)
  }, [])

  const onMouseDown = e => {
    setIsDrag(true)
    setZIndex(1000)
    setImg(clickImg)
    move(e.pageX, e.pageY)
    setIsDrag(true)
    document.addEventListener("mousemove", onMouseMove)
    e.stopPropagation()
  }

  const onMouseUP = e => {
    setImg(hoverImg)

    setZIndex(11)
    document.removeEventListener("mousemove", onMouseMove)
    e.target.onMouseUP = null
    e.stopPropagation()
    setIsDrag(false)
  }

  const onClick = e => {
    if (isDrag) setImg(clickImg)
    if (url) window.open(url, "_blank")
  }

  return (
    <div>
      <img
        onMouseOver={() => {
          setImg(hoverImg)
        }}
        onMouseOut={() => {
          setImg(normalImg)
        }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUP}
        onClick={onClick}
        draggable={false}
        width={width ? width + "px" : ""}
        src={Img}
        alt={alt ? alt : "none"}
        style={{
          zIndex: `${zIndex}`,
          position: "absolute",
          top: `${top}`,
          left: `${left}`,
          cursor: "pointer",
          transform: rotate ? `rotate(${rotate}deg)` : "",
        }}
      />
    </div>
  )
}
