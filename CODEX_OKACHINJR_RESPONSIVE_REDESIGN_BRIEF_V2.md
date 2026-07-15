# CODEX_OKACHINJR_RESPONSIVE_REDESIGN_BRIEF_V2.md

## 目的

`https://www.okachinjr.com/` を、**スマホでは見やすく、PCでは弱く見えない**個人サイトとして再設計・実装してください。

今回の方向性は以下です。

- **構造の参考**: `https://www.itousa.jp/` のような  
  **「大きなメインビジュアル + 小さめのアイコンナビ + 文字ラベル」** 構成
- **背景**: 単色ベタではなく、**ドットまたは格子（グリッド）パターン**
- **ヒーロー画像**: 旧ヒーローを流用せず、**完全に新しい画像を GPT-Image 2 で生成**
- **ヒーロー画像の扱い**: 四角い画像のポン置きではなく、**背景透過のキャラクター / ロゴ素材を背景の上に重ねる**
- **アイコンレイアウト**: **アイコン上・文字下**
- **レスポンシブ対応**: スマホとPCで、**サイズだけでなくレイアウトそのものを調整する**

---

## 最重要方針

### 1. スマホ版をそのままPCに拡大しない
今後は、PCでは「余白だらけの小さな1カラム」に見えないよう、**PC向けの見せ方を別設計**してください。

### 2. 旧ヒーローを引き継がない
旧ヒーローの画角・構成・レイアウトを無理に引き継ぐと、中途半端になります。  
**完全に別物として新規生成**してください。

### 3. 背景はCSS主体で作る
背景パターンは、できるだけ**画像ではなくCSSで表現**してください。  
理由:
- 微調整しやすい
- 軽い
- レスポンシブ対応しやすい
- 配色変更が容易

### 4. リンクは「アイコン上・文字下」
今回のナビゲーションUIは、**小さなアイコンの下にテキストラベル**を置く構成で統一してください。

### 5. ダミーを置かない
未実装の空リンク・仮置き・ダミー項目は禁止です。  
ただし、PCで情報量が足りない場合は、**内部アンカーセクション**（About / Works / Contact など）を実装して補ってください。

---

## 実装ゴール

トップページを、以下のような構成へ再設計してください。

1. 背景パターン（ドットまたは格子）
2. ヒーローエリア
   - 背景の上に、透過のロゴ / キャラクター素材を重ねる
   - PCではしっかり見栄えするサイズ感
   - スマホでは縦に収まりよく
3. アイコンナビ
   - アイコン上・文字下
   - 小さくかわいく、でも押しやすく
4. 必要であれば下部に簡単な補助セクション
   - About
   - Works
   - Contact
   - Links
5. 小さなフッター

---

## 情報設計方針

### 必須リンク / 導線
最低限、以下は導線として見せてください。

- note
- X
- MY WEBSITE（自作サイト）

### PCで弱く見えないための推奨
外部リンクが3つだけだと、PCでは密度不足になりやすいです。  
そのため、必要に応じて以下の内部セクションを追加してください。

- About
- Works
- Contact

### ナビゲーション数の目安
推奨は **6項目前後** です。

例:
- note
- X
- MY WEBSITE
- About
- Works
- Contact

ただし、**実体のない項目は作らない**こと。  
内部セクションを追加する場合は、必ず実際のコンテンツを用意してください。

---

## レスポンシブ設計方針

### ブレークポイント目安
- Mobile: `~767px`
- Tablet: `768px ~ 1023px`
- Desktop: `1024px~`

### Mobile
- 1カラム主体
- ヒーローは縦に収める
- アイコンナビは `2列 x 3行` または `3列 x 2行`
- 余白は控えめだが詰めすぎない

### Desktop
- ヒーローを十分大きく見せる
- アイコンナビの横幅を広げる
- 必要ならヒーロー内で
  - ロゴ
  - キャラ
  - サブコピー
  をレイヤー構成で見せる
- 余白は広く使うが、「空白」ではなく「構成」として使う

### 重要
PCでは、単に `max-width` を大きくするだけでなく、
- ヒーローのサイズ
- ヒーローの配置
- アイコン群の並び
- セクション間余白
- 背景装飾の見え方
を調整してください。

---

