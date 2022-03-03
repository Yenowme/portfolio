import React, { useCallback, useRef, useState } from "react"

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

  const target = useRef()

  const move = (x, y) => {
    const shiftX = target.current.parentElement.offsetLeft
    const shiftY = target.current.parentElement.offsetTop

    setTop(`${y - shiftY - height / 2}px`)
    setLeft(`${x - shiftX - width / 2}px`)
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
    }, 200)
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
    <div ref={target}>
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
