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
  const [Img, setImg] = useState(normalImg)
  const [zIndex, setZIndex] = useState(10)
  const [isDrag, setIsDrag] = useState(false)

  const timerRef = useRef(0)
  const imgRef = useRef()

  const move = (x, y) => {
    const parentX = imgRef.current.parentElement.offsetLeft
    const parentY = imgRef.current.parentElement.offsetTop

    const offsetX = imgRef.current.offsetLeft
    const offsetY = imgRef.current.offsetTop

    imgRef.current.style.transform = `translate(${
      x - parentX - offsetX - width / 2
    }px ,${y - parentY - offsetY - height / 2}px)
    ${rotate ? `rotate(${rotate}deg)` : ""}`
  }

  const onMouseMove = useCallback(e => {
    move(e.pageX, e.pageY)
  }, [])

  const onMouseDown = async e => {
    setZIndex(1000)
    setImg(prev => clickImg)
    move(e.pageX, e.pageY)

    timerRef.current = setTimeout(() => {
      setIsDrag(true)
    }, 200)
    document.addEventListener("mousemove", onMouseMove)
    e.stopPropagation()
  }

  const onMouseUP = e => {
    document.removeEventListener("mousemove", onMouseMove)
    e.target.onMouseUP = null
    e.stopPropagation()
    if (isDrag) {
      setImg(() => hoverImg)
      setZIndex(11)
      setIsDrag(false)
    } else {
      setImg(() => clickImg)
      if (url) window.open(url, "_blank")
      clearTimeout(timerRef.current)
      setImg(() => normalImg)
    }
  }

  return (
    <>
      <img
        ref={imgRef}
        onMouseOver={() => {
          setImg(prev => hoverImg)
        }}
        onMouseOut={() => {
          setImg(prev => normalImg)
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
          top: `${positionTop}`,
          left: `${positionLeft}`,
          cursor: "pointer",
          transform: rotate ? `rotate(${rotate}deg)` : "",
        }}
      />
      <img src={hoverImg} alt={""} style={{ display: "none" }} />
      <img src={clickImg} alt={""} style={{ display: "none" }} />
    </>
  )
}
