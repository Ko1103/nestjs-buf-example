# NestJS and Buf usage example for protobuf server implementation

This repository demonstrates the use of two tools. The directory structure, requirements, installation process, and how to run the application are explained below.

In this repository,

- Create a proto file according to the Buf StyleGuide
- Generate a TypeScript sdk based on the proto file in `src/proto`
- Implement a server using the proto file and TypeScript sdk in NestJS
- Containerize using Dockerfile
- Environment construction using docker-compose

## Directory Structure

```
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── nest-cli.json
├── proto // proto files
├── src
│   ├── proto // TypeScript SDK generated from proto file
│   ├── users // Users resource
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

Generate TypeScript sdk from proto file

```bash
$ npm run proto:gen
```

Restart the server

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

When there are changes to the proto file, generate the sdk again.

## License

Nest is [MIT licensed](LICENSE).
