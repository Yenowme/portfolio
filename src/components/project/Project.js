import * as React from "react"
import Img from "gatsby-image"
import * as Style from "./project.module.css"

const Project = ({ title, date, subTitle, text, skills, fluid, ...props }) => {
  const textlen = text.length - 1
  const desc = text.reduce((acc, cur, idx) => {
    if (idx === textlen) return acc
    return acc + cur.children[0].value + "\n\n"
  }, "")
  const skill = skills.split(",").map(i => (
    <li className={Style.skill} key={i}>
      {i}
    </li>
  ))
  return (
    <div {...props}>
      <div className={Style.titleWrap}>
        <h3 className={Style.title}>{title}</h3>
        <p className={Style.date}>{date}</p>
      </div>
      <div className={Style.contentWrap}>
        <div className={Style.img}>
          <Img fluid={fluid} />
        </div>
        <div className={Style.desWrap}>
          <p className={Style.subTitle}>{subTitle}</p>
          <div className={Style.desc}>{desc}</div>
          <div className={Style.skillsWrap}>
            <ul>{skill}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
