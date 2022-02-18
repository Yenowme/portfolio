import * as React from "react"
import Img from "gatsby-image"
import * as Style from "./project.module.css"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Project = ({
  title,
  date,
  subTitle,
  skills,
  fluid,
  text,
  subText,
  body,
  ...props
}) => {
  const skill = skills.split(",").map(i => (
    <li className={Style.skill} key={i}>
      {i}
    </li>
  ))
  return (
    <div className={Style.wrap} {...props}>
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
          <div className={Style.desc}>{text}</div>
          <div className={Style.desc}>{subText}</div>
          <div className={Style.skillsWrap}>
            <ul>{skill}</ul>
          </div>
        </div>
      </div>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  )
}

export default Project
