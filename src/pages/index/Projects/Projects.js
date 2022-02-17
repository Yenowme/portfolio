import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Project from "../../../components/project/Project"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          mdxAST
          frontmatter {
            title
            date
            skill
            subTitle
          }
          id
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
      />
    )
  })
  return <>{project}</>
}

export default Projects
