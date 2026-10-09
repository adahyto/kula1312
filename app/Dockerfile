# Build the Svelte app, then run it on a supported Node as an unprivileged user (until 2026-10-09 this was
# node:alpine3.14 — Node 18.3 on Alpine 3.14, both out of support — running as root)
FROM node:22-alpine AS build

WORKDIR /usr/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine

ENV NODE_ENV=production
WORKDIR /usr/app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY server.js ./
COPY --from=build /usr/app/public ./public

USER node
EXPOSE 3009

CMD ["node", "server.js"]
