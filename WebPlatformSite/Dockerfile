FROM registry.redhat.io/ubi8/nodejs-14 as builder
USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/node
COPY --chown=node:node package.json package-lock.json ./
RUN npm install --only=prod
COPY --chown=node:node . ./
RUN npm run build

FROM bitnami/nginx:latest
COPY --from=builder /home/node/build /app
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

