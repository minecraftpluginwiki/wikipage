---
title: LuckPerms
description: Webエディタによる直感的なブラウザ編集と高度なグループ継承機能を備えた最高峰の権限管理プラグイン
tags: [LuckPerms, Luck (LuckPerms Team), 権限管理・パーミッション・管理者向け]
---

# LuckPerms (ラックパームス)

**LuckPerms** は、Minecraft（Spigot / Paper / Purpur / Velocity / BungeeCord 等）サーバーにおいて、プレイヤーやグループの権限（Permissions）を管理するためのデファクトスタンダードプラグインです。  
従来の権限プラグイン（PermissionsEx や GroupManager 等）と比較して圧倒的に高速・軽量であり、最大の特徴である **Webエディタ機能（`/lp editor`）** を使えば、コマンドを何十回も打つことなくブラウザ上のGUIで視覚的に権限やグループを編集できます。

:::warning

編集時点での情報を元にしています。
今後のバージョンアップで仕様変更が行われる可能性があります。

:::

## 基本情報

| 項目 | 内容 |
| :--- | :--- |
| **開発者** | Luck (LuckPerms Team) |
| **対応バージョン** | 1.8.8 〜 26.3（各バージョンおよび主要プロキシ・Mod環境に対応） |
| **前提プラグイン** | なし（※称号・プレフィックス表示連携に [Vault](https://www.spigotmc.org/resources/vault.34315/) の導入を強く推奨） |
| **ダウンロード** | [LuckPerms 公式サイト](https://luckperms.net/) / [SpigotMC](https://www.spigotmc.org/resources/luckperms.28140/) / [Modrinth](https://modrinth.com/plugin/luckperms) |

---

## 導入手順

1. **サーバーを停止する**  
   コンソールで `stop` を実行し、サーバーを完全に停止します。

2. **jar ファイルをダウンロードする**  
   [公式サイトのダウンロードページ](https://luckperms.net/download) から、お使いの環境（通常は `Bukkit / Spigot / Paper`）に合った `LuckPerms-Bukkit-x.x.x.jar` をダウンロードします。

3. **plugins フォルダへ配置する**  
   ダウンロードした `.jar` ファイルをサーバーの `plugins/` フォルダに入れます。  
   ※チャット装飾やタブリスト表示を行う場合は、同じフォルダに `Vault.jar` も配置してください。

4. **サーバーを起動する**  
   サーバーを起動すると、`plugins/LuckPerms/` ディレクトリと設定ファイル、高速な内蔵データベース（H2 Database）が自動生成されます。

5. **初期設定（コンソールからOPまたは権限付与）**  
   サーバーコンソールで次のコマンドを実行し、自身に LuckPerms の全権限を付与します。
   ```text title="サーバーコンソールで実行" showLineNumbers {1}
   lp user <あなたのMCID> permission set luckperms.* true
   ```

----

## 主なコマンド一覧

:::tip 
`/luckperms` コマンドは、すべて短縮形の **`/lp`** で実行できます。
:::

### 1. Webエディタ・基本操作
| コマンド | 説明 |
| :--- | :--- |
| `/lp editor` | ブラウザで直感的に権限編集できる Web エディタのリンクを発行します。 |
| `/lp verbose <on/off>` | プレイヤーが行動した際にチェックされた権限ノードをチャット欄にリアルタイム表示（デバッグ用）。 |
| `/lp tree` | サーバーに認識されている全権限ノードのツリー構造を表示します。 |
| `/lp reload` | 設定ファイル（`config.yml`）を再読み込みします。 |

### 2. プレイヤー（ユーザー）操作
| コマンド | 説明 |
| :--- | :--- |
| `/lp user <名前> info` | 対象プレイヤーの所属グループや付与されている権限一覧を表示します。 |
| `/lp user <名前> permission set <権限> [true/false]` | 対象プレイヤー個人に権限を付与/剥奪します。 |
| `/lp user <名前> parent set <グループ>` | 対象プレイヤーの主所属グループ（Primary Group）を変更します。 |
| `/lp user <名前> parent add <グループ>` | 対象プレイヤーにサブグループを追加します。 |

### 3. グループ操作
| コマンド | 説明 |
| :--- | :--- |
| `/lp creategroup <グループ名>` | 新しいグループ（ランク）を作成します。 |
| `/lp deletegroup <グループ名>` | 指定したグループを削除します。 |
| `/lp listgroups` | サーバー内に存在するグループの一覧を表示します。 |
| `/lp group <グループ名> permission set <権限>` | グループに権限を付与します。 |
| `/lp group <グループ名> parent add <親グループ>` | 他のグループの権限をそのまま引き継ぐ（継承する）設定をします。 |
| `/lp group <グループ名> setweight <数値>` | グループの優先度（ウェイト）を設定します（数字が大きい方が上位）。 |

----

## 実践：超便利な「Webエディタ」の使い方

LuckPerms 最大の強みは、複雑なコマンドを打たずに**ブラウザ上でマウス操作だけで権限設定ができる Web エディタ**です。

```mermaid
flowchart LR
    A["ゲーム内で /lp editor 実行"] --> B["URLをクリックしてブラウザを開く"]
    B --> C["権限・グループ・称号を編集"]
    C --> D["右上の『Save』ボタンをクリック"]
    D --> E["生成された適用コマンドをゲーム内で実行"]
```

### 手順
1. ゲーム内またはコンソールで **`/lp editor`** と入力します。
2. チャット欄に発行された専用リンクをクリックして、ブラウザで開きます。
3. 左側のメニューから `Groups`（グループ）や `Users`（プレイヤー）を選択します。
4. 下部の入力欄に付与したい権限ノード（例: `essentials.spawn`）を入力し、`Add` を押します。
5. 編集が終わったら、画面右上にある **「Save」** ボタンを押します。
6. ポップアップに表示されるコマンド（例: `/lp applyedits xxxxxxxx`）をコピーし、Minecraft のゲーム内で実行すれば数秒で設定がサーバーに反映されます。

----

## グループの階層構造（継承）と称号（プレフィックス）の設定

効率的な権限管理を行うため、グループの「継承（Inheritance）」機能を利用します。

### 1. ランク構造の作成例
上位グループが下位グループの権限を自動的にすべて引き継ぐように設定します。

```text title="グループ作成と継承の流れ" showLineNumbers {2,5-6,9-10}
# 1. 各グループを作成（default は最初から存在）
/lp creategroup vip
/lp creategroup mod
/lp creategroup admin

# 2. 権限の継承（vip は default を、mod は vip を、admin は mod を継承）
/lp group vip parent add default
/lp group mod parent add vip
/lp group admin parent add mod

# 3. 優先度（Weight）の設定（高いほど上位）
/lp group default setweight 10
/lp group vip setweight 20
/lp group mod setweight 50
/lp group admin setweight 100
```

### 2. プレフィックス（称号・肩書き）の設定
チャット欄やタブリストに表示するプレフィックスをグループごとに設定します（要 Vault ＆ チャットプラグイン）。

```text title="称号の設定例" showLineNumbers {2,5}
# 書式: /lp group <グループ名> meta setprefix <優先度> "<表示文字列>"
/lp group vip meta setprefix 20 "&a[VIP]&r "
/lp group mod meta setprefix 50 "&9[MOD]&r "
/lp group admin meta setprefix 100 "&c[ADMIN]&r "
```

----

## 権限ノード (Permissions)

LuckPerms 自身の管理コマンドを実行できる権限ノードです。

```yaml title="LuckPerms コマンド権限" showLineNumbers {1,5-7}
# 管理者向け（全コマンド操作）
luckperms.*

# モデレーター・運営向け（Webエディタと情報確認のみ許可する場合）
luckperms.editor
luckperms.user.info
luckperms.group.info
```

----

## config.yml の日本語訳・おすすめ設定

設定ファイル（`plugins/LuckPerms/config.yml`）内の重要項目です。

```yaml title="plugins/LuckPerms/config.yml" showLineNumbers {3,8,13-18}
# ----------------------------------------------------
# 1. サーバーの識別名（プロキシ・マルチサーバー用）
# ----------------------------------------------------
# 単一サーバーの場合は 'global' のままで問題ありません
server: 'global'

# ----------------------------------------------------
# 2. データベース保存方式（Storage Method）
# ----------------------------------------------------
# 初期値は 'h2'（超高速なローカルDBファイル）。通常はこのままで十分です。
# 複数サーバーで権限を共有（同期）する場合は 'mysql' または 'mariadb' に変更
storage-method: 'h2'

# ----------------------------------------------------
# 3. 外部DB（MySQL / MariaDB）設定
# ----------------------------------------------------
# storage-method を mysql にした場合に設定します
data:
  address: '127.0.0.1:3306'
  database: 'minecraft'
  username: 'root'
  password: 'your_password'
  pool-settings:
    maximum-pool-size: 10
```

----

## よくある質問・トラブルシューティング (FAQ)

### Q1. プレフィックス（称号）を設定したのにチャットに反映されません
**原因**: LuckPerms 単体にはチャットフォーマットを書き換える機能がありません。  
**解決策**:
- 前提連携プラグイン **[Vault](https://www.spigotmc.org/resources/vault.34315/)** を導入してください。
- チャット整形プラグイン（**EssentialsXChat**, **LPC**, **InteractiveChat** など）を併用し、チャットフォーマットに `{PREFIX}` や `%vault_prefix%` を設定してください。

### Q2. プレイヤーの行動時にどの権限が必要なのか分かりません
**解決策**: `/lp verbose on <プレイヤー名>` を実行すると、そのプレイヤーが行動した瞬間に要求されている権限ノード（例: `worldguard.region.bypass` など）がコンソールやチャット欄にリアルタイム表示されます。調査が終わったら `/lp verbose off` で終了してください。

### Q3. Webエディタの「Save」を押してもゲーム内に反映されません
**原因**: Webエディタの保存ボタンを押しただけではサーバーには反映されません。  
**解決策**: 保存後に画面に表示される `/lp applyedits <コード>` をコピーし、Minecraft のゲーム内（またはコンソール）で実行してください。