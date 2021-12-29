import * as React from "react"
import Layout from "../components/layout"
import './styles'

import Summary from '../components/summary';
import Work from "../components/work";

const IndexPage = () => (
  <Layout>
    <Summary />
    <Work />
  </Layout>
)

export default IndexPage