## レイアウト仕様

### 全体
- ベースは縦スクロール1ページ
- コンテンツの最大幅は、スマホとPCで調整
- ただしPCでも極端に細い中央寄せだけにしないこと

### 推奨コンテナ幅
- Mobile: `min(100% - 24px, 420px)`
- Tablet: `min(100% - 40px, 720px)`
- Desktop: `min(100% - 80px, 1100px)`

### ヒーローエリア
推奨構成:

#### Desktop
- 左: ロゴ / タイトル / サブコピー
- 右: 透過キャラクター
または
- 中央: ロゴ + キャラを重ねた1つの構成

#### Mobile
- 上: ロゴ
- 下: キャラクター
- その下にアイコンナビ

### アイコンナビ
- アイコン上・文字下
- アイコンサイズは小さめ
- タップ領域は十分に確保
- 1つ1つをカードにしてもよいが、重くしすぎない

---

## 背景デザイン方針

### 方向性
アップロードされた参考イメージのように、**ポップで見やすい背景パターン**は相性が良いです。  
ただし、背景は主役ではありません。ヒーローとアイコンを邪魔しない強さにしてください。

### 推奨背景案
以下のどちらかを採用してください。

#### 案A: ドット背景
- 明るめのベースカラー
- 規則的な小ドット
- うっすら見える程度
- ヒーローの背後では主張しすぎない

#### 案B: 格子 / グリッド背景
- 薄い線の格子
- ごく薄いコントラスト
- レトロな下敷き感・ノート感・UI感が出る

### 実装方針
背景は**CSSで実装**してください。  
`repeating-linear-gradient` や `radial-gradient` を使って構築してください。

### 例（参考）
```css
body {
  background-color: #f7d15a;
  background-image:
    linear-gradient(rgba(224, 126, 37, 0.22) 2px, transparent 2px),
    linear-gradient(90deg, rgba(224, 126, 37, 0.22) 2px, transparent 2px);
  background-size: 40px 40px;
}
```

またはドット背景例:
```css
body {
  background-color: #f7d15a;
  background-image:
    radial-gradient(rgba(224, 126, 37, 0.35) 1.5px, transparent 1.5px);
  background-size: 24px 24px;
}
```

### 背景の注意点
- 背景の彩度・コントラストを上げすぎない
- ヒーロー背後の可読性を損なわない
- ナビアイコンの視認性を邪魔しない

---

## ヒーロー素材設計方針

### 絶対方針
旧ヒーロー画像の構図や画角を流用しないこと。  
**完全に別の発想で再生成**してください。

### ヒーローは1枚の四角い完成画像にしない
以下のように、**分解して生成**することを推奨します。

#### 推奨生成素材
1. `hero-character-desktop`  
2. `hero-character-mobile`（必要なら別生成）  
3. `hero-logo`  
4. （任意）小さな装飾パーツ

### 形式
- 背景透過PNGまたは透過WebP
- できれば余白の少ない切り抜き
- Webページ上で自由に重ねられる状態にする

### ヒーロー全体の方向性
- かわいさ、遊び心、親しみやすさ
- レトロゲーム感、ドット感
- ただし「古いゲーム画面そのもの」にはしない
- UI画像ではなく、Webサイトのメインビジュアルとして成立させる

---

# GPT-Image 2 用: 画像生成指示

## 画像1: hero-character-desktop（必須）

### 目的
PC版のヒーローの主役となるキャラクター透過素材。

### 必須要件
- 背景透過
- 1人のメインキャラクター
- 元画像の構図を引き継がない
- ポーズは新規
- Webサイトのヒーローとして映える
- やや大きめに使える
- かわいく、親しみやすい
- レトロゲーム / ドット感のニュアンスがある
- ただし「ゲームタイトル画面」にはしない

### 禁止要素
- PRESS START
- ゲームUI
- コピーライト
- フレーム
- 旧ヒーローの構図の焼き直し
- 多人数の集合絵

### 推奨トーン
- playful
- retro-inspired
- clean
- charming
- character-forward
- website hero illustration

