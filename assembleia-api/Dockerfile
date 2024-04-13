# imagem base
FROM node:18

# diretorio onde ficara a aplicacao
WORKDIR /app

# copia a pasta de codigo
COPY . .

# executa o comando para baixar as dependencias
RUN npm install 

# executar o comando d build
run npm run build

CMD ["node", "dist/main.js"]