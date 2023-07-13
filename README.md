# NodeJS-Canil

#No terminal: 

1º npm init;
2º tsc --init:
configurações: rootDir, outDir,moduleResolution: node;

3º  npm install express mustache-express dotenv;

4º npm install --save-dev @types/express @types/mustache-express @types/node;
5º Criar atalhos para inicializaçaõ do nodemon: 
em "scripts": "start-dev": "nodemon -e ts,json,mustache src/server.ts"
