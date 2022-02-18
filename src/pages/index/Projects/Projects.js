import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Project from "../../../components/project/Project"

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
            text
            subText
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
          body
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
        text={fm.text}
        subText={fm.subText}
        key={i.id}
        body={i.body}
        fluid={fm.featuredImage.childImageSharp.fluid}
      />
    )
  })
  return <div>{project}</div>
}

export default Projects
