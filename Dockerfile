# Usar uma imagem oficial do Node.js (para compilar o React)
FROM node:20 as build

# Criar um diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Construir a aplicação React
RUN npm run build

# Instalar o serve globalmente
RUN npm install -g serve

# Expor a porta que o Nginx vai usar (por exemplo, 80)
EXPOSE 80

# Comando para rodar o serve
CMD ["serve", "-s", "build", "-l", "80"]
