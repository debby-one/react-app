# React アプリケーション

このプロジェクトは、Docker を使用した React アプリケーションです。

## はじめに

開発およびテスト目的で、このプロジェクトをローカルマシンでセットアップして実行するための手順を以下に示します。

### 前提条件

- Node.js (LTS バージョンを推奨)
- npm (通常は Node.js に付属)
- Docker (Docker を使用して開発/デプロイを計画している場合)

### インストール (Node.js)

1.  `app` ディレクトリに移動します。
    ```bash
    cd app
    ```
2.  依存関係をインストールします。
    ```bash
    npm install
    ```

### アプリケーションの実行 (Node.js)

開発モードでアプリケーションを実行するには：

1.  `app` ディレクトリに移動します。
    ```bash
    cd app
    ```
2.  開発サーバーを起動します。
    ```bash
    npm start
    ```
    アプリケーションはブラウザで `http://localhost:3000` に開きます。

### アプリケーションのビルド (Node.js)

アプリケーションのプロダクションビルドを作成するには：

1.  `app` ディレクトリに移動します。
    ```bash
    cd app
    ```
2.  プロジェクトをビルドします。
    ```bash
    npm run build
    ```
    ビルド成果物は `build` フォルダに配置されます。

## Docker セットアップ

このプロジェクトには、Docker で簡単にセットアップできる `docker-compose.yml` ファイルが含まれています。

### Docker Compose を使用したビルドと実行

1.  プロジェクトのルートディレクトリ (`docker-compose.yml` がある場所) にいることを確認します。
    ```bash
    cd /home/kote2/myproject/react_app/
    ```
2.  Docker イメージをビルドし、コンテナを起動します。
    ```bash
    docker-compose up --build
    ```
    これにより、`app` サービスがビルドされ、起動します。アプリケーションは `docker-compose.yml` で設定されたポート (例: `http://localhost:3000`) を介してアクセスできるはずです。

### Docker コンテナの停止

実行中の Docker コンテナを停止するには：

```bash
docker-compose down
```