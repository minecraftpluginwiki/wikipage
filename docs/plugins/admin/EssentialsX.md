---
title: EssentialsX
description: サーバー運営に必要な基本コマンド・テレポート・経済機能を提供する定番総合管理プラグイン
tags: [EssentialsX, EssentialsX Team, 管理者向け]
---

# EssentialsX

**EssentialsX** は、Minecraft（Spigot / Paper / Purpur）サーバー運営においてデファクトスタンダードとなっている総合管理プラグインです。  
プレイヤー向けのホーム・テレポート・経済機能から、管理者向けのモデレーション・インベントリ操作まで、サーバーに必要な100種類以上の便利機能を提供します。

:::warning

**編集時点**での情報を元にしています。  
今後のバージョンアップで仕様変更が行われる可能性があります。

:::

## 基本情報

| 項目 | 内容 |
| :--- | :--- |
| **開発者** | EssentialsX Team |
| **対応バージョン** | 1.8.8 〜 1.21.x（最新版に常時対応） |
| **前提プラグイン** | なし（※経済機能やショップ連携に [Vault](https://www.spigotmc.org/resources/vault.34315/) の導入を強く推奨） |
| **ダウンロード** | [EssentialsX 公式サイト](https://essentialsx.net/downloads.html) / [SpigotMC](https://www.spigotmc.org/resources/essentialsx.9089/) |

---

## 公式アドオン（追加モジュール）一覧

EssentialsX は本体（コア）のほかに、機能ごとの公式アドオンが用意されています。用途に合わせて追加導入してください。

| アドオン名 | 概要 | 導入推奨度 |
| :--- | :--- | :---: |
| **EssentialsX** (コア) | 基本コマンド、テレポート、経済、管理ツールを含む本体 | **必須** |
| **EssentialsXSpawn** | `/spawn` や `/setspawn` などスポーン地点の制御機能を追加 | **強く推奨** |
| **EssentialsXChat** | プレイヤー名の前後にプレフィックス/サフィックスを付与・装飾 | 推奨 |
| **EssentialsXDiscord** | ゲーム内チャットと Discord チャンネルを双方向連携 | 任意 |
| **EssentialsXProtect** | クリーパーの爆発破壊防止や火の延焼防止などの環境保護 | 任意 |
| **EssentialsXAntiBuild** | 特定ワールドやプレイヤーの建築・破壊を細かく制限 | 任意 |

---

## 導入手順

1. **サーバーを停止する**  
   コンソールで `stop` を実行し、サーバーを完全に停止します。

2. **jar ファイルをダウンロードする**  
   [公式ダウンロードページ](https://essentialsx.net/downloads.html) から、本体である `EssentialsX.jar` と必要なアドオン（`EssentialsXSpawn.jar` など）をダウンロードします。

3. **plugins フォルダへ配置する**  
   ダウンロードした `.jar` ファイルをサーバーの `plugins/` フォルダに入れます。  
   ※経済機能（所持金・ショップ）を使う場合は、同じ場所に `Vault.jar` も配置してください。

4. **サーバーを起動する**  
   サーバーを起動すると、`plugins/Essentials/` ディレクトリと各種設定ファイルが自動生成されます。

5. **導入確認**  
   ゲーム内またはコンソールで `/plugins` を実行し、`Essentials` が緑色で表示されていれば正常に動作しています。

---

## 主なコマンド一覧

### 1. 一般プレイヤー向けコマンド
| コマンド | 説明 |
| :--- | :--- |
| `/sethome [名前]` | 現在地をホーム地点として保存します。 |
| `/home [名前]` | 保存したホーム地点へテレポートします。 |
| `/delhome [名前]` | 保存したホーム地点を削除します。 |
| `/spawn` | サーバーのスポーン地点へテレポートします。 |
| `/tpa <プレイヤー名>` | 対象プレイヤーにテレポート申請を送信します。 |
| `/tpaccept` / `/tpdeny` | 届いたテレポート申請を承認 / 拒否します。 |
| `/back` | 直前のテレポート元や、死亡した地点へ戻ります。 |
| `/warp [ワープ名]` | 設定されたワープ地点へ移動します（一覧表示も可能）。 |
| `/pay <プレイヤー名> <金額>` | 相手に所持金を送金します（要 Vault）。 |

### 2. 管理者・モデレーター向けコマンド
| コマンド | 説明 |
| :--- | :--- |
| `/setspawn [グループ]` | 現在地をスポーン地点として設定します。 |
| `/setwarp <ワープ名>` | 現在地を新しいワープ地点として登録します。 |
| `/delwarp <ワープ名>` | 指定したワープ地点を削除します。 |
| `/fly [プレイヤー名]` | 飛行モードの ON/OFF を切り替えます。 |
| `/gamemode <モード> [対象]` | ゲームモードを変更します（`/gmc`, `/gms` も可）。 |
| `/heal [プレイヤー名]` | 体力・満腹度・状態異常を全回復します。 |
| `/feed [プレイヤー名]` | 満腹度のみを全回復します。 |
| `/invsee <プレイヤー名>` | 対象プレイヤーのインベントリを開き、閲覧・編集します。 |
| `/enderchest <プレイヤー名>` | 対象プレイヤーのエンダーチェストを開きます。 |
| `/ess reload` | 設定ファイル（`config.yml`）を再読み込みします。 |

---

## 権限ノード (Permissions)

LuckPerms などの権限管理プラグインを使用して、プレイヤーグループに割り当てる主要な権限ノードです。

### 一般グループ（default / member）向け設定例

```yaml title="LuckPerms 権限付与例" showLineNumbers
# ホーム関連
essentials.sethome
essentials.home
essentials.delhome
essentials.sethome.multiple        # 複数ホームの設定を許可

# スポーン・テレポート関連
essentials.spawn
essentials.tpa
essentials.tpaccept
essentials.tpdeny
essentials.back
essentials.back.ondeath            # 死亡地点への /back を許可

# ワープ・経済・看板利用
essentials.warp
essentials.warp.list
essentials.balance
essentials.pay
essentials.signs.use.*             # 全てのEssentials看板の利用を許可
```

### 管理者・モデレーター向け権限

```yaml title="管理者用権限" showLineNumbers
essentials.*                       # 全てのEssentials権限を付与

# または必要な権限のみ個別付与する場合:
essentials.fly
essentials.gamemode.*
essentials.invsee
essentials.teleport.cooldown.bypass # TP待機時間・クールダウンを無視
```

---

## config.yml の日本語訳・おすすめ設定

設定ファイル（`plugins/Essentials/config.yml`）の重要項目です。編集後は `/ess reload` で反映されます。

```yaml title="plugins/Essentials/config.yml" showLineNumbers
# ----------------------------------------------------
# 1. メッセージの日本語化
# ----------------------------------------------------
# デフォルトの # を外し、ja にすることでゲーム内メッセージが日本語化されます
locale: ja

# ----------------------------------------------------
# 2. テレポートの待機時間・クールダウン
# ----------------------------------------------------
# コマンド入力からテレポート実行までの待機時間（秒）。0で即時テレポート
teleport-delay: 3

# 一度テレポートした後のクールダウン時間（秒）。連打防止
teleport-cooldown: 5

# 待機中にプレイヤーが動いたりダメージを受けたりした場合、テレポートをキャンセル
teleport-safety: true

# ----------------------------------------------------
# 3. ホーム地点の最大登録数
# ----------------------------------------------------
# グループ名ごとに設定可能（権限: essentials.sethome.multiple.<グループ名>）
sethome-multiple:
  default: 3      # 一般プレイヤーは最大3箇所
  vip: 5          # VIPランクは5箇所
  staff: 10       # 運営は10箇所

# ----------------------------------------------------
# 4. 特殊看板機能の有効化
# ----------------------------------------------------
# 利用したい看板の先頭にある「#」を外して保存します
enabledSigns:
  - color         # 看板の文字色装飾 (&a など)
  - warp          # ワープ看板
  - balance       # 所持金確認看板
  - buy           # ショップ購入看板
  - sell          # ショップ売却看板
  - free          # 無料アイテム補給看板
  - heal          # 回復看板

# ----------------------------------------------------
# 5. スポーン・リスポーン優先度
# ----------------------------------------------------
# EssentialsSpawn によるスポーン制御を優先するかどうか
respawn-listener-priority: high
respawn-at-home: false
```

---

## 実践：看板機能（ショップ・ワープ）の作り方

`config.yml` の `enabledSigns` で有効化した機能は、看板を設置して以下のように記述することで作成できます。

:::info 

看板の1行目について  
設置時は `[Warp]` のように角括弧で入力します。正常に作成されると文字が自動的に**青色**に変化します。

:::

### 1. ワープ看板
右クリックすると、指定したワープポイントへテレポートします。

```text title="ワープ看板の書き方" showLineNumbers
[Warp]
<ワープ名>
```

### 2. ショップ看板（購入・売却）
プレイヤーが右クリックで購入、左クリックで売却できる看板です（要 Vault ＆ 経済プラグイン）。

```text title="購入看板 [Buy]" showLineNumbers
[Buy]
<個数>
<アイテム名またはID>
$<価格>
```

```text title="売却看板 [Sell]" showLineNumbers
[Sell]
<個数>
<アイテム名またはID>
$<価格>
```

---

## よくある質問・トラブルシューティング (FAQ)

### Q1. 一般プレイヤーが `/spawn` や `/sethome` を使えません
**原因**: 権限（Permissions）が付与されていません。  
**解決策**: LuckPerms などの権限プラグインを使って、`default` グループに `essentials.spawn` や `essentials.home`、`essentials.sethome` などの権限ノードを追加してください。

### Q2. `config.yml` を編集後、起動時にエラーが出たり元に戻ってしまいます
**原因**: YAML の構文エラー（タブ文字の使用、全角スペース、インデントずれ）が原因です。  
**解決策**:
- インデントにはタブキーを使わず、必ず **半角スペース2文字** を使用してください。
- ファイルの文字コードは必ず **UTF-8（BOMなし）** で保存してください。

### Q3. プレイヤーが死亡した際、ベッドではなくスポーン地点に戻されてしまいます
**原因**: `config.yml` のリスポーン設定がベッドより優先されています。  
**解決策**: `config.yml` の以下の項目を確認・変更してください。

```yaml title="plugins/Essentials/config.yml" showLineNumbers
# 死亡時にホーム/ベッドを最優先にする場合は true に設定
respawn-at-home: true
```