import * as React from "react"
import * as Style from "./divider.module.css"

export default function Divider({ title }) {
  return (
    <div className={Style.wrap}>
      <div className={Style.line}></div>
      <h2 className={Style.h2}>{title}</h2>
      <div className={Style.line}></div>
    </div>
  )
}
