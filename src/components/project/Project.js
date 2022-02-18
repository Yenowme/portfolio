import * as React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Project = ({ title, date, subTitle, text, skills, fluid, ...props }) => {
  const textlen = text.length - 1
  const desc = text.reduce((acc, cur, idx) => {
    if (idx === textlen) return acc
    return acc + cur.children[0].value + "\n\n"
  }, "")

  return (
    <div {...props}>
      <h3>{title}</h3>
      <Img fluid={fluid} />
      <p>{date}</p>
      <p>{subTitle}</p>
      <p>{skills}</p>
      <div>{desc}</div>
    </div>
  )
}

export default Project
