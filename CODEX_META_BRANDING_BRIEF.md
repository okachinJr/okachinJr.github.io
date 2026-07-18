# CODEX_META_BRANDING_BRIEF.md — OGP・theme-color・ファビコン整備

サイト本体（`index.html`）の見た目には一切手を触れず、「サイトの外側での見え方」を整える3つの改善を行う。

| 改善 | 効く場所 |
|---|---|
| OGP メタタグ＋OG画像 | X などの SNS で URL を共有したときのプレビューカード |
| theme-color メタタグ | スマホブラウザのアドレスバーの色 |
| ファビコン刷新 | ブラウザのタブ・ブックマーク・ホーム画面アイコン |

## 必読・遵守事項

- 作業前に必ず `AGENTS.md` を読み、デザインハーネス（不変条件）に従うこと。
- 特に以下を厳守する。
  - 使用色は既定5色（`--gb0`〜`--gb4`）のみ。新しい色コードを追加しない。
  - 採用済み素材（`logo-home-v1.png` / `hero-character-desktop-v3.png` / `nav-*-v1.png` ほか）の**元ファイルを変更・上書き・リネームしない**。コピーを使った切り出し・縮小・合成で新素材候補を作るのは可（新素材の提案として扱う）。
  - 新素材はユーザーの明示承認を得るまで `index.html` に組み込まない。未承認素材を組み込んだ状態で `main` へ push しない。
  - `CNAME` に触れない。既存内容は全削除・再生成せず差分修正で対応する。
  - ピクセル素材の拡縮は Nearest Neighbor のみ。アンチエイリアスをかけない。
- 本作業のスコープ外: ヒーロー構図、A案/B案の選定、ナビ、レイアウト、CSS。`index.html` への変更は `<head>` 内のメタタグ・`<link>` 追加/差し替えに限定する。

## 作業の流れ（承認ゲート2段階）

1. **ゲート1: 素材候補の提示** — OG画像候補とファビコン候補を単体ファイルとして生成し、ユーザーへ提示。承認を得るまで次工程へ進まない。
2. **ゲート2: 組み込みと公開** — 承認された素材だけを `index.html` へ差分で組み込み、ローカル検証結果を報告。ユーザーの push 許可を得てから `main` へ push する。

theme-color は素材承認が不要なため、ゲート2 の差分に含めてよい。

---

## タスク1: theme-color メタタグ

`index.html` の `<head>` に次の1行を追加する。

```html
<meta name="theme-color" content="#1e3a20">
```

- `#1e3a20` は既定5色の `--gb0`（公開中サイトの背景色）と一致させる。他の色にしない。

## タスク2: OGP メタタグ＋OG画像

### OG画像の仕様

- サイズ: **1200×630px**（SNS標準の 1.91:1）。PNG。
- 保存先: `assets/meta/og-home-v1.png`（`assets/meta/` フォルダを新設。候補段階では `assets/candidates/og-home-v1/` に `og-home-a.png` のように案ごとの単体ファイルで保存し、採用ファイルのみ `assets/meta/` へ移す）。
- 構成素材: 採用済みの `logo-home-v1.png`（680×214）と `hero-character-desktop-v3.png`（697×520）の**コピー**を合成する。両方とも**等倍（×1）配置**なら 1200×630 に無理なく収まる。拡大する場合は整数倍＋Nearest Neighbor のみ。
- 背景: `--gb4`（#e4eec6）ベース。サイトと同様のハードエッジ格子（`--gb3` の線）を敷いてよい。使用色は5色のみ。
- レイアウト方針: PC採用構図と同じく「左にロゴ・右にキャラクター、ロゴが前面」を基本に、余白違いなどで**2〜3案**を単体ファイルで提示する。
- 注意: これは OGP 専用の完成画像であり、サイト本体のヒーローを完成画像1枚へ戻すものではない（本体は引き続きCSSレイヤー構成を維持する）。

### メタタグ

