import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Project = ({ title, date, subTitle, text, skills, ...props }) => {
  const textlen = text.length - 1
  const desc = text.reduce((acc, cur, idx) => {
    if (idx === textlen) return acc
    return acc + cur.children[0].value + "\n\n"
  }, "")

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/42swim/g" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)
  const image = getImage(data.allFile.nodes)
  console.log(image)

  return (
    <>
      <h3>{title}</h3>
      <GatsbyImage image={image} alt={title} />
      <p>{date}</p>
      <p>{subTitle}</p>
      <p>{skills}</p>
      <div>{desc}</div>
    </>
  )
}

export default Project
