# AGENTS.md — okachinJr.github.io（おかちんJr. 個人サイト）

GitHub Pages で公開する個人サイト（カスタムドメイン: `www.okachinjr.com`）。
初代ゲームボーイ（DMG）の画風を使った、ヒーロー画像＋3リンク＋フッターのシンプルな1ファイル構成。2026-07-12 にゲームタイトル画面型の旧構成から整理した。旧版は Git 履歴にある。

**このファイルはデザインハーネス（デザイン保護規則）を兼ねる。「不変条件」と書かれた項目を破る変更は、ユーザーが明示的に指示した場合を除き禁止。**

## ファイル構成

| パス | 役割 |
|---|---|
| `index.html` | サイト本体。CSS/JS 完全インライン、これ1つで完結 |
| `assets/images/hero-home-v2.png` | 現行メインビジュアル（後述の通り変更禁止） |
| `assets/images/hero-title-screen.png` | 旧タイトル画面。現行デザインでは未使用だが、参照・履歴用として削除禁止 |
| `assets/icons/*.png` | アイコン素材6枚。**現デザインでは未使用だが削除禁止**（ユーザーが Pixquare 製アイコンに差し替えて将来使う計画あり） |
| `CNAME` | カスタムドメイン設定。**変更・削除・リネーム禁止**（消すと公開ドメインが壊れる） |
| `design-harness-c/` | **このサイトとは無関係**。別デザイン（レトロホームページ型）で新規サイトを作るための持ち出し用キット。`index.html` にこのフォルダの様式を適用しないこと。指示がない限り編集しないこと（詳細は同フォルダの README.md） |
| `.codex/config.toml` | Codex 設定 |
| `.claude/launch.json` | Claude Code 用ローカルサーバー設定（Codex は使わなくてよい） |

## デザインハーネス（不変条件）

### 1. カラーパレット — 5色のみ
`index.html` の `:root` に定義済み。**この5色以外の色コードを追加しない。**

```css
--gb0: #1e3a20;  /* 最暗・インク・背景 */
--gb1: #4a6b3d;  /* 暗めの中間色・セクション背景 */
--gb2: #8fae5e;  /* 中間色・補助テキスト */
--gb3: #cfe0a0;  /* 明るい中間色・ボタン背景 */
--gb4: #e4eec6;  /* 最明・本文テキスト・ウィンドウ背景 */
```

唯一の例外: メニューオーバーレイの `rgba(30, 58, 32, 0.75)`（--gb0 の半透明版）。新たな半透明色は追加しない。

### 2. タイポグラフィ — 2書体のみ
- 日本語・本文: `'DotGothic16', sans-serif`
- 英字の見出し・装飾・ボタン: `'Press Start 2P', monospace`
- 読み込みは Google Fonts の `<link>` のみ。他のフォント・ウェイト追加禁止。

### 3. ピクセル表現の規律
- `border-radius` 禁止（角はすべて直角。ピクセル風の角落としは clip-path で行う）
- `box-shadow` はオフセットのみ可（例: `4px 4px 0 var(--gb0)`）。**ぼかし（blur値）禁止**
- グラデーション禁止（背景パターン用の `repeating-linear-gradient` 等でハードエッジを作る場合のみ可）
- 画像・ドット表現には `image-rendering: pixelated` を必ず適用
- アンチエイリアスで滑らかに見える表現（大きな `opacity` トランジション、ソフトなフェード等）を新規に足さない

### 4. モーションの規律
- アニメーション・トランジションのタイミング関数は `steps()` を原則とする（既存の `linear 0.05s` の押下演出のみ例外）
- `ease` / `ease-in-out` / 長い smooth トランジション禁止（レトロ感が消えるため）
- 新規アニメーションを足す場合も必ず `@media (prefers-reduced-motion: reduce)` で停止させる

### 5. 構造の不変条件（セクション順序を維持）
1. 4:3ヒーロー画像（サイト内で唯一の主役）
2. 主リンク `MY WEBSITE`（高さ80px）
3. 副リンク `note` / `X`（2列、高さ64px以上）
4. 控えめな `© 1995 OKACHIN JR.` フッター