承認された OG画像の組み込み時に、`<head>` へ以下を追加する（`og:description` は既存の `meta description` と同文にする）。

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.okachinjr.com/">
<meta property="og:site_name" content="おかちんJr.">
<meta property="og:title" content="おかちんJr. | 個人サイト">
<meta property="og:description" content="おかちんJr.の個人サイト。自作サイト、note、Xへのリンクを掲載しています。">
<meta property="og:image" content="https://www.okachinjr.com/assets/meta/og-home-v1.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="ja_JP">
<meta name="twitter:card" content="summary_large_image">
```

- `og:image` は必ず絶対URL（`https://www.okachinjr.com/...`）にする。相対パスでは SNS 側が画像を取得できない。

## タスク3: ファビコン刷新

### 候補の作り方

- モチーフ候補を**複数（3案程度）**、単体ファイルで提示する。例:
  - A: 主人公の顔（`hero-character-desktop-v3.png` のコピーから顔部分を切り出し）
  - B: ロゴの「お」1文字（`logo-home-v1.png` のコピーから切り出し)
  - C: ビリヤード球AI や魔王など、サブキャラクターの顔
- **16×16px で判別できるか**を最優先の判断基準にする。切り出し縮小で潰れる場合は、モチーフを保ったままドットを打ち直した簡略版を候補にしてよい（打ち直しは新素材提案として扱う）。
- 候補は `assets/candidates/favicon-v1/` に `favicon-a-16.png` / `favicon-a-32.png` のようにサイズ別・案別の単体ファイルで保存し、実寸プレビュー（ブラウザタブ相当の見え方が分かる比較用HTML。`reports/codex-work/` 配下）を添えて提示する。
- 使用色は既定5色のみ。

### 採用後の成果物

承認された1案について、以下を `assets/meta/` に置く。

| ファイル | サイズ | 備考 |
|---|---|---|
| `favicon-16.png` | 16×16 | 透過可 |
| `favicon-32.png` | 32×32 | 透過可 |
| `apple-touch-icon.png` | 180×180 | **非透過**にする（iOS は透過部分を黒く塗るため、背景を `--gb0` か `--gb4` で塗る） |

### メタタグ

既存のインラインSVGファビコン（`index.html` の `<link rel="icon" href="data:image/svg+xml,...">`）を削除し、以下へ差し替える。

```html
<link rel="icon" type="image/png" sizes="32x32" href="/assets/meta/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/meta/favicon-16.png">
<link rel="apple-touch-icon" href="/assets/meta/apple-touch-icon.png">
```

---

## AGENTS.md の更新

採用・組み込み完了後、`AGENTS.md` の「ファイル構成」表へ `assets/meta/` の行を差分で追記する（役割: OGP画像・ファビコン等のメタ素材。ユーザー承認済み）。他の節は変更しない。

## 検証チェックリスト（push 前）

- [ ] `index.html` の差分が `<head>` 内のメタタグ・`<link>` に限られている（body・CSS・JS 無変更）
- [ ] ローカルサーバー（`python -m http.server 3999` 等）で表示し、タブに新ファビコンが表示される
- [ ] コンソールにエラー・警告・404 がない（旧SVGファビコン参照の残骸がない）
- [ ] 375×812 / 768×1024 / 1440×900 で横スクロールが発生しない（見た目は変更前と同一のはず）
- [ ] `logo-home-v1.png` / `hero-character-desktop-v3.png` の SHA256 が `AGENTS.md` 記載値と一致する（元ファイル無変更の確認）
- [ ] `CNAME` が変更されていない
- [ ] OG画像・ファビコンの使用色が既定5色のみである
- [ ] 未承認の候補ファイルが `index.html` から参照されていない

## push 後の確認

- [ ] `https://www.okachinjr.com/assets/meta/og-home-v1.png` が直接開ける
- [ ] OGP チェッカー（例: opengraph.xyz など）で `https://www.okachinjr.com/` のカードプレビューが正しく表示される
- [ ] 実機スマホで開き、アドレスバーが深緑（#1e3a20）に染まる
- [ ] タブ・ブックマークに新ファビコンが表示される（反映にキャッシュクリアが必要な場合あり）