### Codexで使う生成指示文（英語）
> Create a brand-new hero character illustration for a personal website.  
> The character should be the main visual focus and must be delivered as a transparent-background asset.  
> Do not reuse or imitate the composition of the previous hero image.  
> Make the pose completely new and dynamic, suitable for a website hero section.  
> The style should feel playful, charming, and retro-game-inspired, with a slight pixel-art or dot-art influence, but it should not look like a literal old game title screen.  
> Use a clean silhouette that works well when layered over a patterned background.  
> Include only one main character.  
> Do not include any UI, menus, "PRESS START" text, copyright text, or decorative frames.  
> The result should feel like a modern personal website hero asset with retro character appeal.  
> Output as a transparent-background illustration.

---

## 画像2: hero-character-mobile（推奨）

### 目的
スマホで縦長に収まりやすいキャラクター透過素材。

### 必須要件
- 背景透過
- 1人のメインキャラクター
- PC用と同系統のデザイン
- スマホで上下に収まりやすい
- 必要なら別ポーズでもよい
- PC版より縦方向に扱いやすいシルエット

### 生成指示文（英語）
> Create a mobile-friendly transparent hero character illustration for a personal website.  
> It should match the same overall design language as the desktop hero character, but be better suited for a narrower mobile layout.  
> Use a clean silhouette and a vertically balanced composition.  
> The style should be playful, retro-inspired, charming, and suitable for layering over a patterned site background.  
> Do not include UI, menus, frames, or text.  
> The result should be a transparent-background illustration.

---

## 画像3: hero-logo（必須）

### 目的
サイトタイトル用のロゴ / タイトル素材。

### 方針
- `おかちんJr.` というタイトル表現
- Web上で重ねやすい
- 背景透過
- キャラクターと合わせた世界観
- ただし情報量は増やしすぎない

### 禁止要素
- 旧タイトル画面の再現
- PRESS START
- 長い説明文
- フレーム化されたUI

### 生成指示文（英語）
> Create a transparent logo/title asset for a personal website with the title "おかちんJr.".  
> The design should feel playful, charming, and retro-inspired, matching a cute character-based website.  
> It may have slight pixel-art or game-inspired styling, but it should not look like a literal old game screen.  
> Keep it readable and usable as a layered hero title element on top of a patterned background.  
> Do not include menus, frames, "PRESS START", or long descriptive text.  
> Output as a transparent-background asset.

---

## 画像4: icon set（必須）

### 目的
ナビゲーション用の小さなアイコン群。

### アイコン構成
最低限、以下の導線に対応するアイコンを用意してください。

- note
- X
- MY WEBSITE
- About
- Works
- Contact

ただし、実際に採用する項目だけ生成・実装してください。  
もし内部セクションを増やさない場合は、その分だけ生成数を減らして構いません。

### 重要
- 公式ロゴの完全再現にはこだわらない
- サイト全体の世界観に合う、小さな記号的アイコンにする
- 背景透過
- 1つずつ独立した素材でも、1枚シートでもよい
- ドット絵風またはシンプルなレトロアイコン風

### 生成指示文（英語）
> Create a small set of transparent navigation icons for a personal website.  
> The icons should feel playful, cute, simple, and slightly retro or pixel-inspired.  
> They should work well above small text labels in a navigation grid.  
> Keep each icon visually clear at a small size.  
> Do not make them overly detailed.  
> Prefer symbolic icons rather than exact replicas of official brand logos.  
> Output transparent-background assets suitable for web use.

---

## 画像5: small decorative accents（任意）

### 目的
背景やヒーロー周辺に散らす、小さな装飾。

### 例
- 星
- 花
- 小さなドット装飾
- ミニゲーム風パーツ
- 小さなエフェクト

### 注意
- なくてもよい
- 主役にしない
- 画面を散らかさない

### 生成指示文（英語）
> Create a small set of transparent decorative accent graphics for a playful personal website.  
> These accents should be minimal, cute, and retro-inspired, such as tiny stars, flowers, sparkles, or simple game-like motifs.  
> They must remain visually secondary and should support, not overwhelm, the main hero and navigation.  
> Output transparent-background assets.

---

## 実装指示

### ヒーロー実装
- 四角い1枚画像を置く実装は避ける
- 背景はCSS
- 前景に透過のロゴとキャラクターを重ねる
- 必要なら `position` や `grid` を用いて重ねる
- PCとスマホで配置を変える

