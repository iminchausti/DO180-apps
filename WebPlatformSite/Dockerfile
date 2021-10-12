FROM registry.redhat.io/ubi8/nodejs-14 as builder
#USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /usr/src/app
RUN ls -la /usr/src/app
RUN whoami
RUN ls -la /home/node
COPY package.json package-lock.json ./
RUN npm install --only=prod
COPY . ./
RUN npm run build

FROM bitnami/nginx:latest
COPY --from=builder /usr/src/app /app
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

