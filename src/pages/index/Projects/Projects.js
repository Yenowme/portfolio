import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Project from "../../../components/project/Project"
import Stickers from "../Stickers/Stickers"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___order, order: ASC }) {
        nodes {
          frontmatter {
            date
            skill
            subTitle
            title
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
          mdxAST
        }
      }
    }
  `)
  const project = data.allMdx.nodes.map(i => {
    const fm = i.frontmatter
    return (
      <Project
        title={fm.title}
        date={fm.date}
        subTitle={fm.subTitle}
        skills={fm.skill}
        text={i.mdxAST.children}
        key={i.id}
        fluid={fm.featuredImage.childImageSharp.fluid}
      />
    )
  })
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Stickers></Stickers>
      {project}
    </div>
  )
}

export default Projects
