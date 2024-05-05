FROM node:18-slim AS build

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

WORKDIR /home/node
COPY package.json package-lock.json .
# if you dont need npmrc secret, RUN npm ci
# RUN --mount=type=secret,id=npm,target=/root/.npmrc npm ci
RUN npm ci
COPY . .
RUN npm run build


FROM node:18-slim
ENV NODE_ENV=production

COPY --from=build --chown=node:node /tini /tini

WORKDIR /home/node
COPY --from=build --chown=node:node /home/node/node_modules node_modules
COPY --from=build --chown=node:node /home/node/package*.json .
COPY --from=build --chown=node:node /home/node/dist dist
COPY --from=build --chown=node:node /home/node/proto proto

USER node
RUN npm prune --production

EXPOSE 3000 5000
ENTRYPOINT ["/tini", "--"]
CMD [ "node", "dist/main.js" ]
