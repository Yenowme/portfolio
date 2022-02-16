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
  //const [isDrag, setIsDrag] = useState(false)
  //const [isClick, setIsClick] = useState(false)

  const [Img, setImg] = useState(normalImg)
  const [top, setTop] = useState(positionTop)
  const [left, setLeft] = useState(positionLeft)
  const [zIndex, setZIndex] = useState(10)
  //if (url) consolez.log("drag", isDrag, "click", isClick)

  let isDrag = false
  let isClick = false
  console.log(isDrag, isClick)

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

    isClick = true
    console.log("seIsClick True", isClick)

    setTimeout(() => {
      isDrag = true
      console.log("setIsDrag", isDrag)
      if (!isClick) {
        isDrag = false
        console.log("setIsDrag", isDrag)
      }
    }, 300)

    document.addEventListener("mousemove", onMouseMove)
    e.stopPropagation()
  }

  const onMouseUP = e => {
    document.removeEventListener("mousemove", onMouseMove)
    e.target.onMouseUP = null
    e.stopPropagation()
    console.log("mouseUp", isDrag, isClick)
    if (isDrag && isClick) {
      setImg(hoverImg)
      setZIndex(11)
      isDrag = false
      isClick = false
    } else {
      setImg(clickImg)
      if (url) alert("url~~~")
      setImg(normalImg)
      isClick = false
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
