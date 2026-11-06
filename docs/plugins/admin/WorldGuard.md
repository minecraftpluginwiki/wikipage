---
title: WorldGuard
description: ワールド内の特定エリアを保護し、ブロック破壊・PvP・爆発などを細かく制御する領域保護プラグイン
tags: [WorldGuard, EngineHub, 管理者向け]
---

# WorldGuard (ワールドガード)

**WorldGuard** は、Minecraft（Spigot / Paper / Purpur）サーバーにおいて、指定したエリア（領域：Region）の保護や各種ルールの制御を行える定番のセキュリティプラグインです。  
サーバーのロビーやスポーン地点でのブロック破壊・設置防止、PvPの無効化、クリーパーやTNTの爆発破壊防止、チェストやドアのアクセス制御など、サーバー運営・荒らし対策において必須の機能を提供します。

:::warning

**編集時点**での情報を元にしています。
今後のバージョンアップで仕様変更が行われる可能性があります。

:::

## 基本情報

| 項目 | 内容 |
| :--- | :--- |
| **開発者** | EngineHub (sk89q, wizjany ほか) |
| **対応バージョン** | 1.13 〜 26.3（各バージョン用のビルドが提供） |
| **前提プラグイン** | **[WorldEdit](https://enginehub.org/worldedit/)**（領域の範囲選択に必須） |
| **ダウンロード** | [EngineHub 公式サイト](https://enginehub.org/worldguard/) / [SpigotMC](https://www.spigotmc.org/resources/worldguard.40/) / [Modrinth](https://modrinth.com/plugin/worldguard) |

---

## 導入手順

1. **サーバーを停止する**  
   コンソールで `stop` を実行し、サーバーを安全に停止します。

2. **前提プラグイン（WorldEdit）を確認する**  
   WorldGuard の動作には **WorldEdit** が必須です。まだ導入していない場合は先に `plugins/` フォルダへ WorldEdit を導入してください。

3. **jar ファイルをダウンロードする**  
   サーバーバージョンに対応した `worldguard-bukkit-x.x.x.jar` をダウンロードします。

4. **plugins フォルダへ配置する**  
   ダウンロードした `.jar` ファイルをサーバーの `plugins/` フォルダに入れます。

5. **サーバーを起動する**  
   サーバーを起動すると、`plugins/WorldGuard/` ディレクトリと設定ファイルが自動生成されます。

6. **導入確認**  
   ゲーム内またはコンソールで `/rg version` を実行し、バージョン情報が表示されれば導入完了です。

----

## 主なコマンド一覧

:::tip 
`/region` コマンドは、すべて短縮形の **`/rg`** で実行できます。
:::

### 1. 領域の作成・管理
| コマンド | 説明 |
| :--- | :--- |
| `/rg define <領域名> [オーナー]` | WorldEdit で選択中の範囲を新しい保護領域として登録します。 |
| `/rg redefine <領域名>` | 既存の領域の範囲を、現在選択中の範囲で更新します。 |
| `/rg remove <領域名>` | 指定した保護領域を削除します。 |
| `/rg info [領域名]` | 領域の詳細情報（オーナー・メンバー・フラグ・境界など）を表示します。 |
| `/rg list` | 現在いるワールドに存在する保護領域の一覧を表示します。 |
| `/rg select <領域名>` | 指定した領域の範囲を WorldEdit の選択範囲として呼び出します。 |

### 2. メンバー・オーナーの管理
| コマンド | 説明 |
| :--- | :--- |
| `/rg addmember <領域名> <プレイヤー>` | 領域内で建築やチェストの利用ができる「メンバー」を追加します。 |
| `/rg removemember <領域名> <プレイヤー>` | メンバーを領域から削除します。 |
| `/rg addowner <領域名> <プレイヤー>` | 領域の設定権限を持つ「オーナー」を追加します。 |
| `/rg removeowner <領域名> <プレイヤー>` | オーナーを削除します。 |

### 3. フラグ（ルール）の設定
| コマンド | 説明 |
| :--- | :--- |
| `/rg flag <領域名> <フラグ名> <allow/deny>` | 領域にルール（許可 / 拒否）を設定します。 |
| `/rg flag <領域名> <フラグ名>` | フラグの設定を削除し、デフォルト（継承状態）に戻します。 |

----

## 主要フラグ（Flags）一覧とロビー設定例

フラグを設定することで、領域ごとの細かなルールを決定します。

### よく使う重要フラグ一覧
| フラグ名 | 設定値の例 | 説明 |
| :--- | :--- | :--- |
| **`build`** | `deny` / `allow` | ブロックの設置・破壊の許可/拒否 |
| **`pvp`** | `deny` / `allow` | プレイヤー同士の戦闘の許可/拒否 |
| **`mob-spawning`** | `deny` / `allow` | モンスター・動物の自然スポーンの制御 |
| **`creeper-explosion`** | `deny` / `allow` | クリーパーの爆発による地形破壊・ダメージの制御 |
| **`tnt`** | `deny` / `allow` | TNT の爆発・着火の制御 |
| **`chest-access`** | `deny` / `allow` | チェスト・樽・ホッパーなどの開閉 |
| **`use`** | `allow` / `deny` | 木のドア・レバー・ボタンなどの操作 |
| **`invincible`** | `allow` / `deny` | 領域内のプレイヤーを無敵状態にする |
| **`greeting`** | `<メッセージ>` | 領域に入った時に表示するメッセージ |
| **`farewell`** | `<メッセージ>` | 領域から出た時に表示するメッセージ |

### 実践：絶対に壊されない「ロビー・拠点」を作る設定例
WorldEdit の木の斧で範囲を選択した状態で、以下のコマンドを順番に実行します。

```text title="ロビー保護の手順" showLineNumbers {2,5-8}
# 1. 範囲を「lobby」という名前で領域登録
/rg define lobby

# 2. 基本ルールを設定（建築禁止・PvP禁止・クリーパー爆発無効・モンスター湧き無効）
/rg flag lobby build deny
/rg flag lobby pvp deny
/rg flag lobby creeper-explosion deny
/rg flag lobby mob-spawning deny

# 3. プレイヤーにドアやボタンの操作だけは許可する場合
/rg flag lobby use allow
```

----

## 権限ノード (Permissions)

WorldGuard のコマンドはサーバーの保護に直結するため、通常は管理者（OP）のみに付与します。

```yaml title="LuckPerms 権限付与例" showLineNumbers {1,5-7,10}
# 管理者向け（全権限）
worldguard.*

# 運営・モデレーター向け（領域の管理権限のみ）
worldguard.region.define
worldguard.region.redefine
worldguard.region.flag.*

# プレイヤーに自分の保護領域（土地）のメンバー管理を許可する場合
worldguard.region.addmember.own.*
worldguard.region.removemember.own.*

# 管理者が保護領域の制限を無視して建築・破壊できるようにする（バイパス権限）
worldguard.region.bypass.*
```

----

## config.yml の日本語訳・おすすめ設定

設定ファイル（`plugins/WorldGuard/config.yml`）内の重要項目です。サーバー全体の基本保護方針を設定できます。

```yaml title="plugins/WorldGuard/config.yml" showLineNumbers {3,7,12,16-17}
# ----------------------------------------------------
# 1. OP（管理者）が自動的に保護をバイパスするか
# ----------------------------------------------------
# true にすると、OP権限持ちは保護領域内でも制限なく建築・破壊できます
op-permissions: true

# ----------------------------------------------------
# 2. ワールド全体の火の延焼・燃え広がり防止
# ----------------------------------------------------
# 建物が火事で全焼するのを防ぐ場合は true を推奨
fire:
  disable-fire-spread: true

# ----------------------------------------------------
# 3. カブトムシ・カエル・農作物の踏み荒らし防止
# ----------------------------------------------------
# プレイヤーやモブがジャンプして畑の作物を荒らすのを防ぎます
crops:
  disable-creature-trampling: true
  disable-player-trampling: true
```

----

## 応用テクニック：領域の優先度（Priority）と親子関係

大きな街（建築禁止）の中に、**特定のプレイヤーだけが建築できる個人区画（マイホーム）** を作りたい場合に利用します。

### 優先度（Priority）を使った区画分け
狭い領域の優先度を上げることで、親の「建築禁止」ルールを上書きできます。

```text title="区画の優先度設定" showLineNumbers {2,5,8}
# 1. 街全体（town）を建築禁止にする
/rg flag town build deny

# 2. 街の中にある特定の家（house_1）の優先度を上げる（数字が大きい方が優先）
/rg setpriority house_1 10

# 3. その家に住人をメンバーとして追加
/rg addmember house_1 Steve
```

----

## よくある質問・トラブルシューティング (FAQ)

### Q1. 保護領域を作ったのに、一般プレイヤーがブロックを壊せてしまいます
**原因**: ワールド全体のグローバル領域や親領域の設定、あるいはプレイヤーに `worldguard.region.bypass.*` 権限が付与されている可能性があります。  
**解決策**:
- `/rg info <領域名>` で、`build: deny` が正しく設定されているか確認してください。
- プレイヤーの権限を確認し、バイパス権限が付与されていないか確認してください。

### Q2. 範囲を Y=0 から Y=319 まで（上空から岩盤まで）一括で保護したい
**解決策**: WorldEdit で水平方向の角2箇所を選択したあと、領域登録前に **`//expand vert`** を実行してください。垂直方向の全体が一括選択されます。

### Q3. ドアやチェストをロックするプラグイン（LWC や Lockette など）と競合しませんか？
**解決策**: WorldGuard は保護プラグインとの親和性が高く設計されています。通常は併用可能ですが、チェストの保護を他のプラグインに任せる場合は `chest-access` フラグを `allow` に設定しておくとスムーズに連携できます。