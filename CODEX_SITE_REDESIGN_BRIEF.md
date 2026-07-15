# CODEX_SITE_REDESIGN_BRIEF.md

## 目的

`https://www.okachinjr.com/` のトップページを、現在の「冗長・重複・視覚的に重い」状態から、**シンプルで見やすい個人サイトのトップページ**へ再設計・実装してください。

この修正では、単なる見た目の微調整ではなく、**情報設計の整理・不要要素の削除・素材の作り直し・UI構造の簡素化**まで含めて対応してください。

---

## 最重要方針

今回の問題は、余白や比率の微調整以前に、**同じ役割の要素が重複していること**です。  
まず整理し、そのうえで見た目を整えてください。

### 現状の主な問題

- ヒーロー画像自体が「完成済みのゲームタイトル画面」になっている
- その直後に、HTML側でも `PRESS START` を再表示している
- `COMMAND?` と `LINKS` に、同じリンク群が二重表示されている
- `LINK 01〜03` が未完成感を出している
- 下部バナーの情報量が多く、**第2のヒーロー画像**になっている
- 操作説明がトップページの主目的に対してノイズになっている
- すべての部品の主張が強く、視線の優先順位が弱い

### 今回の解決方針

- 「ゲーム体験ページ」ではなく、**個人サイトのトップページ**として再設計する
- 演出は残してよいが、**操作や重複表示で閲覧を妨げない**こと
- 主役は1つに絞る
- リンク導線はシンプルにする
- GB風の世界観は維持する
- 再現可能なHTML/CSS/JSで実装する
- GitHub Pages で問題なく動作する構成にする

---

## 実装ゴール

トップページは、以下の構成にしてください。

1. ヒーロー画像
2. 実リンク3つ
   - MY WEBSITE（自作サイト）
   - note
   - X
3. 小さなフッターまたはコピーライト

### 採用構成

- `MY WEBSITE` は主リンクとして大きめに表示
- `note` と `X` は副リンクとして並列表示
- `LINK 01〜03` は削除
- `COMMAND?` セクションは削除
- `LINKS` セクションは削除して、代わりにリンクカードUIへ一本化
- `PRESS START` 導線は削除
- キーボード操作説明は削除
- 大型キャラクターバナーは削除、または極小フッター装飾として再制作

---

## デザイン原則

### 1. 役割の重複を禁止

同じ意味の要素を2回置かないこと。

禁止例:

- 画像内の `PRESS START` ＋ HTML上の `PRESS START`
- `COMMAND?` のリンク一覧 ＋ `LINKS` のリンク一覧
- ヒーロー画像 ＋ 強すぎる大型集合バナー

### 2. 視覚的な主役は1つ

トップページで最も目立つのはヒーロー画像だけにすること。

### 3. 余白は8px系で統一

以下の値を基準に揃えること。

- 8px
- 16px
- 24px
- 32px
- 40px

中途半端な余白値を乱発しないこと。

### 4. 色はGB風を維持

配色は現在のGB風を踏襲すること。  
ただし、全部を同じ強さにせず、明度差で階層を作ること。

### 5. GitHub Pagesで再現可能

複雑すぎる依存やビルド必須の構成は避けること。  
静的HTML/CSS/JSで成立するのが望ましい。

---

## 推奨レイアウト仕様

### ページ全体

- コンテンツ最大幅: `360px〜420px`
- 左右余白: `16px`
- 上余白: `24px`
- 下余白: `32px`

### ヒーロー画像

- 比率: `4:3`
- 役割: トップの主役
- 画像内に入れてよいもの:
  - サイト名 / ロゴ
  - 主人公キャラクター
  - 最小限の背景装飾
- 画像内に入れてはいけないもの:
  - `PRESS START`
  - コピーライト
  - UI説明
  - 操作説明
  - 明確なボタン風文言

### リンクUI

- 主リンク: `MY WEBSITE`
- 副リンク: `note`, `X`
- 主リンクの高さ: `80px`
- 副リンクの高さ: `64px〜72px`
- ボタン間隔: `12px〜16px`

### フッター / 装飾

- なくてもよい
- 置くなら小さく控えめにする
- 下部バナーを残す場合は、**第2の主役にならないこと**

---

## 作業タスク

### タスク1: 現状コードの把握

まず、現行リポジトリの構造を確認してください。

確認対象:

- HTML構造
- CSS構造
- 使用画像
- JSで制御している `PRESS START` / コマンドUI の有無
- 外部リンク定義
- レスポンシブ挙動

