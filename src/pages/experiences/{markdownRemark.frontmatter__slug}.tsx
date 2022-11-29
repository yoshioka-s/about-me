import * as React from "react"
import { graphql, PageProps } from "gatsby"

type DataProps = {
  markdownRemark: {
    html: string;
    frontmatter: {
      from: string
      to: string
      slug: string
      title: string
    }
  }
}
const BlogPostTemplate: React.FC<PageProps<DataProps>> = ({
  data,
}) =>  {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.from} ~ {frontmatter.to}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        from(formatString: "YYYY年MM月")
        to(formatString: "YYYY年MM月")
        slug
        title
      }
    }
  }
`
export default BlogPostTemplate