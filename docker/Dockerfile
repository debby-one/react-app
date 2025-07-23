# ベースイメージの指定
FROM node:lts-bullseye

# 作業ディレクトリの指定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションの起動
CMD ["npm", "start"]
