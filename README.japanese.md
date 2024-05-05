## Description

NestJS と Buf を使った protobuf のサーバ実装例です。

二つのツール

- NestJS
- Buf

を使っています。

このリポジトリでは

- Buf の StyleGuide に沿った proto ファイルの作成
- proto ファイルを元に TypeScript の sdk を `src/proto`に生成
- NestJS で proto ファイルと TypeScript の sdk を使ってサーバを実装
- Dockerfile を使ってコンテナ化
- docker-compose を使って環境構築

を行っています。

## Directory Structure

```
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── nest-cli.json
├── proto // proto ファイル
├── src
│   ├── proto // proto ファイルによって生成された TypeScript の sdk
│   ├── users // ユーザーのリソース
│   │   ├── users.controller.ts
│   │   ├── users.module.ts
│   │   ├── users.service.ts
│   ├── app.module.ts
│   ├── main.ts
├── tsconfig.build.json
├── tsconfig.json
```

## Requirements

- Docker
- Docker Compose
- Node.js v18

## Installation

```bash
$ npm install
```

## Running the app

proto ファイルから TypeScript の sdk を生成

```bash
$ npm run proto:gen
```

NestJS サーバを起動

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

.proto ファイルに変更があった場合は、再度 sdk を生成してください。

## License

Nest is [MIT licensed](LICENSE).
