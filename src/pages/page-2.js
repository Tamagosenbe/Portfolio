import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>
      日記的な
    </h1>
    <div style={{ color: `pink`, fontSize: `32px` }}>わっふぅっ!</div>
    <p>・</p>

    
    <div style={{ color: `black`, fontSize: `22px` }}>☆2020-04-22</div>

    <p>　ポートフォリオ開設・公開</p>
    <p>　ついったーボタン実装、背景色設定</p>
    <p>　文字色の変更ができなくてキレる</p>
    <p>　あとは、ツイートの展開もできるようにしたいなあなど</p>
    <p>　…てかポートフォリオってなんだっけ、少なくともこんなの書くものじゃあないよなあ</p>
    
    <p>　</p>

    <div style={{ color: `black`, fontSize: `22px` }}>☆2020-04-24</div>
    <p>　ツイートの展開ができるようになった</p>
  
    <div style={{ color: `black`, fontSize: `22px` }}>☆2022-02-28</div>
    <p>　久々の更新。Twitterはアカウント消しているからそのうちトップページのツイッター紐づけをなんとかしたい。</p>
    
    
   
    <Link to="/">もどる</Link>
  </Layout>
)


export default SecondPage
