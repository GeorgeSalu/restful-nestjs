FROM node:18

WORKDIR /app

COPY . .

RUN npm install 

run npm run build

CMD ["node", "dist/main.js"]