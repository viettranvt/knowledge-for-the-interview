# use node with version 16
FROM node:16-alpine

# create document with name is app in docker
WORKDIR /app

# copy all file into docker
COPY . .

# install npm
RUN npm i npm@latest -g

# install package
RUN npm i

# accept port 3000
# not necessary because when running docker or docker-compose already map the port
# EXPOSE 3000

# run app
CMD [ "node", "app.js" ]