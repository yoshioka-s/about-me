import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import { Layout } from '../components/layout.tsx'

const IndexPage: React.FC<PageProps> = () => {
  const personalities = ['内向的', '繊細', '温厚']
  const values = ['多様性', '創意工夫', '寛容']
  const hobbies = ['サッカー', '音楽', 'パソコン']
  return (
    <Layout>
      <h1>
        yoshioka-s
      </h1>
      <section>
        <p>
          <Link to="experiences">職務経験: Human side</Link>
        </p>
        <p>
          職務経験: Tech side (Coming soon)
        </p>
      </section>
      <section>
        <h2>キーワード</h2>
        <h3>性格</h3>
        <ul>
          {personalities.map((word) => (<li>{word}</li>))}
        </ul>
        <h3>価値観</h3>
        <ul>
          {values.map((word) => (<li>{word}</li>))}
        </ul>
        <h3>趣味</h3>
        <ul>
          {hobbies.map((word) => (<li>{word}</li>))}
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