### タスク2: 不要要素の削除

以下を削除または無効化してください。

#### 削除対象

- `PRESS START` UI
- クリックでスタートする導線
- キーボード操作説明
- `COMMAND?` セクション
- `LINKS` セクションの重複構造
- `LINK 01`
- `LINK 02`
- `LINK 03`
- 大型の集合バナー（再利用しない場合）

### タスク3: 新レイアウトの実装

以下の構造でトップページを再構築してください。

```html
<main class="site-home">
  <section class="hero">
    <!-- 新ヒーロー画像 -->
  </section>

  <section class="primary-links">
    <!-- MY WEBSITE -->
    <!-- note -->
    <!-- X -->
  </section>

  <footer class="site-footer">
    <!-- 必要最小限のコピーライト -->
  </footer>
</main>
```

### タスク4: 新素材の導入

以下の素材を、Codex上でGPT-Image 2の画像生成機能を使って新規作成してください。

実装担当のCodexは、ここで記載した指示に従って画像生成を行い、その画像をトップページに使用してください。

---

## 素材の作り直し方針

今回は最低でも以下の素材を再制作してください。

1. ヒーロー画像（必須）
2. 下部の小さな装飾用バナー、またはフッター用装飾（任意）
3. 必要であればリンクカード用の小アイコン（任意）

---

# 素材生成指示

## 素材1: 新ヒーロー画像（必須）

### 目的

トップページの主役となるキービジュアル。

### 構図要件

- 比率: `4:3`
- 画面内の主役は1人
- サイトタイトル / ロゴを含める
- キャラクターは主役1人に絞る
- 背景は情報量を抑える
- タイトル画面風の雰囲気は残してよいが、**完成済みUI画面にはしないこと**

### 必須要素

- 「おかちんJr.」というタイトル表現
- GB風モノクロ・緑系ピクセルアート
- 主人公キャラクター
- レトロゲーム風の世界観

### 禁止要素

- `PRESS START`
- `CLICK TO START`
- 操作説明
- コピーライト
- 目立つ説明文
- 複数人の大集合
- 画面内にリンクボタンを描き込むこと

### トーン

- シンプル
- 情報量少なめ
- レトロ
- かわいい
- 少しだけ装飾あり
- うるさすぎない

### Codex用画像生成指示文

以下の意図で画像生成を行うこと。

> Create a pixel-art hero image for a personal website in a retro Game Boy-inspired style.  
> Use a monochrome green palette with about 4 to 5 tonal steps.  
> The image should feel like a clean and charming retro game title visual, but not a full interactive title screen.  
> Show the site title "おかちんJr." prominently and one main protagonist character.  
> Keep the background simple, with light retro decorative elements only.  
> Do not include "PRESS START", copyright text, UI instructions, control guides, menus, or multiple character crowd scenes.  
> The result should work as a website hero image, not as a complete game screen.  
> Aspect ratio: 4:3.

### 実装時の注意

- 画像はレスポンシブで表示
- 元比率は崩さない
- ピクセル感を壊さないこと
- 可能なら `image-rendering: pixelated;` を適用

---

## 素材2: 小さな下部装飾バナー（任意）

### 目的

フッター直前またはフッター内に、小さく世界観を補強するための装飾。

### 必須条件

- なくてもよい
- 使う場合でも、主役になってはいけない
- 比率は横長
- 情報量は極力少なくする

### 推奨仕様

- 比率: `5:1` 前後
- キャラクター数: `0〜2人`
- 背景は単純
- 文字は基本なし
- 枠線もできれば控えめ

### 禁止要素

- 4人集合
- ヒーロー画像に匹敵する情報量
- タイトルの再表示
- UI風要素

### Codex用画像生成指示文

> Create a small decorative footer banner in a retro Game Boy-inspired pixel-art style.  
> Use a monochrome green palette.  
> The banner should be visually light and secondary, suitable as a footer decoration for a personal website.  
> It may include one or two small characters or simple scenery, but it must remain minimal and unobtrusive.  
> Do not include title text, UI elements, menus, or dense character group compositions.  
> This should feel like a subtle supporting visual, not a second hero image.  
> Aspect ratio: 5:1.

---

## 素材3: リンクカード用アイコン（任意）

### 目的

`note`, `X`, `MY WEBSITE` のリンクカード内で、小さく補助的に使う。

### 方針

