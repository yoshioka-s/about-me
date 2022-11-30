import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        yoshioka-s
      </h1>
      <p>
        <Link to="experiences">職務経験: Human side</Link>
      </p>
      <p>
        職務経験: Tech side (Coming soon)
      </p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
