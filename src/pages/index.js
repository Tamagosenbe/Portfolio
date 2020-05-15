import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Tweet } from "react-twitter-widgets"

const IndexPage = () => (
  <Layout>
    <SEO title="たまごせんべいのポートフォリオ" />
    <h1>ホーム</h1><div style={{ maxWidth: `50px`, marginBottom: `1.45rem` }}>
      <Image />
      
    </div>
    <p>まだポートフォリオに書ける程の実績がない（かなしい）</p>
    <p>絵を描いたり映像作ったりUnityを触ったりしています</p>
    
    <a href="https://twitter.com/Tamagosenbe_"> <img src={require('../images/twitter_bird2.png')} style={{width: `300px`}} alt="ツイッター"/></a>
   <p></p>
   <a href="https://github.com/Tamagosenbe"> <img src={require('../images/GitCat.png')} style={{width: `200px`}} alt="github"/></a>
    
    <p>　</p>
    <div style={{ color: `black`, fontSize: `32px` }}>ゲーム作ったりしてます。</div>
    <p>　　</p>
    <p>こんな<a href="https://unityroom.com/games/tamagosenbei-hataraitaramake">シューティングゲーム</a>とか。</p>
    
    <div style={{ color: `black`, fontSize: `22px` }}> プレイしてみるとこんなかんじです。</div>
    <Tweet tweetId="1242852168660480001"/>
    <p>ちなみにこのゲームは<a href="https://twitter.com/Vane11ope">ヴァネロピさん</a>という一流ツイッタラーをモデルにしてます♪(๑ᴖ◡ᴖ๑)♪</p>
    <div style={{ color: `black`, fontSize: `12px` }}>なんでも、トマトとしいたけが苦手だそう。美味しいのにね。</div>
    <div style={{ color: `black`, fontSize: `12px` }}>それからタイトルに関してはヴァネロピさんが決めたものなので悪しからず</div> 
    <div style={{ color: `black`, fontSize: `12px` }}>　</div>
    
    <Link to="/page-2/">何か</Link>
    <p>　</p><p>　</p><p>　</p>
    
    


  </Layout>
)

export default IndexPage