- なくてもよい
- 使うなら単純なピクセルアイコンにする
- 装飾は最小限
- 各カードの視認性を上げる補助にとどめる

### 注意

- 公式ロゴをそのまま複製する必要はない
- 必要以上に装飾を盛らない
- 文字だけで十分なら、無理にアイコンを使わない

---

## UI実装指示

### ページ構成

以下のような情報設計にしてください。

#### 上部

- 新ヒーロー画像

#### 中段

- 主リンク: `MY WEBSITE（自作サイト）`
- 副リンク: `note`, `X`

#### 下部

- 小さなコピーライト
- 必要なら極小の装飾バナー

---

## リンク表示ルール

### 必須

- 実際に使うリンクだけ表示すること
- 未確定のリンク枠は置かないこと

### 禁止

- `LINK 01〜03` の仮置き
- 将来用プレースホルダ
- ダミーリンク

### 推奨

- 主リンクは1列
- 副リンクは2列
- ボタン全体をクリック可能にする

---

## 配色ルール

現在のGB風の方向性は維持しつつ、以下のような役割分担で整理してください。

### 推奨色役割

- ページ背景: 最暗色
- 主要パネル: 明るい緑
- 補助パネル: 中間緑
- 文字色（主要）: 最暗色
- 文字色（反転）: 明るい緑
- 枠線: 暗い緑

### 重要

- 中間色の上に中間色文字を置かない
- 文字の可読性を優先する
- 装飾より可読性を優先する

---

## CSS実装方針

### 必須

- 余白は `8 / 16 / 24 / 32 / 40` のスケールで統一
- ボックスサイズを統一
- レスポンシブ対応
- スマホ表示を優先

### 推奨

- `max-width` を設ける
- 中央寄せでコンパクトにまとめる
- 太すぎる二重枠は避ける
- 影を使うなら最小限

### 禁止

- 過剰なアニメーション
- 多重フレーム
- すべての要素を同じ強さで目立たせること

---

## 実装後の受け入れ条件

以下をすべて満たしたら完了としてください。

### 必須チェック

- [ ] `PRESS START` が削除されている
- [ ] `COMMAND?` が削除されている
- [ ] `LINKS` の重複構造が削除されている
- [ ] `LINK 01〜03` が削除されている
- [ ] ヒーロー画像が新しく差し替えられている
- [ ] 主役がヒーロー画像1つに整理されている
- [ ] 実リンクが `MY WEBSITE`, `note`, `X` の3つに絞られている
- [ ] 下部装飾が主役化していない
- [ ] モバイル表示でバランスがよい
- [ ] GitHub Pagesで正常に表示できる

### 見た目のチェック

- [ ] 「冗長さ」が減っている
- [ ] 「ゲーム画面っぽさ」は残っている
- [ ] でも「操作しないと見られないサイト」ではなくなっている
- [ ] 各部品の主張が整理されている
- [ ] リンク先への導線が直感的である

---

## Codexへの作業手順指示

以下の順番で作業してください。

1. 現在の構造を調査
2. 不要要素を削除
3. 新レイアウトを実装
4. 新ヒーロー画像を生成
5. 必要なら小型フッター装飾画像を生成
6. 画像を差し替え
7. CSSを調整
8. スマホ表示を確認
9. 不要コードを整理
10. 最終差分をまとめる

---

## 最終成果物

Codexは最終的に以下を提出してください。

1. 修正済みコード
2. 追加・削除したファイル一覧
3. 新規生成した画像ファイル一覧
4. どの問題をどう解消したかの要約
5. 必要であれば今後の改善提案

---

## 補足

この修正では、「雰囲気は残すが、構成はかなり整理する」ことが重要です。  
現在の問題は、デザインセンス以前に、**機能・演出・装飾を同時に盛り込みすぎていること**です。

やるべきことは、足すことではなく、まず削ることです。

「GB風の演出」は残して構いません。  
ただし、**GB風の画面を何枚も縦に積むのは禁止**です。

---

## 参考リンク

- 現在のサイト  
  https://www.okachinjr.com/

- Web Content Accessibility Guidelines (WCAG)  
  https://www.w3.org/TR/WCAG21/

- WCAG 2.2 Target Size  
  https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html

- Material Design: Layout and spacing  
  https://m2.material.io/design/layout/spacing-methods.html

- MDN: image-rendering  
  https://developer.mozilla.org/ja/docs/Web/CSS/image-rendering
