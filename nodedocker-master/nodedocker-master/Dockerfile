FROM node:8

#create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json and package-lock.json are copied
# where available(npm@5+)

COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm install --only=production
# bundle app source
COPY . .

EXPOSE 8010

CMD ["npm","start"]