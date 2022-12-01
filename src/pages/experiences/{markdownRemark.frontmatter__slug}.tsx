import * as React from "react"
import { graphql, PageProps, Link } from "gatsby"
import { Layout } from '../../components/layout.tsx'
import styled from '@emotion/styled'

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

const Period = styled.div`
margin: 20px 0;
`
const Footer = styled.div`
margin: 20px 0;
`

const BlogPostTemplate: React.FC<PageProps<DataProps>> = ({ data }) =>  {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Period>{frontmatter.from} ~ {frontmatter.to || '現在'}</Period>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Footer>
        <Link to="/experiences">← 職務経歴に戻る</Link>
      </Footer>
    </Layout>
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
