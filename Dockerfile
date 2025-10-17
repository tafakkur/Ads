FROM oven/bun:1 AS base
WORKDIR /usr/src/app

COPY bun.lock .
COPY serve ./serve
COPY package.json .
RUN bun install --frozen-lockfile

COPY index.js .

# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "index.js" ]
