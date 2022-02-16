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
  const [timer, setTImer] = useState(0)
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

  const onMouseDown = async e => {
    setZIndex(1000)
    setImg(clickImg)
    move(e.pageX, e.pageY)

    const st = setTimeout(() => {
      setIsDrag(true)
    }, 300)
    setTImer(st)
    document.addEventListener("mousemove", onMouseMove)
    e.stopPropagation()
  }

  const onMouseUP = e => {
    document.removeEventListener("mousemove", onMouseMove)
    e.target.onMouseUP = null
    e.stopPropagation()
    if (isDrag) {
      setImg(hoverImg)
      setZIndex(11)
      setIsDrag(false)
    } else {
      setImg(clickImg)
      if (url) window.open(url, "_blank")
      clearTimeout(timer)
      setImg(normalImg)
    }
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
