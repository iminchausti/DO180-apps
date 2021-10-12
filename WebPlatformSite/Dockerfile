FROM registry.redhat.io/ubi8/nodejs-14 as builder
#USER node
ENV NPM_CONFIG_PREFIX=/home/default/.npm-global
ENV PATH=$PATH:/home/default/.npm-global/bin
WORKDIR /home/default
COPY package.json package-lock.json ./
RUN npm install --only=prod
COPY . ./
RUN npm run build

FROM bitnami/nginx:latest
COPY --from=builder /home/default/build /app
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

