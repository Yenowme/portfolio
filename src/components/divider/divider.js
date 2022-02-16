import * as React from "react"
import * as Style from "./divider.module.css"

export default function Divider({ title, ...props }) {
  return (
    <div className={Style.wrap} {...props}>
      <div className={Style.line}></div>
      <h2 className={Style.h2}>{title}</h2>
      <div className={Style.line}></div>
    </div>
  )
}