`PRESS START`、操作説明、コマンドメニュー、`LINKS`見出し、`LINK 01〜03`、大型集合バナーを再追加しない。

### 6. 実装の規律
- 1ファイル構成を維持（CSS/JSはインライン、外部JSライブラリ・ビルドツール導入禁止）
- バニラJSのみ。`console.log` を残さない
- リンクの `target="_blank"` には必ず `rel="noopener noreferrer"`
- `:focus-visible` のアウトラインを消さない
- 既存内容を全削除・再生成せず、差分修正（apply_patch）で対応する

## ユーザーのデザイン嗜好（旧版から引き継ぎ）

- ゲームボーイ / ゲームボーイアドバンス時代のピクセルアート表現を好む
- **ゲームボーイ本体そのもののUI要素（物理ボタン、電源ランプ、筐体の枠など）を安易に追加しない。**ユーザーが明示した場合のみ取り入れる
- アイコン画像を使う場合は「画像そのもの」を見せる方針。画像の外側にカード枠・追加ボーダー・装飾背景・影付きパネルを追加しない

## ヒーロー画像に関する注意（不変条件）

- 対象: `assets/images/hero-home-v2.png`
- ユーザーが明示しない限り、**画像の差し替え・加工・レイアウト変更をしない**
- 比率: 4:3
- SHA256: `4D4682B845A5176B52E97B1F292C00F913ABFD2B84DAC6ADD2EE46CD461BB7FD`
- 重要な変更後はハッシュ確認を推奨:

```powershell
Get-FileHash -Algorithm SHA256 assets\images\hero-home-v2.png
```

## アイコン画像の扱い（将来の差し替え用メモ）

ユーザーは Pixquare で 64x64 キャンバスのピクセルアートアイコンを作成する予定。差し替え時の推奨:

- 形式: PNG（透過あり推奨）、元絵 64x64、書き出し 256x256 または 512x512
- 拡大方式: 最近傍 / Nearest Neighbor
- 6枚すべて同じキャンバスサイズ・同じ余白設計にする

## 変更後の検証チェックリスト（毎回実施）

- [ ] 375px幅で横スクロールが発生しない（`scrollWidth === clientWidth`）
- [ ] コンソールにエラー・警告・ログがない
- [ ] 表示リンクが `MY WEBSITE` / `note` / `X` の実リンク3件だけになっている
- [ ] `PRESS START` / `COMMAND?` / `LINKS` / `LINK 01〜03` がない
- [ ] 使用色が既定5色（+オーバーレイの半透明1色）のみ
- [ ] 375px幅でヒーロー、主リンク、副リンク2列、フッターの階層が崩れない
- [ ] `CNAME` が変更されていない

## 公開（GitHub Pages）に関する注意

- `main` ブランチへの push = 本番公開（`www.okachinjr.com` に即反映）。push 前に上記チェックリストを必ず通すこと
- リンクの `href="#"`（TODO コメント付き）が残ったまま公開しない
- シークレット（APIキー等）は存在しない構成を維持する。フォーム・API・外部スクリプトを追加する場合は事前にユーザーへセキュリティ影響を報告する

## Python 実行環境（Codex）

画像検証や簡単な処理に Python を使う場合は、Codex 同梱の Python を優先する:

```text
C:\Users\wakat\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe
```

ローカル表示確認（任意）:

```text
<上記python.exe> -m http.server 3999
```

## Playwright 実行環境（Codex）

- Playwright で表示・操作検証を行う場合は、Codex 環境に同梱・インストール済みの **Chromium** を使用すること。
- Google Chrome を既定ブラウザとして要求する経路は避け、Chrome の追加インストールを行わないこと（ユーザーが明示的に指示した場合を除く）。
- Playwright CLI が Google Chrome を要求して起動できない場合は、`visual-qa` の仮想環境にある Playwright から `pw.chromium.launch()` を使用するなど、既存 Chromium で成立する経路へ切り替えること。
