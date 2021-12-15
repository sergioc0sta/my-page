import * as React from "react"
import Layout from "../components/layout"
import styled from '@emotion/styled'
import './styles'

import Home from '../components/home2'

const Primeira = styled.div`
  background: red;
  height: 100vh;
`

const Segunda = styled.div`
background: blue;
height: 100vh;`

const Terceira = styled.div`
background: green;
height: 100vh;`

const Quarta = styled.div`
background: white;
height: 20vh;`

const IndexPage = () => (
  <Layout>
    <Home />
  </Layout>
)

export default IndexPage
