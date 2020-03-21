FROM node:10

# Create app directory
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run migrate


EXPOSE 8080

CMD [ "node", "index" ]