import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="たまごせんべいのポートフォリオ" />
    <h1>たまごせんべいのポートフォリオへようこそ</h1>
    <p>まだ書ける程の実績がない（かなしい）</p>
    <p>!!!.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
