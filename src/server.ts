import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routers/index';

dotenv.config()

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')));
//rotas

server.use(mainRoutes);

//caso nao encontre nenhuma rota:
server.use((req, res)=>{
    res.send('página não encontrada!')
})


server.listen(process.env.PORT)