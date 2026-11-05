# Minecraft Plugins Wiki

Wikiのリポジトリです。  
Wikiは[こちら](https://mcpluginswiki.xyz/)です。

## インストール

```bash
npm install
```

**注**: お好みのパッケージマネージャーを自由に使ってください。

## ローカル開発

```bash
npm run start
```

このコマンドを実行すると、ローカル開発サーバーが起動し、ブラウザウィンドウが開きます。ほとんどの変更は、サーバーを再起動することなく即座に反映されます。

## ビルド

```bash
npm run build
```

このコマンドは静的コンテンツを `build` ディレクトリに生成します。生成されたコンテンツは、任意の静的コンテンツホスティングサービスを利用して配信可能です。


## デプロイ

SSHを使用する場合:

```bash
USE_SSH=true npm run deploy
```

SSHを使用しない場合：

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

GitHub Pagesでホスティングしている場合、このコマンドを使うと、ウェブサイトをビルドして`gh-pages`ブランチにプッシュする作業を簡単に行うことができます。