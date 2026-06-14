# Project Notes for Codex

このリポジトリは、GitHub Pages で公開する `okachinJr.github.io` の個人サイトです。  
次のセッションでも作業を滑らかに再開できるよう、このプロジェクト固有の経緯・判断・注意点をまとめます。

## 現在のサイト構成

- フレームワークなしの静的サイトです。
- 主なファイル:
  - `index.html`
  - `styles/main.css`
  - `scripts/main.js`
  - `assets/images/hero-title-screen.png`
  - `assets/icons/*.png`
- 現在の画面構成は、ヒーロー画像の下に6個のアイコン画像を3列 x 2段で並べる構成です。
- `PROJECTS`, `NOTES`, `CONTACT`, `Thanks for stopping by!` の旧パネル構成は、現在の表示から外しています。
- 各アイコンのリンク先は未確定です。現状は `href="#"` と `data-link-slot` で仮置きし、クリック時に `COMING SOON` のトーストを出します。

## デザイン方針

- ユーザーはゲームボーイ / ゲームボーイアドバンス時代のピクセルアート表現を好みます。
- 全体の雰囲気は Game Boy 風のグリーン系、低解像度、ドット感を重視します。
- ただし、ゲームボーイ本体そのもののUI要素、物理ボタン、電源ライトなどを安易に追加しないでください。ユーザーが明示した場合のみ取り入れます。
- ヒーロー画像はサイトの中心要素です。ユーザーが明示しない限り、`assets/images/hero-title-screen.png` は変更しないでください。
- ヒーロー画像のレイアウトも、ユーザーが明示しない限り変更しないでください。
- アイコンは「画像そのもの」を見せる方針です。画像の外側にカード枠、追加ボーダー、装飾背景、影付きパネルを追加しないでください。

## ヒーロー画像に関する注意

- 対象ファイル: `assets/images/hero-title-screen.png`
- 以前確認したSHA256:
  - `64A5784199E72BD0455DB1E75CE6555C6623BFD46474DDF031E32A722286C60D`
- ヒーロー画像を触らない作業でも、重要な変更後は必要に応じてハッシュ確認してください。

## アイコン画像の扱い

現在参照しているアイコン:

- `assets/icons/game.png`
- `assets/icons/web-app.png`
- `assets/icons/pixel-art.png`
- `assets/icons/x.png`
- `assets/icons/note.png`
- `assets/icons/instagram.png`

ユーザーは Pixquare で64x64キャンバスのピクセルアートアイコンを作成する予定です。差し替え時の推奨は以下です。

- 形式: PNG
- 背景: 透過ありが望ましい
- 元絵: 64x64
- 書き出し: 256x256 または 512x512
- 拡大方式: 最近傍 / Nearest Neighbor
- 6枚すべて同じキャンバスサイズ・同じ余白設計にする
- 既存の生成PNGと解像度を完全一致させる必要はありません。

差し替えは基本的に同名ファイルを置き換えれば `index.html` 側の変更なしで反映できます。

## 実装方針

- 既存内容を全削除・再生成せず、差分修正で対応してください。
- 手編集は `apply_patch` を使ってください。
- CSSでは `image-rendering: pixelated;` を維持してください。
- アイコン表示サイズはCSSで調整し、画像ファイルの解像度差に依存しすぎないようにしてください。
- レスポンシブ時も基本は3列 x 2段を維持します。極端に狭い画面で崩れる場合のみ、ユーザーに相談して変更してください。
- 見た目の確認は、ユーザーが `file:///C:/Users/wakat/Desktop/WORK/project-devs/okachinJr.github.io/index.html` で開いていることが多いです。

## よくある確認コマンド

ヒーロー画像のハッシュ確認:

```powershell
Get-FileHash -Algorithm SHA256 assets\images\hero-title-screen.png
```

アイコン参照の確認:

```powershell
rg -n "assets/icons|icon-launcher|launcher-item|data-link-slot" index.html styles/main.css scripts/main.js
```

未使用・変更状況の確認:

```powershell
git status --short
```

## Python 実行環境

画像検証や簡単な画像処理にPythonを使う場合は、原則としてCodex同梱のPythonを使ってください。

```text
C:\Users\wakat\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe
```

システム全体のPythonではなく、このパスを優先します。

