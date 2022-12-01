import * as React from "react"
import '@bcredi/global-css'
import '../styles/global.css'
import styled from '@emotion/styled'
import { Link } from "gatsby"

const Container = styled.div`
padding: 0 96px;
max-width: 1080px;
margin: auto;
@media (max-width: 480px) {
  padding: 0 32px;
}
`
const Header = styled.header`
margin: 10px auto;
`
const Main = styled.main`
padding: 20px 0 50px;
`
export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <Link to="/">トップへ戻る</Link>
      </Header>
      <Main>
        {children}
      </Main>
    </Container>
  )
}

