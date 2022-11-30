import * as React from "react"
import { graphql, PageProps, Link } from "gatsby"

type DataProps = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          from: string
          to: string
          slug: string
          title: string
        }        
      }
    }[]
  }
}
const Experiences: React.FC<PageProps<DataProps>> = ({ data }) =>  {
  const pages = data.allMarkdownRemark.edges.map(({ node }) => node).sort((node, previous) => {
    return node.frontmatter.from < previous.frontmatter.from ? -1 : 1
  })
  return (
    <div>
      <h1>経験と学び</h1>
      {pages.map((node) => (
        <div key={node.frontmatter.slug}>
          <Link to={`/experiences/${node.frontmatter.slug}`}>
            {node.frontmatter.title} ({node.frontmatter.from} ~ {node.frontmatter.to})
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Experiences

export const pageQuery = graphql`
  query ExperiencesQuery {
    allMarkdownRemark {
      edges{
        node {
          frontmatter {
            from
            to
            slug
            title
          }        
        }
      }
    }
  }`