### 推奨HTMLイメージ
```html
<section class="hero">
  <div class="hero__bg"></div>
  <div class="hero__content">
    <img class="hero__logo" src="..." alt="おかちんJr.">
    <img class="hero__character" src="..." alt="">
    <p class="hero__copy">...</p>
  </div>
</section>
```

### レスポンシブ画像
必要なら `picture` を使って、PC用 / スマホ用のキャラ画像を出し分けてください。

### ナビゲーション実装
- アイコン上・文字下
- ボタン全体を押せるようにする
- スマホでは2〜3列
- PCでは横幅を活かして再配置

### ナビの見た目
- 軽い
- 小さいが押しやすい
- かわいい
- まとまりがある
- ただのテキストリンクにしない
- ただし装飾しすぎない

---

## CSS実装方針

### 必須
- 余白は `8 / 16 / 24 / 32 / 40 / 48` ベースで揃える
- PC / Mobile で media query を使って調整する
- 背景はCSSで構築する
- アイコンと文字の関係を統一する
- クリック領域 / タップ領域を十分に確保する

### 禁止
- スマホ版をただ中央に拡大しただけのPC版
- 重すぎるカード装飾
- 大きすぎる影
- 背景の主張が強すぎる状態
- 旧ヒーローの構図流用

---

## 実装後の受け入れ条件

以下を満たしたら完了としてください。

### 必須チェック
- [ ] PCで見たときに、中央に小さいスマホ画面が置かれたような見え方になっていない
- [ ] スマホで見たときに、要素が縦に収まりよく並んでいる
- [ ] 背景がドットまたは格子になっている
- [ ] 背景は主役ではなく補助として機能している
- [ ] ヒーローは完全新規画像になっている
- [ ] 旧ヒーローの画角・構図を引き継いでいない
- [ ] ヒーロー画像は背景透過で扱われている
- [ ] ロゴ / キャラ / 背景がレイヤーとして整理されている
- [ ] ナビが「アイコン上・文字下」になっている
- [ ] ナビアイコンが小さく、かわいく、視認しやすい
- [ ] PCでしょぼく見えない
- [ ] サイト全体に遊び心がある
- [ ] GitHub Pages で問題なく表示できる

### デザインチェック
- [ ] `itousa.jp` のような「メイン画像 + 小アイコン + テキスト」の楽しさはある
- [ ] ただし `okachinjr` 独自の雰囲気がある
- [ ] 背景・ヒーロー・ナビの主従関係が整理されている
- [ ] 全体が軽く、見やすい
- [ ] ごちゃついていない

---

## Codexへの推奨作業順

1. 現行の実装を把握する
2. 旧ヒーロー依存の構造を整理する
3. PC / Mobile のレイアウト設計を分ける
4. 背景パターンをCSSで実装する
5. 新ヒーロー素材の生成プロンプトを作成し、GPT-Image 2で生成する
6. ロゴ素材を生成する
7. ナビ用アイコンを生成する
8. ヒーローセクションを透過素材前提で実装する
9. ナビをアイコン上・文字下で再構成する
10. PC表示を重点的に調整する
11. スマホ表示を再調整する
12. 不要CSS / 不要JS / 不要アセットを整理する
13. 差分と変更内容を要約する

---

## 最終成果物

Codexは最終的に以下を提出してください。

1. 修正済みコード
2. 追加・削除したファイル一覧
3. 新規生成した画像ファイル一覧
4. 生成に使ったプロンプト一覧
5. PC版でどのように見せ方を改善したかの要約
6. 今後の改善余地があれば、その提案

---

## 補足メモ

- 今回は「GB風の旧作り込み画面」を再構成する作業ではありません。
- 今回の本質は、**個人サイトとして見栄えのする、軽くて楽しいトップページへの再設計**です。
- 旧ヒーローの延長線上で考えないこと。
- **背景・ロゴ・キャラ・アイコンを分解して、Web上で再構成する**ことを重視してください。

---

## 参考URL

- 現在のサイト  
  https://www.okachinjr.com/

- 構造の参考サイト  
  https://www.itousa.jp/

- MDN: Using media queries  
  https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using

- MDN: HTML `<picture>` element  
  https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture

- MDN: `background-image`  
  https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/background-image
