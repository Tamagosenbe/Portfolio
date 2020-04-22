import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="たまごせんべいのポートフォリオ" />
    <h1>ようこそ</h1>
    <p>まだポートフォリオに書ける程の実績がない（かなしい）</p>
    <p>絵を描いたり映像作ったりUnityを触ったりしています</p>
    

  

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">何か</Link>
    <a href="https://twitter.com/Tamagosenbe_"> <img src={require('../images/twitter_bird.png')} style={{width: `300px`}} alt="ツイッター"/></a>

  </Layout>
)

export default IndexPage
